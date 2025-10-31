import styled from "styled-components"
import logo from "../../assets/logo_prefeitura_branco.png"
import { SecureImage } from './Ranking';

const COR_BASE = "#ffb601";

const Barra = styled.div`
    background: rgba(75, 26, 12, 0.95);
    width: 100%;
    height: 96px;
    z-index: 1;
    position: absolute;
    bottom: 0;
    border-top: solid 3px ${COR_BASE};
`;

const LogoPrefeitura = styled(SecureImage)`
    width: 400px;
    position: absolute;
    right:50%;
    transform: translate(50%, 50%);
    `;

export default function BarraCreditosPrefeitura(){
    return (
        <Barra>
            <LogoPrefeitura src="/logo_edu_saude.svg" alt="logo" />
        </Barra>
    )
} 