import iconEye from "../../../assets/icons/eye.svg";
import iconEyeClosed from "../../../assets/icons/eye-closed.svg";
import StyleInput from "./style";
import { useState } from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, id, name, placeholder }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <StyleInput>
      <div>
        <input
          placeholder={placeholder}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          id={id}
          name={name}
        />
        {type === "password" &&
          (showPassword ? (
            <img
              onClick={() => setShowPassword(false)}
              src={iconEyeClosed}
              alt="do not show password"
            />
          ) : (
            <img
              onClick={() => setShowPassword(true)}
              src={iconEye}
              alt="show password"
            />
          ))}
      </div>
      {/* <p className="error-text">alklakslkaldhas</p> */}
    </StyleInput>
  );
};

export default Input;
