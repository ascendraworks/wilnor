import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wilnorlavett.com'),
  title: {
    default: "Wilnor & Lavetts Employment - Your Trusted Maid Agency",
    template: "%s | Wilnor & Lavetts Employment",
  },
  description: "Providing reliable and professional helper arrangements in Singapore. Specializing in domestic helpers, maids, and caregiver services. Stop stressing, start living.",
  keywords: ["maid agency Singapore", "domestic helper Singapore", "foreign domestic worker", "caregiver services", "Wilnor & Lavetts", "helper agency", "professional maids"],
  authors: [{ name: "Wilnor & Lavett's Employment Pte Ltd", url: "https://wilnorlavett.com" }],
  creator: "Wilnor & Lavett's Employment Pte Ltd",
  publisher: "Wilnor & Lavett's Employment Pte Ltd",
  alternates: {
    canonical: '/',
    // languages: { // If you have multiple languages
    //   'en-US': '/en-US',
    // },
  },
  openGraph: {
    title: "Wilnor & Lavetts Employment - Your Trusted Maid Agency",
    description: "Reliable and professional helper arrangements in Singapore. Find the perfect domestic helper or caregiver with us.",
    url: "https://wilnorlavett.com",
    siteName: "Wilnor & Lavett's Employment Pte Ltd",
    images: [
      {
        url: "/img/logo.png", // Path to your OG image
        // width: 800, // Omitting specific dimensions as requested
        // height: 600, // Omitting specific dimensions as requested
        alt: "Wilnor & Lavett's Employment Pte Ltd Logo",
      },
    ],
    locale: "en_SG", // Singapore English
    type: "website",
  },
  // twitter: { // Omitting Twitter card as no handle provided
  //   card: "summary_large_image",
  //   title: "Wilnor & Lavetts Employment - Your Trusted Maid Agency",
  //   description: "Your trusted source for domestic helpers and caregivers in Singapore. Professional and reliable services.",
  //   // siteId: "YourTwitterSiteID", // If you have one
  //   // creator: "@YourTwitterHandle", // Replace with your Twitter handle
  //   // creatorId: "YourTwitterCreatorID", // If you have one
  //   images: ["/img/logo.png"], // Path to your Twitter image
  // },
  icons: {
    icon: "/img/logo.png",
    shortcut: "/img/logo.png",
    apple: "/img/logo.png",
    // other: { // For other specific icons
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
  robots: { // Optional: Define crawling behavior
    index: true,
    follow: true,
    nocache: false, // Or true if content changes very frequently
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false, // Allow image indexing
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: { // Omitting verification as no codes provided
  //   google: 'your-google-site-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   yahoo: 'your-yahoo-verification-code',
  //   other: {
  //     me: ['my-email@example.com', 'my-link'],
  //   },
  // },
  // manifest: "/manifest.json", // If you have a PWA manifest
  // appleWebApp: { // For iOS web app settings
  //   title: 'Wilnor & Lavetts',
  //   statusBarStyle: 'black-translucent',
  //   startupImage: [
  //     '/assets/startup/apple-touch-startup-image-768x1004.png',
  //     {
  //       url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
  //       media: '(device-width: 768px) and (device-height: 1024px)',
  //     },
  //   ],
  // },
  // formatDetection: { // Optional: Control how numbers are detected
  //   email: false,
  //   address: false,
  //   telephone: false,
  // },
  // assets: ['https://wilnorlavett.com/assets'], // Optional: CDN asset paths
  // category: 'employment agency', // Optional: Category of your site
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
