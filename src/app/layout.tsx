import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle,DrawerClose } from "@/components/ui/drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-background z-50 w-full">
          <div className="px-6 flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <span className="text-xl font-bold">Cutesy</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/compo" className="text-sm font-medium hover:text-[#e84393] transition-colors" prefetch={false}>
                Components
              </Link>
              <Link href="/installation" className="text-sm font-medium hover:text-[#e84393] transition-colors" prefetch={false}>
                Installation
              </Link>
              <Link href="docs" className="text-sm font-medium hover:text-[#e84393] transition-colors" prefetch={false}>
                Documentation
              </Link>
              <Link href="github" className="text-sm font-medium hover:text-[#e84393] transition-colors" prefetch={false}>
                GitHub
              </Link>
            </nav>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="fixed inset-0 z-50 flex flex-col bg-white">
                <div className="flex flex-col items-center justify-center gap-4 p-4 h-full">
                  <DrawerClose asChild>

                  
                  <Link href="/compo" className="flex items-center gap-2 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-primary" prefetch={false}>
                    Components
                  </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                  <Link href="/installation" className="flex items-center gap-2 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-primary" prefetch={false}>
                    Installation
                  </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                  <Link href="docs" className="flex items-center gap-2 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-primary" prefetch={false}>
                    Documentation
                  </Link>
                  </DrawerClose>
                  <DrawerClose asChild>
                  <Link href="github" className="flex items-center gap-2 text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-primary" prefetch={false}>
                    GitHub
                  </Link>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}