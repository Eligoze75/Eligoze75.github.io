import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eligoze75.github.io"),
  title: "Elí Gonzalez · Data Scientist, AI Engineer & Builder",
  description:
    "I'm curious about how businesses work, and how data and AI can help understand, improve, or build them, through the products, experiments, and companies I work on.",
  openGraph: {
    title: "Elí Gonzalez · Data Scientist, AI Engineer & Builder",
    description:
      "Curious about how businesses work, and where data and AI actually help. Data science, generative AI, products, and entrepreneurship.",
    url: "https://eligoze75.github.io",
    siteName: "Elí Gonzalez",
    type: "website",
    images: [{ url: "/img/portfolio_website_pic.png", width: 800, height: 800, alt: "Elí Gonzalez" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elí Gonzalez · Data Scientist, AI Engineer & Builder",
    description:
      "Curious about how businesses work, and where data and AI actually help.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
