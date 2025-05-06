import Button from "../../../components/button";
import CheckboxGroup from "../../../components/form/checkbox-group";
import StylePatternsForm from "./style";

const PatternsForm = () => {
  return (
    <StylePatternsForm>
      <CheckboxGroup
        fieldName="patterns"
        title="design patterns"
        options={[
          { value: "active-redundancy", label: "Active Redundancy" },
          {
            value: "triple-modular-redundancy",
            label: "Triple Modular Redundancy",
          },
          {
            value: "microservices-architecture",
            label: "Microservices Architecture",
          },
          { value: "blue-green-deployment", label: "Blue/Green Deployment" },
          { value: "kill-abnormal-tasks", label: "Kill Abnormal Tasks" },
          {
            value: "service-oriented-architecture",
            label: "Service Oriented Architecture",
          },
          { value: "plug-in-pattern", label: "Plug-in Pattern" },
          { value: "load-balancer", label: "Load Balancer" },
          { value: "monitor-actuator", label: "Monitor Actuator" },
          {
            value: "intrusion-prevention-system",
            label: "Intrusion Prevention System",
          },
          { value: "dependency-injection", label: "Dependency Injection" },
          { value: "strategy-pattern", label: "Strategy Pattern" },
          { value: "model-view-controller", label: "Model View Controller" },
          { value: "observer-pattern", label: "Observer Pattern" },
        ]}
      />
      <div className="save-btn">
        <Button text="Save" onClick={() => {}} />
      </div>
    </StylePatternsForm>
  );
};

export default PatternsForm;
