import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleReviewsDrawer from "@/components/layout/GoogleReviewsDrawer";
import { generateLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jost = Jost({ 
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Tooth Sanctuary | NHS & Private Dentist in London",
    template: "%s | The Tooth Sanctuary"
  },
  description: "High quality NHS and private dentistry in London. Comprehensive dental services including preventive, restorative, orthodontic, and cosmetic dentistry.",
  keywords: [
    "dentist london",
    "nhs dentist",
    "private dentist",
    "dental clinic london",
    "invisalign london",
    "teeth whitening",
    "dental implants",
    "cosmetic dentistry",
    "emergency dentist",
  ],
  authors: [{ name: "The Tooth Sanctuary" }],
  creator: "The Tooth Sanctuary",
  publisher: "The Tooth Sanctuary",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://thetoothsanctuary.co.uk",
    siteName: "The Tooth Sanctuary",
    title: "The Tooth Sanctuary | NHS & Private Dentist in London",
    description: "High quality NHS and private dentistry in London. Your smile, our priority.",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "The Tooth Sanctuary - Dental Clinic",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@toothsanctuary",
    creator: "@toothsanctuary",
    title: "The Tooth Sanctuary | NHS & Private Dentist in London",
    description: "High quality NHS and private dentistry in London. Your smile, our priority.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://thetoothsanctuary.co.uk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${jost.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <GoogleReviewsDrawer />
        </ThemeProvider>
      </body>
    </html>
  );
}
