import styled from "styled-components";

interface StyleButtonProps {
  btnType?: string;
  disabled?: boolean;
}

const StyleButton = styled.button<StyleButtonProps>`
  cursor: pointer;
  border-radius: var(--border-radius);
  border: 0;
  padding: 1.6rem 3.2rem;
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: var(--fw-medium);
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};

  transition: all 0.3s;
  background: ${(props) =>
    props.btnType === "transparent"
      ? "var(--color-gray-transparent)"
      : "var(--color-white)"};
  color: ${(props) =>
    props.btnType === "transparent"
      ? "var(--color-white)"
      : "var(--color-black)"};

  &:hover {
    background: ${(props) =>
      props.btnType === "transparent"
        ? "var(--color-gray-transparent-hover)"
        : "var(--color-white-hover)"};
  }
`;

export default StyleButton;
