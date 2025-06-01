
import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";
import NavbarItem from "./components/navbarItem";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "광고 확인",
  description: "광고 확인",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroUIProvider>
            <main className="w-full h-full flex flex-col items-center justify-center">
              <div className="flex w-full flex-col items-center bg-gradient-to-b from-[#415F8B] to-[#1B1B1B]">
                <nav className="w-full flex justify-center h-16  fixed top-0 left-0 right-0 z-50 bg-black">
                  <div className="md:w-[70vw] w-[95vw] flex justify-between items-center p-3 px-5 text-sm">
                    <Link href="/protected/meta">   
                    <div className="text-[20px] flex items-center text-3xl gap-x-2 font-bold">
                      <span className="text-white">애드트레커</span> <span className="bg-gradient-to-r from-[#00C5FF] to-[#0176FF] text-transparent bg-clip-text ">1.0</span>
                    </div>
                    </Link>
                    <NavbarItem></NavbarItem>

                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  </div>
                </nav>
                <div className="w-[95vw] md:w-[70vw] h-full flex flex-col items-center justify-center mt-16">
                  {children}
                </div>
              </div>
            </main>
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
