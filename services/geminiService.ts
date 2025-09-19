
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const safetySettings = [
  {
    category: "HARM_CATEGORY_HARASSMENT",
    threshold: "BLOCK_NONE",
  },
  {
    category: "HARM_CATEGORY_HATE_SPEECH",
    threshold: "BLOCK_NONE",
  },
  {
    category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    threshold: "BLOCK_NONE",
  },
  {
    category: "HARM_CATEGORY_DANGEROUS_CONTENT",
    threshold: "BLOCK_NONE",
  },
];

export async function getSymptomAnalysis(symptoms: string, language: string): Promise<string> {
  try {
    const prompt = `
      Act as a helpful AI medical assistant. A user is providing their symptoms in ${language}.
      Analyze the following symptoms and provide a preliminary analysis.
      Your response should be in ${language}.
      Structure the response in markdown with the following sections:
      1.  **Possible Conditions:** List a few potential (but not definitive) conditions that might match the symptoms.
      2.  **Recommendations:** Suggest clear next steps, such as resting, hydrating, consulting a specific type of doctor (e.g., General Physician, specialist), or seeking immediate medical attention.
      3.  **Important Disclaimer:** ALWAYS include a strong, clear disclaimer that you are an AI assistant, not a medical professional, and this analysis is not a substitute for professional medical advice. The user must consult a qualified doctor for a proper diagnosis.

      User's Symptoms: "${symptoms}"
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      safetySettings,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error in getSymptomAnalysis:", error);
    return "Sorry, I encountered an error while analyzing the symptoms. Please try again later.";
  }
}


export async function analyzeMedicalReport(reportText: string): Promise<string> {
  try {
    const prompt = `
      Act as an AI medical assistant. Your task is to simplify a medical report for a patient who may not understand complex medical terminology.
      Summarize the following medical report text in simple, easy-to-understand language.
      Your response should be in markdown and include:
      1.  **Key Findings:** A bulleted list of the most important results from the report.
      2.  **Explanation of Terms:** Define any complex medical terms found in the report in a simple way.
      3.  **Next Steps:** Suggest that the user discuss these results with their doctor for a complete understanding and treatment plan.
      4.  **Important Disclaimer:** End with a clear disclaimer that this is an AI-powered summary and not a medical diagnosis. The user's doctor is the best source of information.

      Medical Report Text:
      ---
      ${reportText}
      ---
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      safetySettings,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error in analyzeMedicalReport:", error);
    return "Sorry, I encountered an error while analyzing the report. Please try again later.";
  }
}
