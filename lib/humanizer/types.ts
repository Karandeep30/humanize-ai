export const tones = ["Natural", "Professional", "Casual"] as const;

export type HumanizerTone = (typeof tones)[number];

export type HumanizeTextParams = {
  text: string;
  tone: HumanizerTone;
};

export interface HumanizerProvider {
  rewrite(params: HumanizeTextParams): Promise<string>;
}
