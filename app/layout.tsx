import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HumanizeAI",
  description:
    "Rewrite robotic AI text into natural, fluent writing with HumanizeAI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
