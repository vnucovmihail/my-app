import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/header";
import { Container, Box } from "@mui/material";
import Footer from "@/components/UI/footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logic of the Rim",
  description: "Learn how to mod RimWorld with Logic of the Rim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {}
        <AppRouterCacheProvider>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <Container component="main" maxWidth="md" sx={{ py: 4, flexGrow: 1 }}>
              {children}
            </Container>
            <Footer />
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}