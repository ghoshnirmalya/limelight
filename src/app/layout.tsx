import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-white dark:bg-dark h-screen overflow-hidden p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
