import { useState } from "react";
import Loading from "../../../components/loading";
import StyleDashboard from "./style";
import Button from "../../../components/button";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const onClickSignin = () => navigate("/signin");
  const onClickPlayGuest = () => navigate("/guest");
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
          <Button
            btnType="transparent"
            text="Sign in"
            onClick={onClickSignin}
          />
          <Button
            btnType="transparent"
            text="Play as a guest"
            onClick={onClickPlayGuest}
          />
          <Button
            btnType="transparent"
            text="How to play?"
            onClick={onClickTutorial}
          />
          <Button
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
