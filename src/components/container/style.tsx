import styled from "styled-components";

const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 1.6rem;

  & > div {
    border-radius: var(--border-radius);
    background: var(--color-gray-transparent);
    padding: 3.2rem;
    max-width: 80rem;
    width: 100%;
  }

  header {
    display: flex;
    align-items: center;
    gap: 2.4rem;
    padding-bottom: 1.6rem;

    h2 {
      font-size: 2.4rem;
      flex: 1 1;
      font-weight: var(--fw-medium);
    }
  }

  .header-btn {
    background: transparent;
    padding: 0;
    border: 0;
    cursor: pointer;
  }
`;

export default StyleContainer;
