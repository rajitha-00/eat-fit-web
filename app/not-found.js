import dynamic from "next/dynamic";
import Link from "next/link";

const FoodKingLayout = dynamic(() => import("@/layouts/FoodKingLayout"), {
  ssr: false,
});

const NotFound = () => (
  <FoodKingLayout header={2} footer={2}>
    <section className="error-section section-bg section-padding fix">
      <div className="container">
        <div className="error-content text-center">
          <h2>404</h2>
          <h3>We're sorry, page not found</h3>
          <Link href="/">
            <a className="theme-btn style-line-height mt-5">Back To Home</a>
          </Link>
        </div>
      </div>
    </section>
  </FoodKingLayout>
);

export default NotFound;
