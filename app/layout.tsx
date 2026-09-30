import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Célébrez-vous — Best-sellers 11.11 | Singles' Day (11.11)",
  description: "Les cadeaux solo les plus offerts (et s'offrir)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
