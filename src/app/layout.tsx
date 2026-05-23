import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "gintoki.log",
    template: "%s - gintoki.log",
  },
  description: "Slow writing on the things I am living through and the thoughts they leave behind.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
