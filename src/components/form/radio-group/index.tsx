import { useState } from "react";
import StyleRadioGroup from "./style";

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: Option[];
}

const RadioGroup: React.FC<RadioGroupProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <StyleRadioGroup role="group">
      {options.map((el) => (
        <label key={el.value}>
          {el.label}
          <input
            type="radio"
            value={el.value}
            checked={selectedOption === el.value}
            onChange={handleChange}
          />
          <span></span>
        </label>
      ))}
    </StyleRadioGroup>
  );
};

export default RadioGroup;
