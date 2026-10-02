import type { Metadata } from "next"
import "./globals.css"
export const metadata: Metadata = { title:"Bright Community Development Organization", description:"To Build Strong Community Is Our Mission - Uganda" }
export default function RootLayout({children}:{children:React.ReactNode}){ return(<html lang="en"><body className="bg-[#FFFBF5] antialiased">{children}</body></html>) }
