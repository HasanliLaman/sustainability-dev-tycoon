import styled from "styled-components";

interface StyleDomainFormProps {
  display?: boolean;
}

const StyleDomainForm = styled.div<StyleDomainFormProps>`
  margin-top: 2.4rem;
  display: ${(props) => (props.display ? "block" : "none")};
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

export default StyleDomainForm;
