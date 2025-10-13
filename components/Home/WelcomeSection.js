import { motion } from "framer-motion";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <motion.section
      className={styles.welcomeSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className={styles.heading}>
          <motion.span
            className={styles.subHeading}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            EatFit Rajagiriya - Colombo's #1 Healthy Kitchen
          </motion.span>
        </div>

        <motion.h1
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Premium Healthy Food Delivery in Colombo
          <div className={styles.underline} />
        </motion.h1>

        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Organic Weight Loss & Weight Gain Meals | Rajagiriya to Your Doorstep
        </motion.h2>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          At EatFit Rajagiriya, we masterfully blend premium nutrition with
          culinary artistry to create extraordinary healthy meals that energize
          your body and support your fitness goals. Serving Colombo with organic
          ingredients, expert nutrition, and fast delivery since 2025.
        </motion.p>

        <motion.div
          className={styles.benefitsGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div
            className={styles.benefitItem}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.benefitTitle}>✅ Organic Ingredients</h3>
            <p className={styles.benefitText}>
              Fresh, locally-sourced organic produce
            </p>
          </motion.div>

          <motion.div
            className={styles.benefitItem}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.benefitTitle}>⚡ Fast Delivery</h3>
            <p className={styles.benefitText}>
              45-minute delivery across Colombo
            </p>
          </motion.div>

          <motion.div
            className={styles.benefitItem}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.benefitTitle}>🎯 Goal-Specific</h3>
            <p className={styles.benefitText}>
              Weight loss & weight gain programs
            </p>
          </motion.div>

          <motion.div
            className={styles.benefitItem}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className={styles.benefitTitle}>👨‍⚕️ Expert Nutrition</h3>
            <p className={styles.benefitText}>
              Designed by certified nutritionists
            </p>
          </motion.div>
        </motion.div>

        <motion.button
          className={styles.exploreButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: "smooth",
            })
          }
          aria-label="See our menu"
        >
          Explore Our Menu
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default WelcomeSection;
