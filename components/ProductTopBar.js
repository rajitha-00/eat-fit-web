import Link from "next/link";
import NiceSelect from "./NiceSelect";

const ProductTopBar = ({ mb0 = false }) => {
  return (
    <div className={`woocommerce-notices-wrapper ${mb0 ? "mb-0" : ""}`}>
      <div className="product-showing">
        <h5>
          Showing <span>1–12</span> of 27 results
        </h5>
      </div>
      <div className="form-clt">
        <h6>
          Sort by:{" "}
          <Link href="/shop">
            <i className="fal fa-sort-alt" />
          </Link>
        </h6>
        <NiceSelect />
      </div>
    </div>
  );
};
export default ProductTopBar;
