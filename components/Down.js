"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Clock,
  Coffee,
  Utensils,
  ChefHat,
  Settings,
  RefreshCw,
  Heart,
  Mail,
  Phone,
  MessageCircle,
  Zap,
  Star,
  Shield,
} from "lucide-react";

export const MaintenancePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate progress
    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 75 : prev + 1));
    }, 2000);

    return () => {
      clearInterval(timer);
      clearInterval(progressTimer);
    };
  }, []);

  const [progress, setProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      rotate: [-8, 8, -8],
      scale: [0.9, 1.1, 0.9],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.15, 1],
      boxShadow: [
        "0 0 0 0 rgba(255, 165, 0, 0.7)",
        "0 0 0 20px rgba(255, 165, 0, 0)",
        "0 0 0 0 rgba(255, 165, 0, 0)",
      ],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ff9a56 0%, #ff6b35 25%, #f7931e 50%, #ff9a56 75%, #ffa726 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Enhanced Background Elements */}
      <div
        className="position-absolute"
        style={{ top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden" }}
      >
        {/* Gradient Overlay */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            background:
              "linear-gradient(45deg, rgba(255,154,86,0.1) 0%, rgba(255,107,53,0.2) 50%, rgba(255,167,38,0.1) 100%)",
            zIndex: 1,
          }}
        />

        {/* Floating Icons */}
        <motion.div
          className="position-absolute"
          style={{
            top: "10%",
            left: "8%",
            color: "rgba(255,255,255,0.3)",
            zIndex: 2,
          }}
          variants={floatingVariants}
          animate="animate"
        >
          <Utensils size={70} />
        </motion.div>
        <motion.div
          className="position-absolute"
          style={{
            top: "20%",
            right: "12%",
            color: "rgba(255,255,255,0.25)",
            zIndex: 2,
          }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <ChefHat size={90} />
        </motion.div>
        <motion.div
          className="position-absolute"
          style={{
            bottom: "25%",
            left: "15%",
            color: "rgba(255,255,255,0.35)",
            zIndex: 2,
          }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Coffee size={60} />
        </motion.div>
        <motion.div
          className="position-absolute"
          style={{
            bottom: "15%",
            right: "10%",
            color: "rgba(255,255,255,0.3)",
            zIndex: 2,
          }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Settings size={80} />
        </motion.div>
        <motion.div
          className="position-absolute"
          style={{
            top: "60%",
            left: "5%",
            color: "rgba(255,255,255,0.2)",
            zIndex: 2,
          }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 3 }}
        >
          <Star size={50} />
        </motion.div>
        <motion.div
          className="position-absolute"
          style={{
            top: "70%",
            right: "5%",
            color: "rgba(255,255,255,0.25)",
            zIndex: 2,
          }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        >
          <Zap size={65} />
        </motion.div>
      </div>

      <div
        className="container-fluid position-relative"
        style={{ zIndex: 10, maxWidth: "1200px" }}
      >
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Enhanced Logo/Brand Area */}
          <motion.div className="mb-5" variants={itemVariants}>
            <motion.div
              className="d-inline-flex align-items-center justify-content-center mb-4 position-relative"
              style={{
                width: "150px",
                height: "150px",
                background:
                  "linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff9a56 100%)",
                borderRadius: "50%",
                boxShadow: "0 20px 60px rgba(255,107,53,0.4)",
              }}
              variants={pulseVariants}
              animate="animate"
            >
              <Wrench className="text-white" size={80} />
              <motion.div
                className="position-absolute"
                style={{
                  top: "-10px",
                  right: "-10px",
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(45deg, #4caf50, #66bb6a)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Shield size={20} className="text-white" />
              </motion.div>
            </motion.div>
            <motion.h1
              className="fw-bold mb-0"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                background:
                  "linear-gradient(45deg, #fff 0%, #ffe0b2 50%, #fff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 4px 20px rgba(255,255,255,0.3)",
              }}
              variants={itemVariants}
            >
              EatFit
            </motion.h1>
            <motion.p
              className="h4 text-white mt-2 opacity-75"
              variants={itemVariants}
            >
              Healthy Kitchen Management System
            </motion.p>
          </motion.div>

          {/* Enhanced Main Message */}
          <motion.div className="mb-5" variants={itemVariants}>
            <h2
              className="fw-bold text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
            >
              🍳 We're Cooking Up Something Extraordinary!
            </h2>
            <p
              className="text-white-50 mx-auto"
              style={{
                fontSize: "1.3rem",
                maxWidth: "700px",
                lineHeight: "1.7",
                fontWeight: "300",
              }}
            >
              Our digital kitchen is getting a complete makeover! We're adding
              fresh ingredients, upgrading our recipes, and preparing a feast of
              new features that will revolutionize your healthy eating
              experience.
            </p>
          </motion.div>

          {/* Enhanced Progress Bar */}
          <motion.div className="mb-5" variants={itemVariants}>
            <div
              className="mx-auto p-4 rounded-4"
              style={{
                maxWidth: "500px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <h5 className="text-white mb-3 fw-semibold">
                🔄 Upgrade Progress
              </h5>
              <div
                className="bg-white bg-opacity-25 rounded-pill mb-3"
                style={{ height: "12px" }}
              >
                <motion.div
                  className="rounded-pill h-100"
                  style={{
                    background:
                      "linear-gradient(90deg, #4caf50 0%, #81c784 50%, #66bb6a 100%)",
                    width: `${progress}%`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <p className="text-white mb-0 fw-medium">{progress}% Complete</p>
            </div>
          </motion.div>

          {/* Enhanced Status Cards */}
          <motion.div
            className="row g-4 mb-5 justify-content-center"
            variants={itemVariants}
          >
            {[
              {
                icon: RefreshCw,
                title: "System Optimization",
                description:
                  "Enhancing performance and adding new capabilities",
                color: "info",
                delay: 0,
              },
              {
                icon: Clock,
                title: "Almost Ready",
                description: "Final touches being applied to perfection",
                color: "warning",
                delay: 0.1,
              },
              {
                icon: Heart,
                title: "Thank You",
                description: "Your patience helps us serve you better",
                color: "success",
                delay: 0.2,
              },
            ].map((card, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <motion.div
                  className="h-100 p-4 rounded-4 position-relative"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                  }}
                  variants={cardHoverVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.6 }}
                >
                  <motion.div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      background:
                        hoveredCard === index
                          ? "linear-gradient(45deg, #fff 0%, #f8f9fa 100%)"
                          : "rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                    }}
                    animate={
                      hoveredCard === index ? { rotate: 360 } : { rotate: 0 }
                    }
                    transition={{ duration: 0.6 }}
                  >
                    <card.icon
                      size={28}
                      className={
                        hoveredCard === index ? "text-primary" : "text-white"
                      }
                    />
                  </motion.div>
                  <h5 className="text-white fw-semibold mb-2">{card.title}</h5>
                  <p className="text-white-50 mb-0 small">{card.description}</p>

                  {hoveredCard === index && (
                    <motion.div
                      className="position-absolute"
                      style={{
                        top: "10px",
                        right: "10px",
                        width: "8px",
                        height: "8px",
                        background: "#4caf50",
                        borderRadius: "50%",
                      }}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    />
                  )}
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Enhanced Current Time Display */}
          <motion.div className="mb-5" variants={itemVariants}>
            <div
              className="d-inline-block p-4 rounded-4"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <p className="text-white-50 mb-2 small fw-medium">
                🕐 Current Time
              </p>
              <motion.p
                className="h2 text-white fw-bold mb-2"
                style={{ fontFamily: "monospace", letterSpacing: "2px" }}
                key={currentTime.toLocaleTimeString()}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {currentTime.toLocaleTimeString()}
              </motion.p>
              <p className="text-white-50 mb-0 small">
                {currentTime.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </motion.div>

          {/* Enhanced Loading Animation */}
          <motion.div
            className="d-flex justify-content-center align-items-center mb-5"
            variants={itemVariants}
          >
            <div className="d-flex me-3">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  style={{
                    width: "12px",
                    height: "12px",
                    background: "linear-gradient(45deg, #fff 0%, #ffe0b2 100%)",
                    borderRadius: "50%",
                    margin: "0 3px",
                  }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </div>
            <span className="text-white fw-medium">
              ✨ Crafting your perfect experience...
            </span>
          </motion.div>

          {/* Enhanced Contact Section */}
          <motion.div className="mb-4" variants={itemVariants}>
            <h5 className="text-white mb-4 fw-semibold">
              Need Immediate Assistance?
            </h5>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  href: "mailto:support@eatfit.lk",
                  color: "#4285f4",
                },
                {
                  icon: Phone,
                  label: "Call",
                  href: "tel:+94703646646",
                  color: "#34a853",
                },
                {
                  icon: MessageCircle,
                  label: "Chat",
                  href: "#",
                  color: "#ea4335",
                },
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="btn btn-light btn-lg d-flex align-items-center text-decoration-none"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    color: "white",
                    borderRadius: "50px",
                    padding: "12px 24px",
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.25)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <contact.icon size={20} className="me-2" />
                  {contact.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Footer */}
          <motion.div className="text-center" variants={itemVariants}>
            <p className="text-white-50 small mb-0">
              © 2025 EatFit POS System • Crafted with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="d-inline text-danger" size={16} />
              </motion.span>{" "}
              by <span className="text-white fw-semibold">DesignNetrix</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MaintenancePage;
