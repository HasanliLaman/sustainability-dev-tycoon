import {
  dimensionScoresTable,
  qualityAttributesScoresTable,
  designPatternsScoresTable,
  dasWeight,
  sqcsWeight,
  dpcsWeight,
} from "./data";

/**
 * Calculate sustainability score
 * @param domainVal string
 * @param qualityAttributesVal string[]
 * @param designPatternsVal string[]
 * @param dimensionsVal { [dimension: string]: number }
 * @returns { score: number, das: number, sqcs: number, dpcs: number }
 */

export function calculateScore(
  domainVal: string,
  qualityAttributesVal: string[],
  designPatternsVal: string[],
  dimensionsVal: { [key: string]: number }
) {
  // 1. Dimension Alignment Score
  const domainDim = dimensionScoresTable.find((el) => el.domain === domainVal);
  if (!domainDim) {
    console.warn(`No dimension scores found for domain: ${domainVal}`);
    return { score: 0, das: 0, sqcs: 0, dpcs: 0 };
  }
  const dimensionScores: { [key: string]: number } = domainDim.scores;
  const sumOfWeights = Object.values(dimensionScores).reduce(
    (a, b) => a + b,
    0
  );

  const dimensionsAlignment = Object.keys(dimensionsVal).map((key) => {
    return (
      (1 - Math.abs(dimensionsVal[key] - dimensionScores[key]) / 9) *
      (dimensionScores[key] / sumOfWeights)
    );
  });
  const das = dimensionsAlignment.reduce((acc, val) => acc + val, 0);

  // 2. Software Quality Contribution Score
  const sqaEntry = qualityAttributesScoresTable.find(
    (el) => el.domain === domainVal
  );
  if (!sqaEntry) {
    console.warn(`No SQA scores found for domain: ${domainVal}`);
    return { score: 0, das, sqcs: 0, dpcs: 0 };
  }
  const sqaScores = sqaEntry.scores;
  const scoresTotal = qualityAttributesVal.reduce(
    (acc, sqa) => acc + (sqaScores[sqa as keyof typeof sqaScores] || 0),
    0
  );
  const sqcs = scoresTotal / (10 * qualityAttributesVal.length);

  // 3. Design Pattern Contribution Score
  const impactScores = designPatternsVal.map((pattern) => {
    const patternImpact = qualityAttributesVal.reduce((acc, sqa) => {
      const sqaPatternEntry = designPatternsScoresTable.find(
        (el) => el.qualityAttribute === sqa
      );
      const patternScore =
        sqaPatternEntry?.scores[
          pattern as keyof typeof sqaPatternEntry.scores
        ] ?? 0;
      return (
        acc +
        (patternScore * (sqaScores[sqa as keyof typeof sqaScores] || 0)) / 10
      );
    }, 0);
    return patternImpact / qualityAttributesVal.length;
  });
  const dpcs =
    impactScores.reduce((acc, val) => acc + val, 0) / impactScores.length;

  // 4. Final score
  const score = dasWeight * das + sqcsWeight * sqcs + dpcsWeight * dpcs;

  return { score, das, sqcs, dpcs };
}
