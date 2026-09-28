import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://namrarasheed.com"),
  title: "Namra Rasheed | Software Engineer & AI Specialist",
  description: "Portfolio of Namra Rasheed, a Software Engineer specializing in AI, Machine Learning, and Quality Assurance.",
  openGraph: {
    title: "Namra Rasheed | Software Engineer & AI Specialist",
    description: "Portfolio of Namra Rasheed, a Software Engineer specializing in AI, Machine Learning, and Quality Assurance.",
    url: "https://namrarasheed.com",
    siteName: "Namra Rasheed Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Namra Rasheed - Software Engineer & AI Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Namra Rasheed | Software Engineer & AI Specialist",
    description: "Bridging theoretical machine learning with robust, scalable software solutions.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://namrarasheed.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Namra Rasheed",
    "url": "https://namrarasheed.com",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer specializing in AI, Machine Learning, and Quality Assurance.",
    "sameAs": [
      "https://github.com/Namra-Rasheed",
      "https://www.linkedin.com/in/namra-rasheed/"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50  text-slate-900  transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
