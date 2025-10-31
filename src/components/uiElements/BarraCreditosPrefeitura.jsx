import styled from "styled-components"
import logo from "../../assets/logo_prefeitura_branco.png"
import { SecureImage } from './Ranking';

const COR_BASE = "#ffb601";

const Barra = styled.div`
    background: rgba(26, 26, 26, 0.95);
    padding:4px;
    border-radius: 4px;
    border: solid 1px black;
`;

const LogoPrefeitura = styled(SecureImage)`
    width: 400px;
    `;

export default function BarraCreditosPrefeitura(){
    return (
        <Barra>
            <LogoPrefeitura src="/logo_edu_saude.svg" alt="logo" />
        </Barra>
    )
} 