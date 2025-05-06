import styled from "styled-components";

const StyleDashboard = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4rem;
  min-height: 100vh;
  padding: 1.6rem;

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2.4rem;
  }

  .title {
    font-weight: var(--fw-bold);
    font-size: 3.6rem;
    letter-spacing: 1.5px;
    text-align: center;

    span {
      color: var(--color-primary);
    }
  }

  @media (max-width: 576px) {
    .buttons {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyleDashboard;
