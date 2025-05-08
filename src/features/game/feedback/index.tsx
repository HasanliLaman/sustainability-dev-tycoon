import Button from "../../../components/button";
import StyleFeedback from "./style";

interface FeedbackProps {
  display: boolean;
  score: number;
  name: string;
  feedbackMessage: string;
  handleRestart: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({
  display,
  score,
  name,
  feedbackMessage,
  handleRestart,
}) => {
  return (
    <StyleFeedback display={display}>
      <p>The sustainability score of "{name}" is</p>
      <div className="score">{score}</div>
      <p className="feedback">{feedbackMessage}</p>
      <Button text="Restart" type="button" onClick={handleRestart} />
    </StyleFeedback>
  );
};

export default Feedback;
