//Next.js
import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";

//Global css
import "./globals.css";
//Theme Provider
import { ThemeProvider } from "next-themes";


//Fonts
const interFont = Inter({subsets: ["latin"]});
const barlowFont= Barlow({
  subsets:['latin'],
  weight:['500','700'],
  variable:"--font-barlow",
})

//Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description: "GoShop is an ecommece website for all your purchasing needs!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       
      <body
        
        className={`${interFont.className} ${barlowFont.variable}`}>
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      >
    {children} 
      </ThemeProvider>
     
      </body>
    </html>
  );
}
