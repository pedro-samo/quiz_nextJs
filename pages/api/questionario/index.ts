import { embaralhar } from '../../../functions/arrays';
import questoes from '../bancoDeQuestoes';

const questionarioApi = (req, res) => {
  const ids = questoes.map((questao) => questao.id);
  res.status(200).json(embaralhar(ids));
};

export default questionarioApi;
