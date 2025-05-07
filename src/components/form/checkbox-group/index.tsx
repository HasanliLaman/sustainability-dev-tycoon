import StyleCheckboxGroup from "./style";

interface Option {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  options: Option[];
  fieldName: string;
  title: string;
  value: string[];
  onChange: (value: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  fieldName,
  title,
  value,
  onChange,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: checkboxValue, checked } = event.target;
    if (checked) {
      onChange([...value, checkboxValue]);
    } else {
      onChange(value.filter((v) => v !== checkboxValue));
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
              checked={value.includes(option.value)}
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
