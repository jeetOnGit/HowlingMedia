import { DM_Sans, Syne, Playfair_Display } from "next/font/google";
import "./globals.css";

// Configure Next.js optimized fonts
const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: '--font-dm-sans' 
});

const syne = Syne({ 
  subsets: ["latin"], 
  weight: ["700", "800"], 
  variable: '--font-syne' 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["700", "800"], 
  variable: '--font-playfair' 
});

export const metadata = {
  title: "Salt & Lights Media — You do business, We build presence",
  description: "Digital marketing agency in Kolkata helping local businesses build a powerful online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <meta name="google-site-verification" content="Qc5blAzqIWCphieres-YiROQBtk0dz8fWEWuE6IVpoE" />
      <body className={`${dmSans.className} ${syne.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
