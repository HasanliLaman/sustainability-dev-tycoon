import { useState } from "react";
import Container from "../../../components/container";
import DimensionForm from "../../../features/game/dimensionForm";
import DomainForm from "../../../features/game/domainForm";
import MainGame from "../../../features/game/mainGame";
import PatternsForm from "../../../features/game/patternsForm";
import SqaForm from "../../../features/game/sqaForm";
import StyleGame from "./style";

const Game = () => {
  const [openSqa, setOpenSqa] = useState(false);
  const [openDomain, setOpenDomain] = useState(false);
  const [openDimension, setOpenDimension] = useState(false);
  const [openPatterns, setOpenPatterns] = useState(false);

  const onBackBtn = () => {
    setOpenDimension(false);
    setOpenDomain(false);
    setOpenPatterns(false);
    setOpenSqa(false);
  };

  return (
    <StyleGame>
      <Container
        onBackBtn={onBackBtn}
        header="New project"
        homeIcon={!openSqa && !openDimension && !openPatterns && !openDomain}
        backIcon={openSqa || openDimension || openPatterns || openDomain}
      >
        <form>
          {!openSqa && !openDimension && !openPatterns && !openDomain && (
            <MainGame
              setOpenDimension={setOpenDimension}
              setOpenDomain={setOpenDomain}
              setOpenPatterns={setOpenPatterns}
              setOpenSqa={setOpenSqa}
            />
          )}
          {openSqa && <SqaForm />}
          {openDomain && <DomainForm />}
          {openPatterns && <PatternsForm />}
          {openDimension && <DimensionForm />}
        </form>
      </Container>
    </StyleGame>
  );
};

export default Game;
