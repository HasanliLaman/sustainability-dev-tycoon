import { Controller, useFormContext } from "react-hook-form";
import Button from "../../../components/button";
import RadioGroup from "../../../components/form/radio-group";
import StyleDomainForm from "./style";
import { toast } from "react-toastify";
import { useSound } from "use-sound";
import warningSound from "../../../assets/sounds/warning.mp3";
import successSound from "../../../assets/sounds/success.mp3";

interface DomainFormProps {
  display: boolean;
  setOpenDomain: (value: boolean) => void;
}

const DomainForm: React.FC<DomainFormProps> = ({ display, setOpenDomain }) => {
  const { control, trigger } = useFormContext();
  const [warningClick] = useSound(warningSound);
  const [successClick] = useSound(successSound);

  return (
    <StyleDomainForm display={display}>
      <Controller
        name="domain"
        control={control}
        render={({ field }) => (
          <RadioGroup
            options={[
              { label: "Fitness", value: "fitness" },
              { label: "Healthcare", value: "healthcare" },
              { label: "Mining", value: "mining" },
              { label: "Social Media", value: "social-media" },
              {
                label: "Accommodation & Booking",
                value: "accommodation-booking",
              },
            ]}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      <div className="save-btn">
        <Button
          text="Save"
          type="button"
          onClick={async () => {
            const isValid = await trigger("domain");
            if (isValid) {
              setOpenDomain(false);
              successClick();
              return;
            }
            warningClick();
            toast.error("Please choose a domain!");
          }}
        />
      </div>
    </StyleDomainForm>
  );
};

export default DomainForm;
