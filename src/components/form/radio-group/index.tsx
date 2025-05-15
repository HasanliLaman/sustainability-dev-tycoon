import StyleRadioGroup from "./style";
import { useSound } from "use-sound";
import selectSound from "../../../assets/sounds/select.mp3";

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
  const [playSelect] = useSound(selectSound);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    playSelect();
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
