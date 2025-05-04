import StyleButton from "./style";

interface ButtonProps {
  text: string;
  onClick: () => void;
  btnType?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, btnType }) => {
  return (
    <StyleButton btnType={btnType} onClick={onClick}>
      {text}
    </StyleButton>
  );
};

export default Button;
