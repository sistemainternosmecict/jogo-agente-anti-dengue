import styled from "styled-components";

const OpcaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    ul{
        list-style: none;
        padding: 0;
    }

    .opcao {
        display: flex;
        justify-content: space-between;
        align-items: center;

        label {
            font-size: 14px;
            margin-right: 10px;
        }

        input {
            width: 60px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
        }
    }
`;

export default function Opcoes({globalConfig, setGlobalConfig}) {
    return (
        <OpcaoContainer>
            <ul>
                <li>
                    <div className="opcao">
                        <label htmlFor="questoes">Quantidade de questoes</label>
                        <input type="number" name="questoes" id="questoes" min={5} max={10} defaultValue={globalConfig.qnt_questoes} onChange={(e) => setGlobalConfig({...globalConfig, qnt_questoes: Number(e.target.value)})}/>
                    </div>
                    <div className="opcao">
                        <label htmlFor="tempo_questoes">Tempo por questao (min)</label>
                        <input type="number" name="tempo_questoes" id="tempo_questoes" min={1} max={3} defaultValue={globalConfig.tempo_questoes} onChange={(e) => setGlobalConfig({...globalConfig, tempo_questoes: Number(e.target.value)})}/>
                    </div>
                    <div className="opcao">
                        <label htmlFor="tempo_jogo">Tempo total do jogo (min)</label>
                        <input type="number" name="tempo_jogo" id="tempo_jogo" min={5} max={15} defaultValue={globalConfig.tempo_jogo} onChange={(e) => setGlobalConfig({...globalConfig, tempo_jogo: Number(e.target.value)})}/>
                    </div>
                </li>
            </ul>
        </OpcaoContainer>
    )
}