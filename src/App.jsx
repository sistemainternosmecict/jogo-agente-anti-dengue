import { useState } from 'react'
import Inicio from './components/Inicio'
import Jogo from './components/Jogo'
import Fim from './components/Fim'
import styled from 'styled-components'
import mosquitoImage from '../public/agente.png'

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
    tempo_questoes: 1,
    tempo_jogo: 10,
  })
  const [dadosJogador, setDadosJogador] = useState({
    nome: 'visitante',
    respostasCorretas: 0,
    respostasErradas: 0,
    tempoRestante: 0,
    pontos: 0
  })

  function reiniciar(){
    setEstado(0)
  }

  function startGame() {
    setEstado(1)
  }

  function endGame() {
    setEstado(2)
  }

  return (
    <AppContainer>
      {estado == 0 ? <Inicio startGame={startGame} globalConfig={globalConfig} setGlobalConfig={setGlobalConfig}/> : <></>}
      {estado == 1 ? <Jogo globalConfig={globalConfig} dadosJogador={dadosJogador} setDadosJogador={setDadosJogador} endGame={endGame}/> : <></>}
      {estado == 2 ? <Fim dadosJogador={dadosJogador} reiniciar={reiniciar}/> : <></>}
    </AppContainer>
  )
}

export default App
