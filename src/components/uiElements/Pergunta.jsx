import styled from "styled-components"

const PerguntaEstilizada = styled.div`
    display: ${(props) => (props.$index === props.$perguntaatualindex ? 'flex' : 'none')};
    flex-direction: column;
    border: solid 0.5px white;
    background-color: rgba(255, 255, 255, 0.2);
    padding: 32px;
    border-radius: 8px;
    font-family: sans;
    user-select: none;
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
`;

const Texto = styled.h2`
    font-weight: 200;
    background-color: white;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
`;

const Respostas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Resposta = styled.button`
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

export default function Pergunta({item, index, perguntaAtualIndex, responder, msg}){
    return (
        <PerguntaEstilizada key={index} $index={index} $perguntaatualindex={perguntaAtualIndex}>
            <Texto>{item.pergunta}</Texto>
            <Respostas>
                {item.opcoes.map((opcao, opcaoIndex) => (
                    <Resposta  key={opcaoIndex} onClick={() => responder(opcaoIndex, item)}>{opcao}</Resposta>
                ))}
            </Respostas>
            <p style={{width: "100%", textAlign: "center", fontSize:"18px", fontWeight:"bold"}}>{msg}</p>
        </PerguntaEstilizada>
    )
}