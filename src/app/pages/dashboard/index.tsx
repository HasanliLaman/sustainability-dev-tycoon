import { useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../../components/loading";
import StyleDashboard from "./style";
import Button from "../../../components/button";

const Dashboard = () => {
  const [loading, setLoading] = useState(() => {
    return sessionStorage.getItem("hasLoaded") !== "true";
  });
  const navigate = useNavigate();

  // const onClickSignin = () => navigate("/signin");
  // const onClickPlayGuest = () => navigate("/guest");
  const onClickStart = () => navigate("/game");
  const onClickTutorial = () => navigate("/tutorial");
  const onClickCheatsheet = () => navigate("/cheatsheet");

  return (
    <StyleDashboard>
      <div className="title">
        Sustainability <span>DEV</span>TYCOON
      </div>
      {loading && <Loading setLoading={setLoading} />}
      {!loading && (
        <div className="buttons">
          {/* <Button
            btnType="transparent"
            text="Sign in"
            onClick={onClickSignin}
          />
          <Button
            btnType="transparent"
            text="Play as a guest"
            onClick={onClickPlayGuest}
          /> */}
          <Button
            type="button"
            btnType="transparent"
            text="Start"
            onClick={onClickStart}
          />
          <Button
            type="button"
            btnType="transparent"
            text="How to play?"
            onClick={onClickTutorial}
          />
          <Button
            type="button"
            btnType="transparent"
            text="Cheatsheet"
            onClick={onClickCheatsheet}
          />
        </div>
      )}
    </StyleDashboard>
  );
};

export default Dashboard;
