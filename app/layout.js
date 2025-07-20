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

export const metadata = {
  title:
    "Eat Fit - Healthy Kitchen in Colombo | Weight Gain & Weight Loss Meals",
  description:
    "Eat Fit is Colombo's premier healthy kitchen offering expertly crafted meals designed for weight gain and weight loss goals. Enjoy nutritious, delicious, and balanced dishes made from fresh, organic ingredients to fuel your lifestyle. Order online now for fast delivery and taste the difference of healthy eating.",
  keywords: [
    "Eat Fit Colombo",
    "Healthy Kitchen Colombo",
    "Weight Gain Meals",
    "Weight Loss Meals",
    "Healthy Food Delivery Colombo",
    "Organic Meals Colombo",
    "Balanced Diet Colombo",
    "Healthy Restaurant Colombo",
    "Fitness Meals Colombo",
    "Nutritious Meals",
  ].join(", "),
  openGraph: {
    title:
      "Eat Fit - Healthy Kitchen in Colombo | Weight Gain & Weight Loss Meals",
    description:
      "Discover Eat Fit, Colombo’s trusted healthy kitchen serving weight gain and weight loss meals made from fresh, organic ingredients. Order healthy, balanced meals delivered fast to your door.",
    url: "https://eatfit.lk",
    siteName: "Eat Fit",
    // images: [
    //   {
    //     url: "https://yourdomain.com/assets/img/seo-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Eat Fit Healthy Kitchen Colombo",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProviderWrapper>
          <Preloader />
          {children}
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
