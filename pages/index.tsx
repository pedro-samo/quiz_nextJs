import { useState } from 'react';
import Questionario from '../components/Questionario';
import QuestaoModel from '../model/questao';
import RespostaModel from '../model/resposta';

const questaoMock = new QuestaoModel(1, 'Melhor é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
]);

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function questaoRespondida(questao: QuestaoModel) {}

  function irParaProximoPasso() {}

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Questionario
        questao={questao}
        ultima={false}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irParaProximoPasso}
      />
    </div>
  );
}
