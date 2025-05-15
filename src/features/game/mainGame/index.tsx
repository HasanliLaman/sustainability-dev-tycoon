import { forwardRef } from "react";
import { toast } from "react-toastify";
import { useSound } from "use-sound";
import { useFormContext } from "react-hook-form";
import Input from "../../../components/form/input";
import iconChevron from "../../../assets/icons/chevron-right.svg";
import iconDone from "../../../assets/icons/done.svg";
import StyleMainGame from "./style";
import Button from "../../../components/button";
import warningSound from "../../../assets/sounds/warning.mp3";
import swipeSound from "../../../assets/sounds/swipe.mp3";

interface MainGameProps {
  setOpenDimension: (value: boolean) => void;
  setOpenDomain: (value: boolean) => void;
  setOpenPatterns: (value: boolean) => void;
  setOpenSqa: (value: boolean) => void;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  display: boolean;
}

const MainGame = forwardRef<HTMLInputElement, MainGameProps>(
  (
    {
      setOpenDimension,
      setOpenDomain,
      setOpenPatterns,
      setOpenSqa,
      onChange,
      onBlur,
      display,
    },
    ref
  ) => {
    const { getFieldState, trigger } = useFormContext();

    const domainState = getFieldState("domain");
    const dimensionState = getFieldState("dimensionValues");
    const attributesState = getFieldState("attributes");
    const patternsState = getFieldState("patterns");

    const [warningClick] = useSound(warningSound);
    const [swipeEffect] = useSound(swipeSound);

    const domainIcon =
      !domainState.invalid && domainState.isDirty ? iconDone : iconChevron;
    const dimensionIcon =
      !dimensionState.invalid && dimensionState.isDirty
        ? iconDone
        : iconChevron;
    const attributesIcon =
      !attributesState.invalid && attributesState.isDirty
        ? iconDone
        : iconChevron;
    const patternsIcon =
      !patternsState.invalid && patternsState.isDirty ? iconDone : iconChevron;

    return (
      <StyleMainGame display={display}>
        <Input
          ref={ref}
          type="text"
          placeholder="Application name"
          name="name"
          errorMsg={""}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div className="action-buttons">
          <button
            type="button"
            onClick={() => {
              setOpenDomain(true);
              swipeEffect();
            }}
          >
            Choose domain
            <img src={domainIcon} alt="Choose Domain" />
          </button>
          <button
            type="button"
            onClick={() => {
              setOpenDimension(true);
              swipeEffect();
            }}
          >
            Adjust Dimensions
            <img src={dimensionIcon} alt="Adjust Dimensions" />
          </button>
          <button
            type="button"
            onClick={() => {
              setOpenSqa(true);
              swipeEffect();
            }}
          >
            Choose Attributes
            <img src={attributesIcon} alt="Choose Attributes" />
          </button>
          <button
            type="button"
            onClick={() => {
              setOpenPatterns(true);
              swipeEffect();
            }}
          >
            Choose Design Patterns
            <img src={patternsIcon} alt="Choose Design Patterns" />
          </button>
        </div>
        <Button
          text="Create"
          onClick={async () => {
            const isValid = await trigger();
            if (!isValid) {
              toast.error("Please fill all the fields!");
              warningClick();
            }
          }}
        />
      </StyleMainGame>
    );
  }
);

export default MainGame;
