import { useState } from "react";
import StyleRange from "./style";

interface RangeProps {
  name: string;
  label: string;
}

const Range: React.FC<RangeProps> = ({ name, label }) => {
  const [value, setValue] = useState<string>("1");

  return (
    <StyleRange value={((Number(value) - 1) * 100) / 9}>
      <label>
        {label}: {value}
      </label>
      <input
        type="range"
        id={name}
        name={name}
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </StyleRange>
  );
};

export default Range;
