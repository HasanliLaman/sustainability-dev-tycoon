import { useState, forwardRef } from "react";
import { useSound } from "use-sound";
import typingSound from "../../../assets/sounds/typing.mp3";
import iconEye from "../../../assets/icons/eye.svg";
import iconEyeClosed from "../../../assets/icons/eye-closed.svg";
import StyleInput from "./style";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  errorMsg: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, placeholder, errorMsg, onChange, onBlur }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [typingEventSound] = useSound(typingSound);

    return (
      <StyleInput>
        <div className={errorMsg ? "error" : ""}>
          <input
            placeholder={placeholder}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            id={name}
            name={name}
            onChange={(event) => {
              typingEventSound();
              if (onChange) {
                onChange(event);
              }
            }}
            onBlur={onBlur}
            ref={ref}
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
        {errorMsg && <p className="error-text">{errorMsg}</p>}
      </StyleInput>
    );
  }
);

export default Input;
