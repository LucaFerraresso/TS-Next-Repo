import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Verifica se il metodo è POST
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ ok: false, message: "Metodo non supportato. Usa POST." });
    }

    // Estrai i parametri dal corpo della richiesta
    const { protagonista, antagonista, tipoStoria, genere } = req.body;

    // Verifica che tutti i parametri siano presenti
    if (!protagonista || !antagonista || !tipoStoria || !genere) {
      return res
        .status(400)
        .json({
          ok: false,
          message:
            "Parametri mancanti. Assicurati che protagonista, antagonista, tipoStoria e genere siano forniti.",
        });
    }

    // Crea il prompt per l'AI
    const prompt = `Crea una storia con protagonista ${protagonista}, antagonista ${antagonista}, in stile ${tipoStoria}, appartenente al genere ${genere}.`;

    // Recupera la chiave API dall'ambiente
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_KEY;
    if (!apiKey) {
      throw new Error(
        "Chiave API mancante. Assicurati che la variabile d'ambiente NEXT_PUBLIC_GEMINI_KEY sia configurata."
      );
    }

    // Inizializza GoogleGenerativeAI
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Richiedi la generazione del contenuto
    const result = await model.generateContent(prompt);

    const output = result.response?.candidates?.[0]?.content?.parts?.[0]?.text;

    // Verifica se l'output esiste
    if (output) {
      return res.status(200).json({ ok: true, story: output });
    } else {
      throw new Error(
        "Nessuna storia generata. Verifica la risposta dall'API."
      );
    }
  } catch (error: any) {
    console.error("Errore API:", error.message || error);
    return res.status(500).json({
      ok: false,
      message:
        error.message ||
        "Errore interno del server durante la generazione della storia.",
    });
  }
}
