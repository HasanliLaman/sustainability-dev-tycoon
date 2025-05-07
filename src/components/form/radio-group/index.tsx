import StyleRadioGroup from "./style";

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <StyleRadioGroup role="group">
      {options.map((el) => (
        <label key={el.value}>
          {el.label}
          <input
            type="radio"
            value={el.value}
            checked={value === el.value}
            onChange={handleChange}
          />
          <span></span>
        </label>
      ))}
    </StyleRadioGroup>
  );
};

export default RadioGroup;
