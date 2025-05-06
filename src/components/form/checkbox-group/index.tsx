import { useState } from "react";
import StyleCheckboxGroup from "./style";

interface Option {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  options: Option[];
  fieldName: string;
  title: string;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  fieldName,
  title,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelected((prev) => [...prev, value]);
    } else {
      setSelected((prev) => prev.filter((v) => v !== value));
    }
  };

  return (
    <StyleCheckboxGroup>
      <p>You can select up to 5 {title}</p>
      <div className="checkbox-group">
        {options.map((option) => (
          <label key={option.value}>
            {option.label}
            <input
              type="checkbox"
              name={fieldName}
              value={option.value}
              checked={selected.includes(option.value)}
              onChange={handleCheckboxChange}
            />
            <span></span>
          </label>
        ))}
      </div>
    </StyleCheckboxGroup>
  );
};

export default CheckboxGroup;
