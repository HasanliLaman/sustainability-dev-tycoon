import styled from "styled-components";

const StyleSqaForm = styled.div`
  margin-top: 2.4rem;
  .save-btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 4.8rem;

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

export default StyleSqaForm;
