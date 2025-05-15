import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useSound } from "use-sound";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "../../../components/container";
import DimensionForm from "../../../features/game/dimensionForm";
import DomainForm from "../../../features/game/domainForm";
import MainGame from "../../../features/game/mainGame";
import PatternsForm from "../../../features/game/patternsForm";
import Feedback from "../../../features/game/feedback";
import SqaForm from "../../../features/game/sqaForm";
import { calculateScore } from "../../../utils/gameUtils";
import resultsSound from "../../../assets/sounds/results.wav";
import { gameSchema } from "./schema";
import StyleGame from "./style";

const Game = () => {
  const [openSqa, setOpenSqa] = useState(false);
  const [openDomain, setOpenDomain] = useState(false);
  const [openDimension, setOpenDimension] = useState(false);
  const [openPatterns, setOpenPatterns] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [gameName, setGameName] = useState<string>("");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const [playResults] = useSound(resultsSound);

  const onBackBtn = () => {
    setOpenDimension(false);
    setOpenDomain(false);
    setOpenPatterns(false);
    setOpenSqa(false);
  };

  const methods = useForm({
    resolver: yupResolver(gameSchema),
  });

  let headerTitle = "Design Your System";

  if (showFeedback) {
    headerTitle = "Results";
  } else if (openSqa) {
    headerTitle = "Choose Attributes";
  } else if (openPatterns) {
    headerTitle = "Choose Design Patterns";
  } else if (openDomain) {
    headerTitle = "Choose Domain";
  } else if (openDimension) {
    headerTitle = "Adjust Dimensions";
  }

  const submitHandler = async function (formData: {
    name: string;
    domain: string;
    attributes: string[];
    patterns: string[];
    dimensionValues: {
      individual: number;
      social: number;
      technical: number;
      environmental: number;
      economic: number;
    };
  }) {
    const formattedDimensions = {
      economic: formData.dimensionValues.economic,
      individual: formData.dimensionValues.individual,
      social: formData.dimensionValues.social,
      environmental: formData.dimensionValues.environmental,
      technical: formData.dimensionValues.technical,
    };

    const { score, das, sqcs, dpcs } = calculateScore(
      formData.domain,
      formData.attributes,
      formData.patterns,
      formattedDimensions
    );

    let feedback = "🎉 Great job! Your application is sustainable.";

    if (das < 0.7 || sqcs < 0.7 || dpcs < 0.7) {
      feedback = "";
      if (das < 0.7)
        feedback +=
          "⚠️ Your sustainability priorities don’t align well with this domain.\n ";
      if (sqcs < 0.7)
        feedback +=
          "⚠️ The selected SQAs are not highly suitable for this domain.\n ";
      if (dpcs < 0.7)
        feedback +=
          "⚠️ Your selected design patterns don’t strongly support your application.";
    }

    playResults();
    setFinalScore(Math.round(score * 100));
    setGameName(formData.name);
    setShowFeedback(true);
    setFeedbackMessage(feedback);
  };

  const handleRestart = () => {
    setShowFeedback(false);
    setFinalScore(0);
    setGameName("");
    setFeedbackMessage("");
    methods.reset({
      name: "",
      domain: "",
      attributes: [],
      patterns: [],
      dimensionValues: {
        individual: 0,
        social: 0,
        technical: 0,
        environmental: 0,
        economic: 0,
      },
    });
  };

  return (
    <StyleGame>
      <Container
        onBackBtn={onBackBtn}
        header={headerTitle}
        homeIcon={!openSqa && !openDimension && !openPatterns && !openDomain}
        backIcon={openSqa || openDimension || openPatterns || openDomain}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitHandler)}>
            <Feedback
              score={finalScore}
              name={gameName}
              display={showFeedback}
              feedbackMessage={feedbackMessage}
              handleRestart={handleRestart}
            />
            <MainGame
              display={
                !openSqa &&
                !openDimension &&
                !openPatterns &&
                !openDomain &&
                !showFeedback
              }
              setOpenDimension={setOpenDimension}
              setOpenDomain={setOpenDomain}
              setOpenPatterns={setOpenPatterns}
              setOpenSqa={setOpenSqa}
              {...methods.register("name")}
            />
            <SqaForm display={openSqa} setOpenSqa={setOpenSqa} />
            <DomainForm display={openDomain} setOpenDomain={setOpenDomain} />
            <PatternsForm
              display={openPatterns}
              setOpenPatterns={setOpenPatterns}
            />
            <DimensionForm
              display={openDimension}
              setOpenDimension={setOpenDimension}
            />
          </form>
        </FormProvider>
      </Container>
    </StyleGame>
  );
};

export default Game;
