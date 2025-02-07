import { VercelRequest, VercelResponse } from "@vercel/node";
import API_URLS from "../../src/config/apiUrls";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).end();
    return;
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const { cartItems, name } = req.body;

    const preference = {
      items: cartItems.map((item: any) => ({
        title: item.title,
        unit_price: item.unit_price,
        quantity: 1,
        currency_id: "BRL",
      })),
      payer: { name },
    };

    const response = await fetch(API_URLS.MERCADO_PAGO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preference),
    });

    const result = await response.json();

    return res.status(200).json({ preferenceId: result.id });
  } catch (error) {
    console.error("Erro ao criar preferência no Mercado Pago:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
