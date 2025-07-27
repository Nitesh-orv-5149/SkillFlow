import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const poppins = Baloo_2({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkillFlow",
  description: "User driven skill sharing roadmap based learning platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
