import {
  type HumanizeTextParams,
  type HumanizerProvider,
} from "./types";

function normalizeWhitespace(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function splitIntoSentences(text: string) {
  return text.match(/[^.!?]+[.!?]?/g)?.map((sentence) => sentence.trim()) ?? [];
}

function rewriteSentence(sentence: string, tone: HumanizeTextParams["tone"]) {
  let nextSentence = sentence
    .replace(/\butilize\b/gi, "use")
    .replace(/\bleverage\b/gi, "use")
    .replace(/\bfurthermore\b/gi, "Also,")
    .replace(/\bin order to\b/gi, "to")
    .replace(/\bdelighted to\b/gi, "happy to")
    .replace(/\bcomprehensive solution\b/gi, "clear solution")
    .replace(/\boptimize\b/gi, "improve")
    .replace(/\bcommunication outputs\b/gi, "writing");

  if (tone === "Professional") {
    nextSentence = nextSentence
      .replace(/\bkind of\b/gi, "")
      .replace(/\ba lot of\b/gi, "many")
      .replace(/\breally\b/gi, "");
  }

  if (tone === "Casual") {
    nextSentence = nextSentence
      .replace(/\bdo not\b/gi, "don't")
      .replace(/\bcannot\b/gi, "can't")
      .replace(/\bWe are\b/gi, "We're");
  }

  return nextSentence.replace(/\s{2,}/g, " ").trim();
}

function ensureSentenceCase(sentence: string) {
  if (!sentence) {
    return sentence;
  }

  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

export class MockHumanizerProvider implements HumanizerProvider {
  async rewrite({ text, tone }: HumanizeTextParams) {
    const normalizedText = normalizeWhitespace(text);
    const sentences = splitIntoSentences(normalizedText);

    const rewritten =
      sentences.length > 0
        ? sentences
            .map((sentence) => ensureSentenceCase(rewriteSentence(sentence, tone)))
            .join(" ")
        : ensureSentenceCase(rewriteSentence(normalizedText, tone));

    const prefixByTone = {
      Natural: "",
      Professional: "Polished version: ",
      Casual: "More natural version: ",
    } as const;

    await new Promise((resolve) => setTimeout(resolve, 900));

    return `${prefixByTone[tone]}${rewritten}`.trim();
  }
}
