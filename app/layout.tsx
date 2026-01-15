import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Footer from "@/components/Footer";
import "../styles/footer.scss";
import SocialSidebar from "@/components/SocialSidebar";
import TopHeader from "@/components/Top-Header";
import BottomHeader from "@/components/Bottom-Header";
import "../styles/header.scss";
import Providers from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://boobook.in"),

  title: {
    default: "BOOBOOK TRIP — Andaman & Nicobar Tour Packages & Travel Booking",
    template: "%s | BOOBOOK TRIP",
  },

  description:
    "Book Andaman & Nicobar tour packages, hotels, ferry tickets and island excursions with BOOBOOK TRIP — your trusted local travel partner.",

  keywords: [
    "Andaman travel",
    "Andaman and Nicobar tours",
    "Andaman trip booking",
    "Andaman holiday packages",
    "Andaman tour operators",
    "Andaman vacation deals",
    "Andaman Island tours",
    "Nicobar Island tours",
    "Andaman trips",
    "Andaman travel agency",
    "Havelock Island tour",
    "Neil Island tour",
    "Ross Island visit",
    "Port Blair tour",
    "Andaman honeymoon packages",
    "Andaman family tour packages",
    "Andaman group tours",
    "Andaman island hopping",
    "Andaman adventure tours",
    "Andaman sightseeing tours",
    "Cellular Jail tour",
    "Radhanagar Beach tours",
    "Elephant Beach snorkelling",
    "North Bay Island trip",
    "Baratang Island tour",
    "Barren Island volcano tour",
    "Diglipur tour packages",
    "Andaman ferry booking",
    "Andaman scuba diving packages",
    "Andaman luxury tours",
    "Andaman budget tour packages",
    "Andaman couple packages",
    "Best time to visit Andaman",
    "Best beaches in Andaman Islands",
    "Andaman hotel booking",
    "Andaman tour booking",
    "Andaman island hopping for couples",
  ],

  authors: [{ name: "BOOBOOK TRIP" }],
  creator: "BOOBOOK TRIP",
  publisher: "BOOBOOK TRIP",

  openGraph: {
    type: "website",
    url: "https://boobook.in",
    title: "BOOBOOK TRIP — Andaman Tour & Travel Booking",
    description:
      "Trusted Andaman trip planner. Customize your vacation, hotels, watersports & transfers with BOOBOOK TRIP.",
    siteName: "BOOBOOK TRIP",
    images: [
      {
        url: "https://boobook.in/images/boobook_trip_image_ads.jpg",
        width: 1200,
        height: 630,
        alt: "BOOBOOK TRIP - Andaman Travel",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@BoobookTrip",
    creator: "@BoobookTrip",
    title: "BOOBOOK TRIP — Plan Your Andaman Trip",
    description:
      "Plan your Andaman vacation with BOOBOOK TRIP — expert local support & best deals.",
    images: ["https://boobook.in/images/boobook_trip_image_ads.jpg"],
  },

  alternates: {
    canonical: "https://boobook.in",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const logoStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BOOBOOK TRIP",
    "url": "https://boobook.in",
    "logo": "https://boobook.in/logo.jpg", // Make sure this is your actual logo URL
    "sameAs": [
      "https://www.facebook.com/tripboobook",
      "https://x.com/BoobookTrip",
      "https://www.instagram.com/boobooktrip",
      "https://www.linkedin.com/company/boobook-trip"
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* Bootstrap */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        {/* Google Ads / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11278403090"
          strategy="afterInteractive"
        />

        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11278403090');
          `}
        </Script>

        <Script
          id="logo-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(logoStructuredData) }}
        />
      </head>

      <body className="min-h-screen overflow-visible">
        <Providers>
          <TopHeader />
          <BottomHeader />
          <SocialSidebar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
