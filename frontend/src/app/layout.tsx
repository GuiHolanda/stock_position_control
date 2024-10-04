import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomHeader } from "../components/CustomHeader";
import { CustomFooter } from "../components/CustomFooter";
import { Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veneza Investimentos",
  description:
    "Soluções financeiras personalizadas para você alcançar seus objetivos com segurança e confiabilidade.",
  keywords: ["Investimentos", "Pernambuco", "Finanças", "Econômia", "Renda"],
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col h-screen">
          <CustomHeader />
          <div className={`${montserrat.variable}  mt-[55px] sm:mt-[104px]`}>
            {children}
          </div>
          <CustomFooter />
        </main>
      </body>
    </html>
  );
}
