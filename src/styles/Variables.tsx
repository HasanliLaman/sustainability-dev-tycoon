import { css } from "styled-components";

const Variables = css`
  :root {
    --color-white: #fff;
    --color-black: #000;
    --color-primary: #1bb659;
    --color-secondary: #10061e;
    --color-accent: #7f56d9;
    --color-gray-transparent: rgba(255, 254, 254, 0.23);
    --color-gray-transparent-hover: rgba(255, 254, 254, 0.33);
    --color-white-hover: rgba(255, 255, 255, 0.7);

    --border-radius: 4px;

    --fw-regular: 400;
    --fw-medium: 500;
    --fw-semibold: 600;
    --fw-bold: 700;

    --font-family: "Poppins", sans-serif;

    --screen-sm: 576px;
    --screen-md: 768px;
    --screen-lg: 992px;
    --screen-xl: 1200px;
  }
`;

export default Variables;
