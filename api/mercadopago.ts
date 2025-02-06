import type { VercelRequest, VercelResponse } from '@vercel/node';
import mercadopago from 'mercadopago';

// Configure o SDK do Mercado Pago utilizando uma variável de ambiente para o access token
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN, // Configure no Vercel (em Environment Variables)
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const { items } = req.body;

    try {
      // Cria a preferência de pagamento
      const response = await mercadopago.preferences.create({ items });
      // Retorna apenas o preference id para o frontend
      return res.status(200).json({ preferenceId: response.body.id });
    } catch (error) {
      console.error('Erro ao criar preferência:', error);
      return res.status(500).json({ error: 'Erro ao criar preferência' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Método ${req.method} não permitido`);
  }
}
