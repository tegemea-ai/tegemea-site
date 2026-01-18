
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getOperationalAssessment = async (userInput: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze the following business operational needs and recommend one of the following retainer packages: 
    - Core Retainer (20-40 hrs/mo, £35/hr, 6mo min)
    - Growth Retainer (60-80 hrs/mo, £33/hr, 6mo min)
    - Partnership Retainer (100+ hrs/mo, £30/hr, 6mo min)
    - Bespoke Team Support (150+ hrs/mo, Bespoke Pricing, Custom Term)
    
    User Input: "${userInput}"
    
    Return a JSON response with:
    - packageId: 'core', 'growth', 'partnership', or 'bespoke'
    - reasoning: A professional, calm 2-sentence explanation of why this fits. Mention the stability of long-term commitment.
    - strategicInsight: One high-level strategic tip for their specific situation.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          packageId: { type: Type.STRING },
          reasoning: { type: Type.STRING },
          strategicInsight: { type: Type.STRING },
        },
        required: ["packageId", "reasoning", "strategicInsight"]
      },
      systemInstruction: "You are a senior operational consultant at Tegemea, a premium UK-based VA firm. Your tone is elite, calm, and strategic. Do not use salesy language or exclamation marks. Focus on the value of long-term partnership and multi-VA redundancy for larger needs."
    }
  });

  return JSON.parse(response.text || '{}');
};
