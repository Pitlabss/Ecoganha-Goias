import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "EcoGanha",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="">{children}</body>
    </html>
  );
}