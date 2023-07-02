"use client";

import { Sidebar } from "@/src/components/sidebar";
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
        <div className="bg-white dark:bg-dark h-screen overflow-hidden flex">
          <div className="bg-white dark:bg-dark w-1/5 h-screen overflow-y-auto border-r">
            <Sidebar />
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 w-4/5 h-screen overflow-y-auto">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
