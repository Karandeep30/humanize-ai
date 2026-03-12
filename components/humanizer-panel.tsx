"use client";

import { useState } from "react";

const tones = ["Natural", "Professional", "Casual"] as const;

type Tone = (typeof tones)[number];

function countWords(value: string) {
  const words = value.trim().match(/\S+/g);
  return words ? words.length : 0;
}

export function HumanizerPanel() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [tone, setTone] = useState<Tone>("Natural");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const inputWordCount = countWords(input);
  const outputWordCount = countWords(output);

  async function handleSubmit() {
    const trimmedInput = input.trim();

    if (!trimmedInput) {
      setError("Please paste some text before generating.");
      setOutput("");
      return;
    }

    setIsLoading(true);
    setError("");
    setCopied(false);

    try {
      const response = await fetch("/api/humanize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: trimmedInput,
          tone,
        }),
      });

      const data = (await response.json()) as { text?: string; error?: string };

      if (!response.ok || !data.text) {
        throw new Error(data.error || "Unable to humanize the text right now.");
      }

      setOutput(data.text);
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Unable to humanize the text right now.";
      setError(message);
      setOutput("");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleCopy() {
    if (!output) {
      return;
    }

    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setError("Copy failed. Please copy the text manually.");
    }
  }

  return (
    <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[var(--shadow)] backdrop-blur sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
            Live demo
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Paste your text and humanize it in one click.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            Perfect for blog drafts, emails, product copy, LinkedIn posts, and
            support responses that need a more natural voice.
          </p>
        </div>

        <label className="flex flex-col gap-2 text-sm font-medium text-[var(--foreground)]">
          Tone
          <select
            value={tone}
            onChange={(event) => setTone(event.target.value as Tone)}
            className="min-w-44 rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--accent)]"
          >
            {tones.map((toneOption) => (
              <option key={toneOption} value={toneOption}>
                {toneOption}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        <section className="rounded-[1.5rem] border border-[var(--border)] bg-white/85 p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Input
            </h3>
            <p className="text-sm text-[var(--muted)]">{inputWordCount} words</p>
          </div>
          <textarea
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              if (error) {
                setError("");
              }
            }}
            placeholder="Paste AI-generated or robotic-sounding text here..."
            className="min-h-[320px] w-full resize-none rounded-[1.25rem] border border-[var(--border)] bg-[#fffdfa] p-4 text-base leading-7 outline-none transition focus:border-[var(--accent)]"
          />
        </section>

        <section className="rounded-[1.5rem] border border-[var(--border)] bg-[#fcfffe] p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Output
            </h3>
            <p className="text-sm text-[var(--muted)]">{outputWordCount} words</p>
          </div>
          <div className="flex min-h-[320px] flex-col rounded-[1.25rem] border border-[var(--border)] bg-white p-4">
            <div className="flex-1 whitespace-pre-wrap text-base leading-7 text-[var(--foreground)]">
              {output || (
                <span className="text-[var(--muted)]">
                  Your rewritten text will appear here.
                </span>
              )}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={handleCopy}
                disabled={!output}
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-45"
              >
                {copied ? "Copied" : "Copy to clipboard"}
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-h-6 text-sm text-rose-600">
          {error ? error : null}
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Humanizing...
            </>
          ) : (
            "Humanize Text"
          )}
        </button>
      </div>
    </div>
  );
}
