import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Ehab Hussien · Software Engineer & Web Developer",
  description: "Portfolio of Ehab Hussien, an 18-year-old Software Engineer studying at Helwan International Technology University. Specialized in JavaScript, Java, and Python.",
  keywords: ["Ehab Hussien", "Software Engineer", "Helwan International Technology University", "JavaScript", "Java", "Python", "Next.js", "Web Developer"],
  authors: [{ name: "Ehab Hussien" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="bg-[#0e0d0b] text-[#f5f0ea] antialiased selection:bg-[#c99a65] selection:text-[#0e0d0b]">
        {children}
      </body>
    </html>
  );
}
