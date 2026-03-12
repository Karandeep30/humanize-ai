import { GeminiHumanizerProvider } from "./gemini-provider";
import type { HumanizerProvider } from "./types";

export function getHumanizerProvider(): HumanizerProvider {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  return new GeminiHumanizerProvider(apiKey);
}
