import { ClerkProvider } from '@clerk/nextjs'
import './globals.css';
import Header from '../components/Header';
import { Inter as FontSans } from "next/font/google"
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body         className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
