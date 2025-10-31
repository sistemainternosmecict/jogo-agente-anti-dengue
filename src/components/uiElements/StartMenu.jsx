import styled from "styled-components";
import CustomButton, { Button} from "./customButton";
import Opcoes from "./Options";
import { useState } from "react";
import Titulo from "/titulo.png";

const COR_BASE = "#ffb601";

const MenuContainer = styled.div`
  width: 300px;
  height: auto;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: absolute;
  bottom: 3.5em;
`;

const TelaDeTitulo = styled.div`
  transform: translateY(-64px);
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
`;

const BtnHolder = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MenuButton = styled(Button)`
    color: ${COR_BASE};
    border: solid 2px ${COR_BASE};
    font-weight: bold;
`;

const SecureImage = styled.img`
  user-drag: none;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export default function StartMenu({ startGame, globalConfig, setGlobalConfig, mostrarRanking }) {
    const [options, setOptions] = useState(false);

    function openOptions() {
        setOptions(!options);
    }

    return (
        <MenuContainer>
            {!options ?
            <TelaDeTitulo>
                <SecureImage src={Titulo} alt="Titulo do jogo" style={{width: "24em"}} />
                <BtnHolder>
                    <MenuButton onClick={startGame}>Novo jogo</MenuButton>
                    <MenuButton onClick={openOptions}>Opções</MenuButton>
                </BtnHolder>
            </TelaDeTitulo> :
            <>
                <Opcoes globalConfig={globalConfig} setGlobalConfig={setGlobalConfig} mostrarRanking={mostrarRanking} openOptions={openOptions}/>
            </>}
        </MenuContainer>
    )
}