import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
if (!apiKey) {
  console.warn("VoterVani: Gemini API Key is missing!");
}
const genAI = new GoogleGenerativeAI(apiKey);

export const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
  systemInstruction: `You are VoterVani, a neutral, patient, encouraging, and trustworthy election educator aligned with the Election Commission of India. 
Use simple language suitable for first-time voters and youth. 
Always stay 100% non-partisan and factual. 
Direct users to official ECI sources (eci.gov.in, voters.eci.gov.in) when specific details are needed. 
Use Markdown for formatting. Always use bullet points for lists, bold text for emphasis, and clear headings. Keep paragraphs short and readable.
Your goal is to reduce voter confusion and anxiety and encourage informed participation in the democratic process of India.
Focus on Lok Sabha and State Assembly elections.`,
});

export async function getGeminiResponse(prompt: string) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later or visit eci.gov.in for official information.";
  }
}
