import { GoogleGenerativeAI }
  from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const getTreeRecommendations =
  async (formData) => {
    try {
      const prompt = `
You are an agroforestry expert.

Suggest top 3 agroforestry tree species for the following farm conditions:

State/Region: ${formData.state}
Soil Type: ${formData.soil}
Rainfall: ${formData.rainfall}
Main Purpose: ${formData.purpose}

Return ONLY valid JSON array.

Format:
[
  {
    "species": "",
    "reason": "",
    "matchScore": 0,
    "note": ""
  }
]

matchScore should be between 0-100.
reason should be 2-3 lines.
`;

      const result =
        await model.generateContent(prompt);

      const response =
        await result.response;

      const text = response.text();

      // Remove markdown formatting
      const cleanedText = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      return JSON.parse(cleanedText);
    } catch (error) {
      console.log(
        "Gemini API Error:",
        error
      );

      throw error;
    }
  };