import styled from "styled-components";
import { Button } from "./customButton";

const COR_BASE = "#ffb601";
const COR_SEC = "#4b1a0c";

const OpcaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: ${COR_SEC};
    padding: 16px;
    border-radius: 8px;
    color: white;
    box-shadow: 0 2px 4px black;

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

    button{
        color: ${COR_BASE};
        border: solid 2px ${COR_BASE};
    }
`;

export default function Opcoes({globalConfig, setGlobalConfig, mostrarRanking}) {
    return (
        <OpcaoContainer>
            <h2 style={{width: "100%", textAlign: "center", color: "white"}}>Opções do jogo</h2>
            <ul>
                <li>
                    <div className="opcao">
                        <label htmlFor="questoes">Quantidade de questoes</label>
                        <input type="number" name="questoes" id="questoes" min={5} max={20} defaultValue={globalConfig.qnt_questoes} onChange={(e) => setGlobalConfig({...globalConfig, qnt_questoes: Number(e.target.value)})}/>
                    </div>
                    <div className="opcao">
                        <label htmlFor="tempo_questoes">Tempo por questao (min)</label>
                        <input type="number" name="tempo_questoes" id="tempo_questoes" min={3} max={15} defaultValue={globalConfig.tempo_questoes} onChange={(e) => setGlobalConfig({...globalConfig, tempo_questoes: Number(e.target.value)})}/>
                    </div>
                    <Button style={{ margin: "16px auto", width: "100%"}} onClick={mostrarRanking}>Ver o ranking</Button>
                </li>
            </ul>
        </OpcaoContainer>
    )
}