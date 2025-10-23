import styled from "styled-components"
import logo from "../../assets/logo_prefeitura_branco.png"

const Barra = styled.div`
    background: rgba(0,0,0,0.9);
    width: 100%;
    height: 128px;
    z-index: 1;
    position: absolute;
    bottom: 0;
    border-top: solid 3px #4b1a0c;
`;

const LogoPrefeitura = styled.img`
    width: 200px;
    position: absolute;
    right:50%;
    transform: translate(50%, 35%);
    `;

export default function BarraCreditosPrefeitura(){
    return (
        <Barra>
            <LogoPrefeitura src={logo} alt="logo" />
        </Barra>
    )
}