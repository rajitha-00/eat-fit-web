import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/Product";
import ProductSidebar from "@/components/ProductSidebar";
import ProductTopBar from "@/components/ProductTopBar";
import FoodKingLayout from "@/layouts/FoodKingLayout";
const PRODUCTS = [
  {
    image: "assets/img/food/pasta-2.png",
    name: "Chiness pasta",
    price: "$30.52",
    discountPrice: "$28.52",
    discountPercent: "-5%",
    link: "/shop-single",
    addToCartLink: "/shop-cart",
    rating: 5,
  },
  {
    image: "assets/img/food/burger-2.png",
    name: "Whopper Burger King",
    price: "$30.52",
    discountPrice: "$28.52",
    discountPercent: "-5%",
    link: "/shop-single",
    addToCartLink: "/shop-cart",
    rating: 5,
    isActive: true,
  },
  // ...other products
];
const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Shop Left Sidebar"} />
      <section className="food-category-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <ProductSidebar />
            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
              <ProductTopBar />
              {PRODUCTS.map((prod, idx) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  key={prod.name + idx}
                >
                  <ProductCard {...prod} />
                </div>
              ))}
              <div className="page-nav-wrap mt-5 text-center">
                <ul>
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-left" />
                    </a>
                  </li>
                  {[1, 2, 3, 4].map((num) => (
                    <li key={num}>
                      <a className="page-numbers" href="#">
                        {num}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a className="page-numbers" href="#">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};
export default page;
