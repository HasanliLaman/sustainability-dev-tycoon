import styled from "styled-components";

const StyleBackground = styled.div`
  background-color: var(--color-secondary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  @keyframes pulse {
    0% {
      border-radius: 50%;
    }
    25% {
      border-radius: 55% 45% 60% 40%;
    }
    50% {
      border-radius: 60% 40% 50% 50%;
    }
    75% {
      border-radius: 45% 55% 50% 50%;
    }
    100% {
      border-radius: 50%;
    }
  }

  .circle-big {
    border-radius: 50%;
    background: #349b5d;
    position: absolute;
    animation: pulse 8s infinite ease-in-out;

    &:first-of-type {
      height: 30rem;
      width: 30rem;
      left: -20rem;
      top: -5rem;
      filter: blur(11rem);
    }

    &:nth-of-type(2) {
      height: 35rem;
      width: 35rem;
      filter: blur(14rem);
      top: 20rem;
      right: -30rem;
    }

    &:last-of-type {
      height: 60rem;
      width: 60rem;
      filter: blur(14rem);
      left: 32rem;
      bottom: -55rem;
    }
  }

  @media (max-width: 768px) {
    .circle-big {
      display: none;
    }
  }
`;

export default StyleBackground;
