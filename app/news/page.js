import BlogSidebar from "@/components/BlogSidebar";
import Cta from "@/components/Cta";
import PageBanner from "@/components/PageBanner";
import FoodKingLayout from "@/layouts/FoodKingLayout";
import Link from "next/link";

// 1. Blog Data Array
const blogPosts = [
  {
    id: 1,
    title: "10 Proven Healthy Diets for a Fit Lifestyle",
    image:
      "https://img.freepik.com/free-photo/healthy-menu-recipe-food-diet_53876-125076.jpg", // Direct image link!
    author: "Dr. Amy Wellness",
    comments: 18,
    date: "12th June 2024",
    excerpt:
      "Discover the world’s healthiest diets—from the Mediterranean to plant-based living. Learn what science says about food for energy, weight loss, and disease prevention.",
    link: "/news-details/10-healthy-diets",
  },
  {
    id: 2,
    title: "Plant-Based Eating: A Complete Beginner’s Guide",
    image:
      "https://img.freepik.com/free-photo/vegan-salad-with-fresh-vegetables-white-plate_2829-19916.jpg",
    author: "Chef Ella Green",
    comments: 9,
    date: "7th June 2024",
    excerpt:
      "Thinking of going plant-based? Here’s everything you need to know about proteins, meal plans, and tasty recipes that nourish your body and mind.",
    link: "/news-details/plant-based-guide",
  },
  {
    id: 3,
    title: "Meal Prep for Busy People: 5 Nutritious Plans",
    image:
      "https://img.freepik.com/free-photo/flat-lay-food-frame_23-2148720155.jpg",
    author: "Mark Fuel",
    comments: 24,
    date: "2nd June 2024",
    excerpt:
      "Stay on track with your health goals even on your busiest days! These simple meal prep plans keep your diet clean and your schedule hassle-free.",
    link: "/news-details/meal-prep-tips",
  },
  {
    id: 4,
    quote: true,
    quoteText:
      "Good food is the foundation of genuine happiness. Cooking is love made visible.",
    comments: 35,
    date: "1st June 2024",
  },
];

const page = () => {
  return (
    <FoodKingLayout>
      <PageBanner pageName={"Blog Page"} />
      <section className="blog-wrapper news-wrapper section-padding section-bg">
        <div className="container">
          <div className="news-area">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts">
                  {blogPosts.map((post, idx) =>
                    post.quote ? (
                      <div
                        className="single-blog-post quote-post format-quote"
                        key={post.id || `quote-${idx}`}
                      >
                        <div className="post-content text-white bg-cover">
                          <div className="quote-content">
                            <div className="icon">
                              <i className="fas fa-quote-left" />
                            </div>
                            <div className="quote-text">
                              <h2>{post.quoteText}</h2>
                              <div className="post-meta pt-40 d-inline-block">
                                <span>
                                  <i className="fal fa-comments" />
                                  {post.comments} Comments
                                </span>
                                <span>
                                  <i className="fal fa-calendar-alt" />
                                  {post.date}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="single-blog-post" key={post.id}>
                        <div
                          className="post-featured-thumb bg-cover"
                          style={{
                            backgroundImage: `url("${post.image}")`,
                          }}
                        />
                        <div className="post-content">
                          <div className="post-meta">
                            <span>
                              <i className="fal fa-user" />
                              {post.author}
                            </span>
                            <span>
                              <i className="fal fa-comments" />
                              {post.comments} Comments
                            </span>
                            <span>
                              <i className="fal fa-calendar-alt" />
                              {post.date}
                            </span>
                          </div>
                          <h2>
                            <Link href={post.link}>{post.title}</Link>
                          </h2>
                          <p>{post.excerpt}</p>
                          <div className="d-flex justify-content-between align-items-center mt-4">
                            <div className="post-link">
                              <Link href={post.link}>
                                <i className="fas fa-arrow-right" /> Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Pagination */}
                <div className="page-nav-wrap mt-5 text-center">
                  <ul>
                    <li>
                      <Link href="#" className="page-numbers">
                        <i className="fal fa-long-arrow-left" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        01
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        02
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        ..
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        10
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        11
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="page-numbers">
                        <i className="fal fa-long-arrow-right" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Sidebar */}
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </FoodKingLayout>
  );
};

export default page;
