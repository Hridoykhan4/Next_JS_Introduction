import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS",
  },
  keywords: ["Next.JS", "React", "Learning", "Playground"],
  description:
    "Start your NextJS journey with Hridoy, let's see what we can build together",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main className="grow p-10">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
