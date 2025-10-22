import { useState, useEffect, useRef } from 'react';
import perguntas from '../data/perguntas.js';
import Pergunta from './uiElements/Pergunta.jsx';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  position: absolute;
  display: grid;
  place-content:center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;



function embaralharArray(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export default function Jogo({ globalConfig, dadosJogador, setDadosJogador, endGame }) {
    const [perguntasFiltradas, setPerguntasFiltradas] = useState([]);
    const perguntasEmbaralhadas = useRef(embaralharArray(perguntas));
    const [perguntaAtualIndex, setPerguntaAtualIndex] = useState(0);
    const [msg, setMsg] = useState("")

    function responder(idx, pergunta){
        if(perguntaAtualIndex < globalConfig.qnt_questoes){
            if(idx == pergunta.corretas[0]){
                setMsg("VOCÊ ACERTOU!")
                setDadosJogador({...dadosJogador, pontos: dadosJogador.pontos + 1})
                setTimeout(() => {
                    setMsg("")
                }, 2000)
            } else {
                setMsg("Você errou!")
                setTimeout(() => {
                    setMsg("")
                }, 2000)
            }
        }
        
        setTimeout(() => {
            setPerguntaAtualIndex(perguntaAtualIndex + 1)
        }, 2000)
    }
    
    useEffect(() => {
        const filtradas = perguntasEmbaralhadas.current.slice(0, globalConfig.qnt_questoes);
        setPerguntasFiltradas(filtradas);
    }, [globalConfig]);

    useEffect(()=> {
        if(perguntaAtualIndex == globalConfig.qnt_questoes){
            endGame()
        }
    }, [perguntaAtualIndex])

    return (
        <QuestionContainer>
            {perguntasFiltradas.map((item, index) => (
                <div key={index}>
                    <Pergunta index={index} item={item} perguntaAtualIndex={perguntaAtualIndex} responder={responder} msg={msg}/>
                </div>
            ))}
        </QuestionContainer>
    )
}