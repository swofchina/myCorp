import { Comforter } from "next/font/google";
import "./globals.css";

const comforter = Comforter({
  // variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:'400',
  display:'swap'
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${comforter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
