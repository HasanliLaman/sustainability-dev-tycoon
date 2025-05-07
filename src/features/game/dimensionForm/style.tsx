import styled from "styled-components";

interface StyleDimensionFormProps {
  display?: boolean;
}

const StyleDimensionForm = styled.div<StyleDimensionFormProps>`
  display: ${(props) => (props.display ? "block" : "none")};
  .range-group {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin: 2.4rem 0;
  }

  .save-btn {
    display: flex;
    justify-content: flex-end;

    & button {
      width: 23.4rem;
    }

    @media (max-width: 576px) {
      & button {
        width: 100%;
      }
    }
  }
`;

export default StyleDimensionForm;
