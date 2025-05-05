import styled from "styled-components";

const StyleRadioGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.4rem 1.6rem;

  label {
    font-size: 1.8rem;
    gap: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--border-radius);
    border: 2px solid transparent;
    background: var(--color-gray-transparent);
    padding: 1.2rem 1.6rem;
    cursor: pointer;
    margin: 0;

    input {
      opacity: 0;
      cursor: pointer;
    }

    input:checked ~ span {
      position: relative;

      &:after {
        background: var(--color-white);
        border-radius: 50%;
        content: "";
        height: 1.2rem;
        position: absolute;
        width: 1.2rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    span {
      background: transparent;
      border: 2px solid var(--color-white);
      border-radius: 50%;
      height: 2.4rem;
      width: 2.4rem;
    }

    &:has(input:checked) {
      border: 2px solid var(--color-primary);
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export default StyleRadioGroup;
