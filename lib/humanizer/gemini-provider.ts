import { GoogleGenAI } from "@google/genai";
import {
  type HumanizeTextParams,
  type HumanizerProvider,
} from "./types";

function createPrompt({ text, tone }: HumanizeTextParams) {
  return [
    "Rewrite the following text so it sounds natural, fluent, and human.",
    "Preserve the original meaning, facts, and intent.",
    `Use a ${tone.toLowerCase()} tone.`,
    "Remove robotic phrasing and awkward wording.",
    "Return only the rewritten text.",
    "",
    text,
  ].join("\n");
}

export class GeminiHumanizerProvider implements HumanizerProvider {
  private client: GoogleGenAI;

  constructor(apiKey: string) {
    this.client = new GoogleGenAI({ apiKey });
  }

  async rewrite(params: HumanizeTextParams) {
    const response = await this.client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: createPrompt(params),
    });

    return response.text?.trim() ?? "";
  }
}
