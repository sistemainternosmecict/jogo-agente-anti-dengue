import styled from "styled-components"
import StartMenu from "./uiElements/StartMenu";

const FundoJogo = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default function Inicio({ startGame, globalConfig, setGlobalConfig }) {
    return (
        <FundoJogo>
            <Wrapper>
                <StartMenu startGame={startGame} globalConfig={globalConfig} setGlobalConfig={setGlobalConfig}/>
            </Wrapper>
        </FundoJogo>
    )
}