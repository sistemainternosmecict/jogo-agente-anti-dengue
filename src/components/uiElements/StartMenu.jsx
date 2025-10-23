import styled from "styled-components";
import CustomButton from "./customButton";
import Opcoes from "./Options";
import { useState } from "react";
import Titulo from "/titulo.png";

const MenuContainer = styled.div`
  width: 300px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  position: absolute;
  bottom: 160px;
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

export default function StartMenu({ startGame, globalConfig, setGlobalConfig, mostrarRanking }) {
    const [options, setOptions] = useState(false);

    function openOptions() {
        setOptions(!options);
    }

    return (
        <MenuContainer>
            {!options ?
            <TelaDeTitulo>
                <img src={Titulo} alt="Titulo do jogo" style={{width: "500px"}} />
                <BtnHolder>
                    <CustomButton text="Novo jogo" func={startGame}/>
                    <CustomButton text="Opções" func={openOptions}/>
                </BtnHolder>
            </TelaDeTitulo> :
            <>
                <Opcoes globalConfig={globalConfig} setGlobalConfig={setGlobalConfig} mostrarRanking={mostrarRanking}/>
                <CustomButton text="Back" func={openOptions}/>
            </>}
        </MenuContainer>
    )
}