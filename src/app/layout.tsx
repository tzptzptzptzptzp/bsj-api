import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { CONSTANTS } from "@/constants";
import "./globals.css";

const Font = M_PLUS_Rounded_1c({
  weight: "700",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: CONSTANTS.SITE.title,
  description: CONSTANTS.SITE.description,
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={Font.className}>{children}</body>
    </html>
  );
}
