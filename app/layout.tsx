"use client"
import Footer from "./components/Footer";
import "./global.css"
import NavBar from "./components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar/>

        <main style={{ flex: 1 }}>
          {children}
        </main>
        
        <Footer/>
      </body>
    </html>
  );
}
