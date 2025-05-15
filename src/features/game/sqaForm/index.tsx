import { Controller, useFormContext } from "react-hook-form";
import Button from "../../../components/button";
import CheckboxGroup from "../../../components/form/checkbox-group";
import StyleSqaForm from "./style";
import { toast } from "react-toastify";
import { useSound } from "use-sound";
import warningSound from "../../../assets/sounds/warning.mp3";
import successSound from "../../../assets/sounds/success.mp3";

interface SqaFormProps {
  display: boolean;
  setOpenSqa: (value: boolean) => void;
}

const SqaForm: React.FC<SqaFormProps> = ({ display, setOpenSqa }) => {
  const { control, trigger } = useFormContext();
  const [warningClick] = useSound(warningSound);
  const [successClick] = useSound(successSound);

  return (
    <StyleSqaForm display={display}>
      <Controller
        name="attributes"
        control={control}
        render={({ field }) => (
          <CheckboxGroup
            fieldName={field.name}
            title="attributes"
            options={[
              { value: "availability", label: "Availability" },
              { value: "deployability", label: "Deployability" },
              { value: "energy-efficiency", label: "Energy Efficiency" },
              { value: "integrability", label: "Integrability" },
              { value: "modifiability", label: "Modifiability" },
              { value: "performance", label: "Performance" },
              { value: "safety", label: "Safety" },
              { value: "security", label: "Security" },
              { value: "testability", label: "Testability" },
              { value: "usability", label: "Usability" },
            ]}
            value={field.value || []}
            onChange={field.onChange}
          />
        )}
      />
      <div className="save-btn">
        <Button
          text="Save"
          type="button"
          onClick={async () => {
            const isValid = await trigger("attributes");
            if (isValid) {
              setOpenSqa(false);
              successClick();
              return;
            }
            toast.error("Please choose up to 5 attributes!");
            warningClick();
          }}
        />
      </div>
    </StyleSqaForm>
  );
};

export default SqaForm;
