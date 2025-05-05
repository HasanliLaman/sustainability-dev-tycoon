import Container from "../../../components/container";
import StyleTutorial from "./style";

const Tutorial = () => {
  return (
    <StyleTutorial>
      <Container header="How to play?" homeIcon={true} backIcon={false}>
        <article>
          <p>
            In Sustainability Dev Tycoon, you step into the role of a software
            development manager working to build a sustainable software product.
            You will start by choosing a software domain such as healthcare,
            social media, or fitness applications, each with its own
            sustainability challenges. Then you will adjust sliders to set how
            important different sustainability dimensions are to you. These
            include environmental, economic, social, technical, and individual
            factors. After that, you will pick up to five software quality
            attributes (SQAs) to focus on, such as availability, security,
            usability, or energy efficiency.
          </p>
          <p>
            Once you have selected your priorities, you will choose design
            patterns for each SQA to help you achieve your goals. Every design
            pattern influences sustainability differently. Some improve certain
            aspects but might have drawbacks in others. When you have made your
            choices, the game calculates your sustainability score based on how
            well your decisions align with expert recommendations. You can play
            multiple times, experimenting with different strategies to see how
            your decisions affect sustainability outcomes and explore the
            trade-offs involved in sustainable software development.
          </p>
        </article>
      </Container>
    </StyleTutorial>
  );
};

export default Tutorial;
