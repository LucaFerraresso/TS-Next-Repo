//funzione per connettersi all'api con la key e richiedere l'oggetto in risposta.
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GenerateContentCandidate } from "@google/generative-ai";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: Request) {
  const { protagonista, antagonista, tipoStoria, genere } =
    await request.json();
  const prompt = `Generate a story about ${protagonista} and ${antagonista} in the genre ${genere} for ${tipoStoria} content.`;

  const userApiKey = process.env.NEXT_PUBLIC_GEMINI_USER_KEY;
  console.log(userApiKey);
  if (!userApiKey) {
    return NextResponse.json(
      { error: "API key not available" },
      { status: 500 }
    );
  }

  const genAI = new GoogleGenerativeAI(userApiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    const output = (result.response.candidates as GenerateContentCandidate[])[0]
      .content.parts[0].text;
    return NextResponse.json({ story: output });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
