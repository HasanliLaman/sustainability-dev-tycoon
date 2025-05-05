import styled from "styled-components";
import iconChecked from "../../../assets/icons/checked.svg";

const StyleCheckboxGroup = styled.div`
  font-size: 1.8rem;

  p {
    margin-bottom: 1.6rem;
  }

  label {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    border-radius: var(--border-radius);
    border: 2px solid transparent;
    background: var(--color-gray-transparent);
    padding: 1.2rem 1.6rem;
    cursor: pointer;
    gap: 1rem;

    &:has(input:checked) {
      border: 2px solid var(--color-primary);
    }

    input {
      opacity: 0;
      cursor: pointer;
    }

    input:checked ~ span {
      position: relative;
      border: 1px solid #3182ce;

      &:after {
        background-color: var(--color-white);
        background-image: url("${iconChecked}");
        background-repeat: no-repeat;
        background-position: center;
        content: "";
        height: 100%;
        position: absolute;
        width: 100%;
        border-radius: 0.6rem;
      }
    }

    span {
      background: transparent;
      border: 2px solid var(--color-white);
      border-radius: 0.6rem;
      height: 2.4rem;
      width: 2.4rem;
    }
  }

  .checkbox-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem;

    @media (max-width: 576px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyleCheckboxGroup;
