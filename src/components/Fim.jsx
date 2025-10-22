import styled from "styled-components"

const Voltar = styled.button`
    padding: 16px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    background-color: #559f95;
    color: white;

    &:hover{
        background-color: #aaa;
    }
`;

const Placar = styled.div`
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    max-width: 500px;
    padding: 32px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    text-align: center;
`;

export default function Fim({ dadosJogador, reiniciar }) {
    const {nome, pontos} = dadosJogador
    return (
        <Placar>
            Parabens {nome} você terminou o jogo! Você obteve {pontos} pontos.
            <Voltar onClick={reiniciar}>Voltar a tela inicial</Voltar>
        </Placar>
    )
}