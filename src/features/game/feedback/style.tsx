import styled from "styled-components";

interface StyleFeedbackProps {
  display?: boolean;
}

const StyleFeedback = styled.div<StyleFeedbackProps>`
  display: ${(props) => (props.display ? "flex" : "none")};
  padding: 2.4rem 0 0;
  font-size: 1.8rem;
  text-align: center;
  flex-direction: column;
  align-items: center;

  .score {
    margin: 2.4rem 0;
    font-weight: var(--fw-bold);
    font-size: 2.4rem;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--color-primary);
    background: rgb(255, 255, 255, 0.12);
  }

  .feedback {
    font-size: 1.6rem;
    font-weight: var(--fw-regular);
  }

  & > button {
    margin-top: 4.8rem;
    width: 100%;
  }
`;

export default StyleFeedback;
