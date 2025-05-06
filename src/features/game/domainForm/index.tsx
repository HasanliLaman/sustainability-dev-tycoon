import Button from "../../../components/button";
import RadioGroup from "../../../components/form/radio-group";
import StyleDomainForm from "./style";

const DomainForm = () => {
  return (
    <StyleDomainForm>
      <RadioGroup
        options={[
          { label: "Fitness", value: "fitness" },
          { label: "Healthcare", value: "healthcare" },
          { label: "Mining", value: "mining" },
          { label: "Social Media", value: "social-media" },
          { label: "Accommodation & Booking", value: "accomodation-booking" },
        ]}
      />
      <div className="save-btn">
        <Button text="Save" onClick={() => {}} />
      </div>
    </StyleDomainForm>
  );
};

export default DomainForm;
