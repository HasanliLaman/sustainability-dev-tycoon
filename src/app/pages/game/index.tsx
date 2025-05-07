import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Container from "../../../components/container";
import DimensionForm from "../../../features/game/dimensionForm";
import DomainForm from "../../../features/game/domainForm";
import MainGame from "../../../features/game/mainGame";
import PatternsForm from "../../../features/game/patternsForm";
import SqaForm from "../../../features/game/sqaForm";
import { gameSchema } from "./schema";
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

  const methods = useForm({
    resolver: yupResolver(gameSchema),
  });
  // const { errors } = methods.formState;

  const submitHandler = async function (formData: {
    name: string;
    domain: string;
    attributes: string[];
    patterns: string[];
    dimensionValues: {
      individual: number;
      social: number;
      technical: number;
      environmental: number;
      economic: number;
    };
  }) {
    console.log(formData);

    methods.reset({
      name: "",
      domain: "",
      attributes: [],
      patterns: [],
      dimensionValues: {
        individual: 0,
        social: 0,
        technical: 0,
        environmental: 0,
        economic: 0,
      },
    });
  };

  return (
    <StyleGame>
      <Container
        onBackBtn={onBackBtn}
        header="New application"
        homeIcon={!openSqa && !openDimension && !openPatterns && !openDomain}
        backIcon={openSqa || openDimension || openPatterns || openDomain}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(submitHandler)}>
            <MainGame
              display={
                !openSqa && !openDimension && !openPatterns && !openDomain
              }
              setOpenDimension={setOpenDimension}
              setOpenDomain={setOpenDomain}
              setOpenPatterns={setOpenPatterns}
              setOpenSqa={setOpenSqa}
              {...methods.register("name")}
            />
            <SqaForm display={openSqa} setOpenSqa={setOpenSqa} />
            <DomainForm display={openDomain} setOpenDomain={setOpenDomain} />
            <PatternsForm
              display={openPatterns}
              setOpenPatterns={setOpenPatterns}
            />
            <DimensionForm
              display={openDimension}
              setOpenDimension={setOpenDimension}
            />
          </form>
        </FormProvider>
      </Container>
    </StyleGame>
  );
};

export default Game;
