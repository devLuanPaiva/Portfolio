import type { Metadata } from "next";
import { Montserrat } from 'next/font/google'
import "./globals.css";
import { Analytics } from "@/data/services/analytics";



export const metadata: Metadata = {
  metadataBase: new URL("https://devluanpaiva.com.br"),

  title: {
    default: "Luan Paiva | Desenvolvedor Full Stack",
    template: "%s | Luan Paiva",
  },

  description:
    "Luan Paiva é desenvolvedor full stack, especializado em React, Next.js e aplicações web modernas. Criação de sites profissionais, sistemas web, landing pages e soluções sob medida com foco em performance, SEO e experiência do usuário.",

  keywords: [
    "desenvolvedor frontend",
    "desenvolvedor full stack",
    "desenvolvedor web",
    "criação de sites profissionais",
    "desenvolvimento web",
    "sites institucionais",
    "landing pages",
    "aplicações web",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "frontend developer",
    "full stack developer",
    "programador web",
    "freelancer desenvolvedor web",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "SEO para sites",
    "performance web",
    "UI UX",
    "sistemas web personalizados",
  ],

  authors: [{ name: "Luan Paiva", url: "https://devluanpaiva.com.br" }],
  creator: "Luan Paiva",
  publisher: "Luan Paiva",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://devluanpaiva.com.br",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://devluanpaiva.com.br",
    siteName: "Luan Paiva | Desenvolvimento Web",
    title: "Luan Paiva | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor full stack especializado em React e Next.js. Criação de sites modernos, rápidos e otimizados para SEO, com foco em conversão e experiência do usuário.",
    images: [
      {
        url: "https://devluanpaiva.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luan Paiva - Desenvolvedor Full Stack",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luan Paiva | Desenvolvedor Frontend & Full Stack",
    description:
      "Criação de sites profissionais e aplicações web modernas com React e Next.js. Performance, SEO e experiência do usuário.",
    images: ["https://devluanpaiva.com.br/og-image.png"],
  },

  category: "technology",
};

const montserrat = Montserrat({ subsets: ['latin'], display: "swap" })
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Analytics />
      </head>
      <body
        className={`${montserrat.className} antialiased`}
        cz-shortcut-listen="false"
      >
        {children}
      </body>
    </html>
  );
}