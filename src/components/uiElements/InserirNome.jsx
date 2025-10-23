import styled from "styled-components";
import CustomButton from "./customButton";

const Container = styled.div`
    background-color: white;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
`;

export default function InserirNome({ startGame, setDadosJogador, dadosJogador }){
    return (
        <Container>
            <input style={{padding: "16px", borderRadius: "8px"}} type="text" name="nome" id="nome" placeholder="Insira seu primeiro nome" onChange={(e) => setDadosJogador({...dadosJogador, nome: e.target.value})}/>
            <CustomButton text="Iniciar" func={startGame}/>
        </Container>
    )
}