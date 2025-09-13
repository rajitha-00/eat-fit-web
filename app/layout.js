// ❌ DO NOT add "use client" here
import "./globals.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/animate.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/swiper-bundle.min.css";
import "@css/nice-select.css";
import "@css/main.css";
import "rc-slider/assets/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

/* image popup */

import ReduxProviderWrapper from "@/lib/ReduxProviderWrapper";
import Preloader from "@/layouts/Preloader";
import MaintenancePage from "@/components/Down";

export const metadata = {
  title:
    "EatFit Rajagiriya | #1 Healthy Food Delivery in Colombo | Weight Loss & Gain Meals",
  description:
    "EatFit Rajagiriya delivers premium healthy meals across Colombo. Specialized weight loss & weight gain meal plans, organic ingredients, fitness nutrition. Order now from Colombo's top-rated healthy kitchen since 2020.",
  keywords: [
    "EatFit Rajagiriya",
    "healthy food delivery Colombo",
    "weight loss meals Colombo",
    "weight gain meals Sri Lanka",
    "organic meal delivery Rajagiriya",
    "fitness nutrition Colombo",
    "healthy restaurant Colombo",
    "meal prep delivery Sri Lanka",
    "diet food Colombo",
    "nutrition meals Rajagiriya",
    "healthy kitchen Colombo",
    "balanced diet delivery",
    "protein meals Colombo",
    "clean eating Sri Lanka",
  ].join(", "),
  authors: [{ name: "EatFit Rajagiriya Team" }],
  creator: "EatFit Healthy Kitchen",
  publisher: "EatFit Rajagiriya",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://eatfit.lk",
    languages: {
      en: "https://eatfit.lk",
      si: "https://eatfit.lk/si",
    },
  },
  openGraph: {
    title: "EatFit Rajagiriya | #1 Healthy Food Delivery in Colombo",
    description:
      "Premium healthy meals delivered across Colombo. Weight loss & gain programs, organic ingredients, expert nutrition. Order from Sri Lanka's leading healthy kitchen.",
    url: "https://eatfit.lk",
    siteName: "EatFit Rajagiriya",
    images: [
      {
        url: "https://eatfit.lk/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EatFit Healthy Kitchen Rajagiriya - Fresh Organic Meals",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Sri Lanka",
  },
  twitter: {
    card: "summary_large_image",
    title: "EatFit Rajagiriya | Healthy Food Delivery Colombo",
    description:
      "Fresh, organic, healthy meals delivered across Colombo. Weight management programs & fitness nutrition.",
    images: ["https://eatfit.lk/assets/img/twitter-card.jpg"],
    creator: "@eatfitlk",
    site: "@eatfitlk",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "food & dining",
  classification: "Healthy Food Delivery Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Enhanced SEO and GEO Meta Tags */}
        <meta name="geo.region" content="LK-11" />
        <meta name="geo.placename" content="Rajagiriya" />
        <meta name="geo.position" content="6.9147;79.8804" />
        <meta name="ICBM" content="6.9147, 79.8804" />
        <meta
          name="DC.title"
          content="EatFit Rajagiriya - Healthy Food Delivery"
        />

        {/* Business-specific meta tags */}
        <meta
          name="business:contact_data:street_address"
          content="Rajagiriya, Colombo"
        />
        <meta name="business:contact_data:locality" content="Rajagiriya" />
        <meta name="business:contact_data:region" content="Western Province" />
        <meta name="business:contact_data:postal_code" content="10100" />
        <meta name="business:contact_data:country_name" content="Sri Lanka" />

        {/* Local Business JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "@id": "https://eatfit.lk/#restaurant",
              name: "EatFit Rajagiriya",
              alternateName: ["EatFit Healthy Kitchen", "Eat Fit Colombo"],
              description:
                "Premium healthy meal delivery service in Colombo specializing in weight loss and weight gain nutrition programs with organic ingredients.",
              url: "https://eatfit.lk",
              telephone: "+94703646646",
              email: "info@eatfit.lk",
              foundingDate: "2020",
              priceRange: "$$",
              cuisineType: ["Healthy", "Organic", "Nutritious", "Fitness Food"],
              servesCuisine: [
                "Healthy Sri Lankan",
                "International Healthy Food",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rajagiriya",
                addressLocality: "Colombo",
                addressRegion: "Western Province",
                postalCode: "10100",
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "6.9147",
                longitude: "79.8804",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "6.9147",
                  longitude: "79.8804",
                },
                geoRadius: "25000",
              },
              serviceArea: {
                "@type": "Place",
                name: "Colombo District",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "08:00",
                  closes: "22:00",
                },
              ],
              hasMenu: {
                "@type": "Menu",
                name: "EatFit Healthy Meals Menu",
                description:
                  "Weight loss meals, weight gain meals, protein-rich dishes, organic ingredients",
              },
              paymentAccepted: ["Cash", "Credit Card", "Online Payment"],
              currenciesAccepted: "LKR",
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Healthy Meal Delivery",
                    description: "Premium healthy meal delivery across Colombo",
                  },
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1",
              },
              image: [
                "https://eatfit.lk/assets/img/logo/logo-3.svg",
                "https://eatfit.lk/assets/hero/Beef-Burger-bowl.png",
                "https://eatfit.lk/assets/hero/chicken-teriyaki-bowl.png",
              ],
              logo: "https://eatfit.lk/assets/img/logo/logo-3.svg",
              sameAs: [
                "https://www.facebook.com/eatfitlk",
                "https://www.instagram.com/eatfitlk",
                "https://twitter.com/eatfitlk",
              ],
            }),
          }}
        />

        {/* FAQ Schema for GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What makes EatFit the best healthy food delivery in Colombo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "EatFit Rajagiriya stands out as Colombo's premier healthy kitchen due to our organic ingredients, specialized weight management programs, expert nutritionist-designed meals, and reliable delivery across Colombo since 2020.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does EatFit deliver healthy meals to all areas of Colombo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, EatFit delivers fresh, healthy meals throughout Colombo including Rajagiriya, Mount Lavinia, Dehiwala, Nugegoda, Maharagama, and surrounding areas within a 25km radius of our Rajagiriya kitchen.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What types of healthy meals does EatFit offer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "EatFit specializes in weight loss meals, weight gain meals, protein-rich dishes, organic vegetarian options, keto-friendly meals, and balanced nutrition plans designed by certified nutritionists for optimal health.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does EatFit ensure meal freshness and quality?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "EatFit maintains the highest quality standards by using organic ingredients, preparing meals fresh daily in our Rajagiriya kitchen, following strict hygiene protocols, and delivering in temperature-controlled packaging.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://eatfit.lk/#organization",
              name: "EatFit Rajagiriya",
              url: "https://eatfit.lk",
              logo: "https://eatfit.lk/assets/img/logo/logo-3.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94703646646",
                contactType: "customer service",
                areaServed: "LK",
                availableLanguage: ["English", "Sinhala"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rajagiriya, Colombo",
                addressCountry: "LK",
              },
              founder: {
                "@type": "Person",
                name: "EatFit Founder",
              },
              foundingDate: "2020",
              description:
                "Sri Lanka's leading healthy meal delivery service based in Rajagiriya, Colombo, specializing in organic weight management meals.",
              knowsAbout: [
                "Healthy Food Delivery",
                "Weight Loss Nutrition",
                "Weight Gain Meals",
                "Organic Ingredients",
                "Fitness Nutrition",
                "Meal Planning",
              ],
            }),
          }}
        />

        {/* Local Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://eatfit.lk/#localbusiness",
              name: "EatFit Rajagiriya",
              image: "https://eatfit.lk/assets/img/logo/logo-3.svg",
              telephone: "+94703646646",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rajagiriya",
                addressLocality: "Colombo",
                addressRegion: "Western Province",
                postalCode: "10100",
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.9147,
                longitude: 79.8804,
              },
              url: "https://eatfit.lk",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "08:00",
                closes: "22:00",
              },
              priceRange: "$$",
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://eatfit.lk/#website",
              url: "https://eatfit.lk",
              name: "EatFit Rajagiriya",
              description:
                "Order healthy meals online from EatFit Rajagiriya - Colombo's premier healthy food delivery service",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://eatfit.lk/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
              inLanguage: "en",
            }),
          }}
        />
      </head>
      <body>
        <ReduxProviderWrapper>
          <Preloader />
          {children}
          {/* Creative Maintenance Page */}
          {/* <MaintenancePage /> */}
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
