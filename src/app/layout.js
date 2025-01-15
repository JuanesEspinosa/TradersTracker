import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logo from "./assets/logo-con-negro.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Traders Tracker",
  description: "Traders Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icono-TT.svg" type="image/svg+xml" />
        <title>Traders Tracker</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
