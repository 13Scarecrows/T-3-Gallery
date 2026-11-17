import "~/styles/globals.css";
import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});




export default function LayoutPage02({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    //make sure you enclose your stuff in return
    //Get rid of htlm and body to fix hydration error
    <>
      <div className="w-full">woah second layer D: click this non-suspicious link vvv</div>
        <Link href="/" className="text-xl text-blue-500">CLICK HERE CLICK HERE CLICK HERE</Link>
        {children}
    </>

  );
}
