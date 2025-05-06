import Input from "../../../components/form/input";
import iconChevron from "../../../assets/icons/chevron-right.svg";
import iconDone from "../../../assets/icons/done.svg";
import StyleMainGame from "./style";
import Button from "../../../components/button";

interface MainGameProps {
  setOpenDimension: (value: boolean) => void;
  setOpenDomain: (value: boolean) => void;
  setOpenPatterns: (value: boolean) => void;
  setOpenSqa: (value: boolean) => void;
}

const MainGame: React.FC<MainGameProps> = ({
  setOpenDimension,
  setOpenDomain,
  setOpenPatterns,
  setOpenSqa,
}) => {
  return (
    <StyleMainGame>
      <Input
        // {...register("email")}
        type="text"
        placeholder="Application name"
        name="name"
        errorMsg={""}
      />
      <div className="action-buttons">
        <button type="button" onClick={() => setOpenDomain(true)}>
          Choose domain
          <img src={iconDone} alt="Choose Domain" />
        </button>
        <button type="button" onClick={() => setOpenDimension(true)}>
          Adjust Dimensions
          <img src={iconChevron} alt="Adjust Dimensions" />
        </button>
        <button type="button" onClick={() => setOpenSqa(true)}>
          Choose Attributes
          <img src={iconChevron} alt="Choose Attributes" />
        </button>
        <button type="button" onClick={() => setOpenPatterns(true)}>
          Choose Design Patterns
          <img src={iconChevron} alt="Choose Design Patterns" />
        </button>
      </div>
      <Button text="Create" onClick={() => {}} />
    </StyleMainGame>
  );
};

export default MainGame;
