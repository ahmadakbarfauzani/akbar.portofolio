import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad Akbar Fauzani | Graphic Designer",
  description: "Portfolio of Ahmad Akbar Fauzani, shaping a more beautiful and functional world through intentional design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="bg-black text-white flex flex-col selection:bg-white/30">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
