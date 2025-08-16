import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar";

const font = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: {
    default: "Marci Metzger Homes | Real Estate Solutions",
    template: "%s | Marci Metzger Homes"
  },
  description: "Discover luxury homes, condos, and real estate services with Marci Metzger Homes. Get expert advice, premium property listings, and trusted real estate solutions for your dream home.",
  keywords: [
    "real estate",
    "homes for sale",
    "Marci Metzger",
    "buy a house",
    "sell property",
    "luxury homes",
    "real estate agent",
    "condos for sale",
    "dream home",
    "property listings"
  ],
  authors: [{ name: "Marci Metzger Homes" }],
  creator: "Marci Metzger Homes",
  publisher: "Marci Metzger Homes",
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  },
  category: "Real Estate",
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },
  openGraph: {
    title: "Marci Metzger Homes | Your Dream Home Awaits",
    description: "Explore premium real estate listings and expert guidance with Marci Metzger Homes.",
    url: "https://yourdomain.com",
    siteName: "Marci Metzger Homes",
    images: [
      {
        url: "https://yourdomain.com/og-image.webp", // Use an actual OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "Luxury homes by Marci Metzger",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marci Metzger Homes | Your Dream Home Awaits",
    description: "Find your dream home with Marci Metzger Homes – premium listings and expert real estate services.",
    images: ["https://yourdomain.com/og-image.webp"],
    creator: "@YourTwitterHandle",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Marci Metzger Homes",
              "image": "https://yourdomain.com/logo.webp",
              "url": "https://yourdomain.com",
              "telephone": "+1-555-555-5555",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "City",
                "addressRegion": "State",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://twitter.com/yourhandle",
                "https://instagram.com/yourhandle"
              ]
            })
          }}
        />
      </head>

      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
