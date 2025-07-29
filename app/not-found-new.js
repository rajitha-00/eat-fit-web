"use client";

import Link from "next/link";
import FoodKingLayout from "@/layouts/FoodKingLayout";

export default function NotFound() {
  return (
    <FoodKingLayout header={2} footer={2}>
      <section className="error-section section-bg section-padding fix">
        <div className="container">
          <div className="error-content text-center">
            <h2>404</h2>
            <h3>We&apos;re sorry, page not found</h3>
            <Link href="/" className="theme-btn style-line-height mt-5">
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </FoodKingLayout>
  );
}
