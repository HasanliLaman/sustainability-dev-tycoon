import Button from "../../../components/button";
import Range from "../../../components/form/range";
import StyleDimensionForm from "./style";

const DimensionForm = () => {
  return (
    <StyleDimensionForm>
      <div className="range-group">
        <Range name="individual" label="Individual" />
        <Range name="economic" label="Economic" />
        <Range name="social" label="Social" />
        <Range name="environmental" label="Environmental" />
        <Range name="technical" label="Technical" />
      </div>
      <div className="save-btn">
        <Button text="Save" onClick={() => {}} />
      </div>
    </StyleDimensionForm>
  );
};

export default DimensionForm;
