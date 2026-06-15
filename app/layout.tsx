import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

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
    <html lang="ru">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
