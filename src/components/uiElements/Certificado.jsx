import styled from "styled-components"
import certificadoImage from  "../../assets/cert3.png";
import Button from "./customButton";

const Certificado = styled.div`
    padding: 32px;
    border-radius: 8px;
    width: 1200px;
    position: relative;
    margin-bottom: 150px;
`;

const ConteudoCertificado = styled.p`
    color: #4b1a0c;
    position: absolute;
    left:50%;
    top: 50%;
    transform: translateX(-50%);
    font-size: 32px;
    width: 100%;
    max-width: 360px;
    text-align: center;
`;

const Imagem = styled.img`
    width: inherit;
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.8));
`;

const ButtonWrapper = styled.div`
    position: absolute;
    right:50%;
    bottom: 0;
    transform: translateX(50%);
`;

export default function CertificadoComp({ dadosJogador, globalConfig, mostrarRanking }){
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // meses começam em 0
    const ano = hoje.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    
    return (
        <Certificado>
            <Imagem src={certificadoImage} alt="Certificado de agente anti-dengue" />
            <ConteudoCertificado>
                Parabéns <span style={{fontWeight: "bold"}}>{dadosJogador.nome}</span>, você é um agente anti-dengue!
                <br/><span style={{letterSpacing: "3px", fontWeight: "bold"}}>Pontuação: {dadosJogador.pontos}/{globalConfig.qnt_questoes}</span>
                <br/><span style={{letterSpacing: "3px", fontWeight: "200", fontSize:"20px"}}>Data: {dataFormatada}</span>
            </ConteudoCertificado>
            <ButtonWrapper>
                <Button text="Ver o ranking" func={mostrarRanking}/>
            </ButtonWrapper>
        </Certificado>
    )
}