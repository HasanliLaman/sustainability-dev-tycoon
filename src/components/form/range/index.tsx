import StyleRange from "./style";

interface RangeProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Range: React.FC<RangeProps> = ({ name, label, value, onChange }) => {
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
        onChange={(e) => onChange(e.target.value)}
      />
    </StyleRange>
  );
};

export default Range;
