import styled, { keyframes } from "styled-components";

const fill = keyframes`
  from { width: 0%; }
  to { width: 100%; }
`;

const StyleLoading = styled.div`
  width: 100%;
  max-width: 49.5rem;
  height: 2rem;
  background: transparent;
  border: 1px solid var(--color-white);
  border-radius: var(--border-radius);
  overflow: hidden;

  & > div {
    height: 100%;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 0.4rem,
      var(--color-primary) 0.4rem,
      var(--color-primary) 1rem
    );
    animation: ${fill} 10s;
  }
`;

export default StyleLoading;
