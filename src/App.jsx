import { useEffect, useState } from 'react'
import Inicio from './components/Inicio'
import InserirNome from './components/uiElements/InserirNome'
import Jogo from './components/Jogo'
import Fim from './components/Fim'
import styled from 'styled-components'
import mosquitoImage from '/agente.png'
import Ranking from './components/uiElements/Ranking'
import CertificadoComp from './components/uiElements/Certificado'
import BarraCreditosPrefeitura from './components/uiElements/BarraCreditosPrefeitura'

const AppContainer = styled.div`
  background-image: url(${mosquitoImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: grid;
  place-content: center;
`;

function App() {
  const [estado, setEstado] = useState(0)
  const [globalConfig, setGlobalConfig] = useState({
    qnt_questoes: 5,
    tempo_questoes: 15
  })
  const [dadosJogador, setDadosJogador] = useState({
    nome: 'visitante',
    respostasCorretas: 0,
    respostasErradas: 0,
    pontos: 0
  })
  const [ranking, setRanking] = useState(() => {
    const saved = localStorage.getItem("ranking");
    return saved ? JSON.parse(saved) : [];
  });

  function reiniciar(){
    setEstado(0)
  }

  function inserirNome(){
    setEstado(1)
  }

  function startGame() {
    setEstado(2)
  }

  function endGame() {
    setEstado(3)
  }

  function mostrarCertificado(){
    setEstado(4)
  }

  function mostrarRanking(){
    setEstado(5)
  }

  useEffect(() => {
    if(estado == 4){
      localStorage.setItem("ranking", JSON.stringify(ranking))
    }
  }, [estado])

  return (
    <AppContainer>
      {estado == 0 ? <Inicio startGame={inserirNome} globalConfig={globalConfig} setGlobalConfig={setGlobalConfig} mostrarRanking={mostrarRanking}/> : <></>}
      {estado == 1 ? <InserirNome startGame={startGame} setDadosJogador={setDadosJogador} dadosJogador={dadosJogador}/> : <></>}
      {estado == 2 ? <Jogo globalConfig={globalConfig} dadosJogador={dadosJogador} setDadosJogador={setDadosJogador} endGame={endGame}/> : <></>}
      {estado == 3 ? <Fim dadosJogador={dadosJogador} setRanking={setRanking} ranking={ranking} mostrarCertificado={mostrarCertificado}/> : <></>}
      {estado == 4 ? <CertificadoComp dadosJogador={dadosJogador} globalConfig={globalConfig} mostrarRanking={mostrarRanking}/> : <></>}
      {estado == 5 ? <Ranking ranking={ranking} reiniciar={reiniciar} dadosJogador={dadosJogador} globalConfig={globalConfig}/> : <></>}
      <BarraCreditosPrefeitura/>
    </AppContainer>
  )
}

export default App
