import { NextApiRequest, NextApiResponse } from 'next';
import  ControleEditora  from '../../../classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const editoras = controleEditora.getNomeEditoras();
      res.status(200).json(editoras);
    } else {
      res.status(405).end();
    }
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};
