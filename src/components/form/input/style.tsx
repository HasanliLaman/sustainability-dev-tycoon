import styled from "styled-components";

const StyleInput = styled.div`
  & > div {
    padding: 1.2rem 1.6rem;
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.4);
    display: flex;
    align-items: center;

    &.error {
      border-bottom: 1.5px solid var(--color-error);

      &:has(input:focus),
      &:has(input:active),
      &:has(input:not(:placeholder-shown)) {
        border-bottom: 1.5px solid var(--color-error);
      }
    }

    &:has(input:focus),
    &:has(input:active),
    &:has(input:not(:placeholder-shown)) {
      border-bottom: 1.5px solid rgba(255, 255, 255, 1);
    }

    img {
      cursor: pointer;
    }

    input {
      border: 0;
      background: transparent;
      outline: 0;
      color: var(--color-white);
      font-size: 1.8rem;
      flex: 1 1;
      caret-color: var(--color-primary);

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  .error-text {
    color: var(--color-error);
    margin-top: 1.2rem;
    font-size: 1.4rem;
    font-weight: var(--fw-regular);
  }
`;

export default StyleInput;
