import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Dashboard",
  description: "A modern dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
            <nav>
              <ul className="space-y-2">
                <li><a href="/" className="block p-2 hover:bg-gray-700 rounded">Home</a></li>
                <li><a href="/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</a></li>
                <li><a href="/analytics" className="block p-2 hover:bg-gray-700 rounded">Analytics</a></li>
                <li><a href="/settings" className="block p-2 hover:bg-gray-700 rounded">Settings</a></li>
              </ul>
            </nav>
          </div>
          
          {/* Main Content */}
          <div className="flex-1 p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
