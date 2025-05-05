import styled from "styled-components";

interface StyleRangeProps {
  value: number;
}

const StyleRange = styled.div<StyleRangeProps>`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.2rem 0;
  font-size: 1.8rem;

  input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 0.8rem;
    border-radius: var(--border-radius);
    background: ${({ value }) =>
      `linear-gradient(to right, var(--color-accent) ${value}%, #E9EAEB ${value}%)`};
    outline: none;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      background: var(--color-white);
      cursor: pointer;
      border: 1px solid var(--color-accent);
    }

    &::-moz-range-thumb {
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 50%;
      background: var(--color-white);
      cursor: pointer;
      border: 1px solid var(--color-accent);
    }
  }
`;

export default StyleRange;
