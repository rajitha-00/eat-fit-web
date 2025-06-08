"use client";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";
import { useState } from "react";
import { Nav, Tab, Tabs } from "react-bootstrap";
const page = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <FoodKingLayout>
      <PageBanner pageName={"product single"} />
      <section className="product-details-section section-padding">
        <div className="container">
          <div className="product-details-wrapper">
            <div className="row">
              <div className="col-lg-5">
                <div className="product-image-items">
                  <Tab.Container defaultActiveKey={"nav-home"}>
                    <Tab.Content
                      className="tab-content"
                      eventKey="nav-tab-Content"
                    >
                      <Tab.Pane className="tab-pane fade" eventKey="nav-home">
                        <div className="product-image">
                          <img
                            src="assets/img/menu/Butter Chicken Bowl.png"
                            alt="img"
                          />
                          <a
                            href="assets/img/menu/Butter Chicken Bowl.png"
                            className="icon img-popup"
                          >
                            <i className="far fa-search" />
                          </a>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
              <div className="col-lg-7 mt-5 mt-lg-0">
                <div className="product-details-content">
                  <h3 className="pb-3">Butter Chicken Bowl</h3>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget
                    viverra pretium, dolor Numquam odit accusantium odit aut
                    commodi et. Nostrum est atque ut dolorum. Et sequi aut atque
                    doloribus qui. Iure amet in voluptate reiciendis.
                    Perspiciatis consequatur aperiam repellendus velit quia est
                    minima. tellus aliquet nunc vitae ultricies erat elit eu
                    lacus.
                  </p>
                  <div className="price-list d-flex align-items-center">
                    Rs.<span>1050</span>
                  </div>
                  <div className="cart-wrp">
                    <div className="cart-quantity">
                      <h5>QUANTITY:</h5>
                      <div className="quantity align-items-center d-flex">
                        <button
                          onClick={() => setQuantity(Math.max(0, quantity - 1))}
                          className="qtyminus minus"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value >= 0) {
                              setQuantity(value);
                            }
                          }}
                          className="qty"
                        />
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="qtyplus plus"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="shop-button d-flex align-items-center">
                      <Link href="shop-single" className="theme-btn">
                        <span className="button-content-wrapper d-flex align-items-center justify-content-center">
                          <span className="button-icon">
                            <i className="flaticon-shopping-cart" />
                          </span>
                          <span className="button-text">Add To Cart</span>
                        </span>
                      </Link>
                      <Link href="shop-single" className="star-icon">
                        <i className="fal fa-star" />
                      </Link>
                    </div>
                  </div>
                  <h6 className="shop-text">
                    GROUND DELIVERY SURCHARGE: <span>Rs. 180.00</span>
                  </h6>
                  <h6 className="details-info">
                    <span>Categories:</span>{" "}
                    <Link href="shop-single">Weight Gain</Link>
                  </h6>
                  <h6 className="details-info">
                    <span>Tags:</span> <Link href="shop-single">Mains</Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="single-tab">
              <Tabs
                defaultActiveKey="description"
                id="product-tabs"
                className="mb-4"
              >
                <Tab eventKey="description" title="Description">
                  <div className="description-items">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="description-content">
                          <h3>Experience is over the world visit</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur vulputate vestibulum Phasellus
                            rhoncus, dolor eget viverra pretium, dolor Numquam
                            odit accusantium odit aut commodi et. Nostrum est
                            atque ut dolorum. Et sequi aut atque doloribus qui.
                            Iure amet in voluptate reiciendis. Perspiciatis
                            consequatur aperiam repellendus velit quia est
                            minima. tellus aliquet nunc vitae ultricies erat
                            elit eu lacus. Vestibulum non justo consectetur,
                            cursus ante, tincidunt sapien. Nulla quis diam sit
                            amet turpis interdum accumsan quis necenim. Vivamus
                            faucibus ex sed nibh egestas elementum. Mauris et
                            bibendum dui. Aenean consequat pulvinar luctus
                          </p>
                          <h3 className="mb-0 mt-5">More Details</h3>
                          <div className="description-list-items d-flex">
                            <ul className="description-list">
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  Lorem Ipsum has been the 's standard dummy
                                  text. Lorem Ipsumum is simply dummy text.
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  type here your detail one by one li more add
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  has been the industry's standard dummy text
                                  ever since. Lorem Ips
                                </span>
                              </li>
                            </ul>
                            <ul className="description-list">
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  Lorem Ipsum generators on the tend to repeat.
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span> If you are going to use a passage.</span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  {" "}
                                  Lorem Ipsum generators on the tend to repeat.
                                </span>
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                <span>
                                  {" "}
                                  Lorem Ipsum generators on the tend to repeat.
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="additional" title="Additional Information">
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>Weight</td>
                          <td>240 g</td>
                        </tr>
                        <tr>
                          <td>Dimensions</td>
                          <td>20 × 30 × 40 cm</td>
                        </tr>
                        <tr>
                          <td>Colors</td>
                          <td>Black, Blue, Green</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </FoodKingLayout>
  );
};
export default page;
