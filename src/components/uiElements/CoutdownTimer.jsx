import { useState, useEffect } from "react";

function CountdownTimer({ setTimerFinalizado, globalConfig, perguntaAtualIndex }) {
  const [tempo, setTempo] = useState(globalConfig.tempo_questoes);

  // 🔁 Reinicia o tempo toda vez que a pergunta muda
  useEffect(() => {
    setTempo(globalConfig.tempo_questoes);
  }, [perguntaAtualIndex, globalConfig.tempo_questoes]);

  useEffect(() => {
    if (tempo <= 0) {
      setTimerFinalizado(true);
      return;
    }

    const intervalo = setInterval(() => {
      setTempo((prevTempo) => prevTempo - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tempo]);

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>{tempo}</h1>
    </div>
  );
}

export default CountdownTimer;
