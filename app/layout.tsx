import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeMink",
  description: "CodeMink product landing page",
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
