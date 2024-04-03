import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "I Spread Tech",
  description: "Portfolio of Kaarthikeyan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light lg:scroll-smooth">
      <body className="">
        <div className="main">
          <div className="gradient" />
        </div>
        <Providers>{children}</Providers>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 2000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: " text-gray-700",
              zIndex: 9999,
            },
          }}
        />
      </body>
    </html>
  );
}
