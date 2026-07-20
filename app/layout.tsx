import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import TargetTracker from "@/components/TargetTracker";
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
        <TargetTracker />
        <Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '1376755577661120');
    fbq('track', 'PageView');
  `}
</Script>
        {children}
      </body>
    </html>
  );
}
