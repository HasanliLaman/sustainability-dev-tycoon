import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import StyleButton from "./style";

library.add(faSpinner);

interface ButtonProps {
  text: string;
  onClick: () => void;
  btnType?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  btnType,
  isLoading,
}) => {
  return (
    <StyleButton disabled={isLoading} btnType={btnType} onClick={onClick}>
      {text}
      {isLoading && (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          style={{
            color: "#000",
            fontSize: "20px",
          }}
        />
      )}
    </StyleButton>
  );
};

export default Button;
