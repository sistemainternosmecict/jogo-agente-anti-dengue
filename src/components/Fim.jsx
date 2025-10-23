import { useEffect } from "react";
import styled from "styled-components"

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

export default function Fim({ dadosJogador, setRanking, ranking, mostrarCertificado }) {
    const {nome, pontos} = dadosJogador

    function rankear(){
        setRanking([...ranking, {nome: nome, pontos: pontos}])
        setTimeout(() => {
            mostrarCertificado()
        }, 3000)
    }

    useEffect(() => {
        rankear()
    }, [nome, pontos])

    return (
        <Placar>
            Parabens {nome} você terminou o jogo! Você obteve {pontos} pontos.
        </Placar>
    )
}