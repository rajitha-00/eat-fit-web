"use client";
import Link from "next/link";

const ProductSidebar = ({
  className = "col-xl-3 col-lg-4 order-2 order-md-1 mt-5",
  style = "style-1",
}) => {
  return (
    <div className={className}>
      <div className={`main-sidebar ${style}`}>
        <div className="single-sidebar-widget">
          <div className="wid-title">
            <h4>catagories</h4>
          </div>
          <div className="widget-categories">
            <ul>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-burger" />
                  Weight Gain
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-chicken" />
                  Weight Loss
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-french-fries" />
                  Shakes
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-pizza" />
                  Protien Wraps
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-sandwich" />
                  Deserts
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-bread" />
                  Cheat Meals
                </Link>
              </li>
              <li>
                <Link href="/shop-single">
                  <i className="flaticon-rice" />
                  Protien Kottu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSidebar;
