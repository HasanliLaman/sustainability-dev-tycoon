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
  let totalScore = 0;
  let maxPossibleScore = 0;

  qualityAttributesVal.forEach((sqa) => {
    const sqaScore = sqaScores[sqa as keyof typeof sqaScores] || 0;

    const bestMatch = Math.max(
      ...designPatternsVal.map((pattern) => {
        const patternEntry = designPatternsScoresTable.find(
          (el) => el.qualityAttribute === sqa
        );
        const rawScore =
          patternEntry?.scores[pattern as keyof typeof patternEntry.scores] ||
          0;
        return rawScore * 10;
      })
    );

    totalScore += (bestMatch * sqaScore) / 10;
    maxPossibleScore += sqaScore;
  });

  const dpcs = maxPossibleScore === 0 ? 0 : totalScore / maxPossibleScore;

  // 4. Final score
  const score = dasWeight * das + sqcsWeight * sqcs + dpcsWeight * dpcs;

  console.log(das, sqcs, dpcs);

  return { score, das, sqcs, dpcs };
}
