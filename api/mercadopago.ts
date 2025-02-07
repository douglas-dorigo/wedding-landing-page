import { VercelRequest, VercelResponse } from '@vercel/node';

const accessToken = process.env.VERCEL_ENV === "production"
  ? process.env.MERCADO_PAGO_ACCESS_TOKEN_PROD
  : process.env.MERCADO_PAGO_ACCESS_TOKEN_TEST;

// const baseUrl = process.env.VERCEL_ENV === "production"
//   ? process.env.FRONTEND_URL_PROD
//   : process.env.FRONTEND_URL_TEST;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  console.log("🔍 Ambiente atual:", process.env.VERCEL_ENV);

  try {
    const { items } = req.body;

    // Configuração de back_urls
    const preference = {
      items,
      back_urls: {
        success: `${process.env.FRONTEND_URL_PROD}/checkout`,
        failure: `${process.env.FRONTEND_URL_PROD}/checkout`,
        pending: `${process.env.FRONTEND_URL_PROD}/checkout`,
      },
      auto_return: 'approved',
    };

    // Fazendo a requisição para criar a preferência no Mercado Pago
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify(preference),
    });

    const data = await response.json();

    if (data.id) {
      return res.status(200).json({ preferenceId: data.id });
    } else {
      console.error("Erro na API Mercado Pago:", data);
      return res.status(500).json({ error: "Erro ao criar preferência" });
    }
  } catch (error) {
    console.error("Erro na API:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
