import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Project AI — AI-решения для бизнеса",
  description:
    "Видео, сайты, AI-агенты и упаковка под задачи бизнеса. Мы создаём AI-контент и решения, которые помогают бренду выглядеть сильнее и регулярно появляться перед аудиторией.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-background font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
