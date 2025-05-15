import { Controller, useFormContext } from "react-hook-form";
import Button from "../../../components/button";
import CheckboxGroup from "../../../components/form/checkbox-group";
import StylePatternsForm from "./style";
import { toast } from "react-toastify";
import { useSound } from "use-sound";
import warningSound from "../../../assets/sounds/warning.mp3";
import successSound from "../../../assets/sounds/success.mp3";

interface PatternsFormProps {
  display: boolean;
  setOpenPatterns: (value: boolean) => void;
}

const PatternsForm: React.FC<PatternsFormProps> = ({
  display,
  setOpenPatterns,
}) => {
  const { control, trigger } = useFormContext();
  const [warningClick] = useSound(warningSound);
  const [successClick] = useSound(successSound);

  return (
    <StylePatternsForm display={display}>
      <Controller
        name="patterns"
        control={control}
        render={({ field }) => (
          <>
            <CheckboxGroup
              fieldName={field.name}
              title="design patterns"
              options={[
                { value: "active-redundancy", label: "Active Redundancy" },
                { value: "kill-abnormal-tasks", label: "Kill Abnormal Tasks" },
                {
                  value: "triple-modular-redundancy",
                  label: "Triple Modular Redundancy",
                },
                {
                  value: "microservices-architecture",
                  label: "Microservices Architecture",
                },
                {
                  value: "blue-green-deployment",
                  label: "Blue/Green Deployment",
                },
                {
                  value: "service-oriented-architecture",
                  label: "Service Oriented Architecture",
                },
                { value: "plug-in-pattern", label: "Plug-in Pattern" },
                { value: "load-balancer", label: "Load Balancer" },
                { value: "monitor-actuator", label: "Monitor Actuator" },

                {
                  value: "dependency-injection",
                  label: "Dependency Injection",
                },
                { value: "strategy-pattern", label: "Strategy Pattern" },
                {
                  value: "model-view-controller",
                  label: "Model View Controller",
                },
                { value: "observer-pattern", label: "Observer Pattern" },
                {
                  value: "intrusion-prevention-system",
                  label: "Intrusion Prevention System",
                },
              ]}
              value={field.value || []}
              onChange={field.onChange}
            />
          </>
        )}
      />
      <div className="save-btn">
        <Button
          type="button"
          text="Save"
          onClick={async () => {
            const isValid = await trigger("patterns");
            if (isValid) {
              setOpenPatterns(false);
              successClick();
              return;
            }
            toast.error("Please choose up to 5 patterns!");
            warningClick();
          }}
        />
      </div>
    </StylePatternsForm>
  );
};

export default PatternsForm;
