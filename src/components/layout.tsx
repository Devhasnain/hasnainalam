import { Inter } from "next/font/google";

import Navbar from "./Navbar";
import Footer from "./Footer";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar className={`${inter.className}`} />
      <main
        className={`${inter.className} bg-[#0b0f19] text-gray-100 antialiased overflow-x-hidden relative`}
      >
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px]" />
          <div className="fixed bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/5 blur-[200px]" />
          <div className="fixed top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-purple-600/5 blur-[120px]" />
        </div>
        {children}
      </main>
      <Footer className={`${inter.className}`} />
    </>
  );
}
