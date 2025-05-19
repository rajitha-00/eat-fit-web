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

import Preloader from "@/layouts/Preloader";
export const metadata = {
  title: "Eat Fit",
  description:
    "Eat Fit is your all-in-one POS and online ordering solution for restaurants and cafés—manage menus, inventory, and payments seamlessly while giving customers a fast, secure OnePay checkout experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
