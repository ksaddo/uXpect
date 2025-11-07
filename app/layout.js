import { Albert_Sans, Red_Hat_Display, Bruno_Ace } from "next/font/google";
import "./globals.css";
import NewNav from "./components/NewNav";
import Footer from "./components/Footer";

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "800", "900"], // ✅ Multiple weights for flexibility
  variable: "--font-red-hat-display",
});

const bruno = Bruno_Ace({
  variable: "--font-bruno-ace",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "UXPECT",
  description: "Website to display other websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} ${redHatDisplay.variable} ${bruno.variable} antialiased`}>
        <NewNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
