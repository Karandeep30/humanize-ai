import { getHumanizerProvider } from "@/lib/humanizer";
import {
  tones,
  type HumanizerTone,
} from "@/lib/humanizer/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { text, tone } = (await request.json()) as {
      text?: string;
      tone?: HumanizerTone;
    };

    const trimmedText = text?.trim();

    if (!trimmedText) {
      return NextResponse.json(
        { error: "Please enter some text to humanize." },
        { status: 400 },
      );
    }

    const selectedTone =
      tone && tones.includes(tone) ? tone : "Natural";
    const humanizedText = await getHumanizerProvider().rewrite({
      text: trimmedText,
      tone: selectedTone,
    });

    if (!humanizedText) {
      throw new Error("The humanizer provider returned an empty response.");
    }

    return NextResponse.json({ text: humanizedText });
  } catch (error) {
    console.error("Humanize API error:", error);

    return NextResponse.json(
      { error: "Something went wrong while humanizing the text." },
      { status: 500 },
    );
  }
}
