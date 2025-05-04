import { ReactNode } from "react";
import iconHome from "../../assets/icons/home.svg";
import iconBack from "../../assets/icons/back-arrow.svg";
import StyleContainer from "./style";
import { useNavigate } from "react-router";

interface ContainerProps {
  children: ReactNode;
  header: string;
  homeIcon: boolean;
  backIcon: boolean;
  backUrl: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  header,
  homeIcon,
  backIcon,
  backUrl,
}) => {
  const navigate = useNavigate();

  const onBackBtn = () => navigate(backUrl);
  const onHomeBtn = () => navigate("/");

  return (
    <StyleContainer>
      <div>
        <header>
          {backIcon && (
            <button onClick={onBackBtn} className="header-btn">
              <img src={iconBack} alt="back" />
            </button>
          )}
          <p>{header}</p>
          {homeIcon && (
            <button onClick={onHomeBtn} className="header-btn">
              <img src={iconHome} alt="home" />
            </button>
          )}
        </header>
        {children}
      </div>
    </StyleContainer>
  );
};

export default Container;
