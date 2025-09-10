"use client";
import React from 'react';


export const Down = () => {
    const handleMouseOver = (e) => {
        const target = e.currentTarget;
        target.style.transform = "translateY(-3px)";
        target.style.boxShadow = "0 15px 35px rgba(66,156,90,0.4)";
    };

    const handleMouseOut = (e) => {
        const target = e.currentTarget;
        target.style.transform = "translateY(0)";
        target.style.boxShadow = "0 10px 25px rgba(66,156,90,0.3)";
    };

    const handleSocialMouseOver = (e) => {
        const target = e.currentTarget;
        target.style.background = "rgba(255,255,255,0.2)";
        target.style.transform = "scale(1.1)";
    };

    const handleSocialMouseOut = (e) => {
        const target = e.currentTarget;
        target.style.background = "rgba(255,255,255,0.1)";
        target.style.transform = "scale(1)";
    };

    const containerStyle = {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: "relative",
        overflow: "hidden",
    };

    const floatingElement1Style = {
        position: "absolute",
        top: "10%",
        left: "10%",
        width: "100px",
        height: "100px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite",
    };

    const floatingElement2Style = {
        position: "absolute",
        top: "70%",
        right: "15%",
        width: "150px",
        height: "150px",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "50%",
        animation: "float 8s ease-in-out infinite reverse",
    };

    const floatingElement3Style = {
        position: "absolute",
        bottom: "20%",
        left: "5%",
        width: "80px",
        height: "80px",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "50%",
        animation: "float 7s ease-in-out infinite",
    };

    const mainContentStyle = {
        textAlign: "center",
        color: "white",
        padding: "40px",
        maxWidth: "600px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "20px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        animation: "slideUp 1s ease-out",
    };

    const logoStyle = {
        width: "80px",
        height: "80px",
        background: "linear-gradient(45deg, #429c5a, #66d481)",
        borderRadius: "50%",
        margin: "0 auto 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "40px",
        boxShadow: "0 10px 30px rgba(66,156,90,0.3)",
        animation: "pulse 2s infinite",
    };

    const titleStyle = {
        fontSize: "2.5rem",
        marginBottom: "20px",
        fontWeight: "700",
        background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    };

    const descriptionStyle = {
        fontSize: "1.2rem",
        marginBottom: "30px",
        opacity: "0.9",
        lineHeight: "1.6",
    };

    const progressBarContainerStyle = {
        width: "100%",
        height: "8px",
        background: "rgba(255,255,255,0.2)",
        borderRadius: "4px",
        marginBottom: "30px",
        overflow: "hidden",
    };

    const progressBarStyle = {
        width: "75%",
        height: "100%",
        background: "linear-gradient(90deg, #429c5a, #66d481)",
        borderRadius: "4px",
        animation: "progress 3s ease-in-out infinite",
    };

    const statusStyle = {
        fontSize: "1rem",
        marginBottom: "30px",
        opacity: "0.8",
    };

    const contactButtonStyle = {
        display: "inline-block",
        padding: "15px 30px",
        background: "linear-gradient(45deg, #429c5a, #66d481)",
        color: "white",
        textDecoration: "none",
        borderRadius: "30px",
        fontWeight: "600",
        fontSize: "1rem",
        boxShadow: "0 10px 25px rgba(66,156,90,0.3)",
        transition: "all 0.3s ease",
        border: "none",
    };

    const socialLinksStyle = {
        marginTop: "40px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
    };

    const socialLinkStyle = {
        width: "50px",
        height: "50px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textDecoration: "none",
        fontSize: "20px",
        transition: "all 0.3s ease",
        border: "1px solid rgba(255,255,255,0.2)",
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                    
                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(50px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    @keyframes pulse {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.05); }
                    }
                    
                    @keyframes progress {
                        0% { width: 60%; }
                        50% { width: 85%; }
                        100% { width: 75%; }
                    }
                `
            }} />
            <div style={containerStyle}>
                {/* Animated Background Elements */}
                <div style={floatingElement1Style}></div>
                <div style={floatingElement2Style}></div>
                <div style={floatingElement3Style}></div>

                {/* Main Content */}
                <div style={mainContentStyle}>
                    {/* Logo/Icon */}
       

                    <h1 style={titleStyle}>
                        EatFit is Upgrading
                    </h1>

                    <p style={descriptionStyle}>
                        We're cooking up something amazing! Our healthy kitchen is
                        undergoing exciting improvements to serve you better.
                    </p>

                    {/* Progress Bar */}
                    <div style={progressBarContainerStyle}>
                        <div style={progressBarStyle}></div>
                    </div>

                    <p style={statusStyle}>
                        Expected completion: Soon
                    </p>


                </div>
            </div>
        </>
    );
};