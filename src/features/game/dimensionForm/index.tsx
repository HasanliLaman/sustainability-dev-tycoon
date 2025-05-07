import { Controller, useFormContext } from "react-hook-form";
import Button from "../../../components/button";
import Range from "../../../components/form/range";
import StyleDimensionForm from "./style";
import { toast } from "react-toastify";

interface DimensionFormProps {
  display: boolean;
  setOpenDimension: (value: boolean) => void;
}

const DimensionForm: React.FC<DimensionFormProps> = ({
  display,
  setOpenDimension,
}) => {
  const { control, trigger } = useFormContext();

  return (
    <StyleDimensionForm display={display}>
      <div className="range-group">
        <Controller
          name="dimensionValues.individual"
          control={control}
          render={({ field }) => (
            <Range
              name={field.name}
              label="Individual"
              value={field.value || "0"}
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />
        <Controller
          name="dimensionValues.economic"
          control={control}
          render={({ field }) => (
            <Range
              name={field.name}
              label="Economic"
              value={field.value || "0"}
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />
        <Controller
          name="dimensionValues.social"
          control={control}
          render={({ field }) => (
            <Range
              name={field.name}
              label="Social"
              value={field.value || "0"}
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />
        <Controller
          name="dimensionValues.environmental"
          control={control}
          render={({ field }) => (
            <Range
              name={field.name}
              label="Environmental"
              value={field.value || "0"}
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />
        <Controller
          name="dimensionValues.technical"
          control={control}
          render={({ field }) => (
            <Range
              name={field.name}
              label="Technical"
              value={field.value || "0"}
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />
      </div>
      <div className="save-btn">
        <Button
          text="Save"
          type="button"
          onClick={async () => {
            const isValid = await trigger("dimensionValues");
            if (isValid) {
              setOpenDimension(false);
              return;
            }
            toast.error(
              "Please choose a value between 1 and 10 for each dimension!"
            );
          }}
        />
      </div>
    </StyleDimensionForm>
  );
};

export default DimensionForm;
