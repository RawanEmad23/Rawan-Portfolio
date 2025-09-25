import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";



export const metadata = {
  title: 'Rawan Portfolio',
  icons: {
    icon: '/6b5ac98b41f16076692b2e51129ed1ce.jpg', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
     
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
