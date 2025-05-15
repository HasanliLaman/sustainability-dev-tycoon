import StyleRange from "./style";
import { useSound } from "use-sound";
import selectSound from "../../../assets/sounds/select.mp3";

interface RangeProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Range: React.FC<RangeProps> = ({ name, label, value, onChange }) => {
  const [playSelect] = useSound(selectSound);

  return (
    <StyleRange value={Number(value) * 10}>
      <label>
        {label}: {value}
      </label>
      <input
        type="range"
        id={name}
        name={name}
        min="0"
        max="10"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          playSelect();
        }}
      />
    </StyleRange>
  );
};

export default Range;
