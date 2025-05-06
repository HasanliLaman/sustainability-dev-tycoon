import Button from "../../../components/button";
import CheckboxGroup from "../../../components/form/checkbox-group";
import StyleSqaForm from "./style";

const SqaForm = () => {
  return (
    <StyleSqaForm>
      <CheckboxGroup
        fieldName="sqas"
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
      />
      <div className="save-btn">
        <Button text="Save" onClick={() => {}} />
      </div>
    </StyleSqaForm>
  );
};

export default SqaForm;
