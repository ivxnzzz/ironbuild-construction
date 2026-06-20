import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IronBuild Construction Group | Professional Builders Australia",
  description:
    "Professional construction company specializing in residential and commercial building projects. From residential developments to commercial projects, IronBuild delivers reliable construction solutions.",
  keywords: [
    "construction company",
    "builders sydney",
    "residential construction",
    "commercial construction",
    "renovations",
    "extensions",
  ],
  openGraph: {
    title: "IronBuild Construction Group | Professional Builders Australia",
    description:
      "Professional construction company specializing in residential and commercial building projects.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${playfairDisplay.variable} h-full`}
    >
      <body className="min-h-full bg-[#131110] text-[#f5f0eb] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
