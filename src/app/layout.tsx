import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Robotics Engineer",
    "ROS Developer",
    "ROS2",
    "Automation",
    "Industrial Automation",
    "Path Planning",
    "Mobile Robots",
    "Prudhvi Raj Chalapaka",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${siteConfig.website}`,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    creator: "@prudhvirajchalapaka",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts loaded via CSS for production - fallback to system fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
