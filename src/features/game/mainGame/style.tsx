import styled from "styled-components";

interface StyleMainGameProps {
  display?: boolean;
}

const StyleMainGame = styled.div<StyleMainGameProps>`
  margin-top: 2.4rem;
  display: ${(props) => (props.display ? "block" : "none")};

  & > button {
    width: 100%;
  }

  .action-buttons {
    margin: 4.8rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    button {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      cursor: pointer;
      border-radius: var(--border-radius);
      border: 0;
      padding: 1.6rem 2.4rem;
      font-size: 1.8rem;
      font-weight: var(--fw-medium);
      gap: 1rem;
      transition: all 0.3s;
      background: var(--color-gray-transparent);
      color: var(--color-white);

      &:hover {
        background: var(--color-gray-transparent-hover);
      }
    }
  }
`;

export default StyleMainGame;
