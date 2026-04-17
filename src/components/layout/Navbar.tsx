"use client";

import Image from "next/image";
import { CSSProperties } from "react";

const NavLogo = () => (
  <Image
  alt=""
  src='/images/navlogo.png'
  width={30}
  height={20}/>
);

const menuBar: CSSProperties = {
  display: "block", width: 22, height: 2,
  background: "#fff", borderRadius: 2,
};

const Navbar = () => {
  return (
    <nav style={{
        // --- Fixed Positioning ---
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        
        // --- Layout ---
        display: "flex", 
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 108px", 
        background: "transparent",
        boxSizing: "border-box",

        // --- Technical Stability (Lenis Fix) ---
        // This ensures the fixed nav doesn't "vibrate" during smooth scroll
        transform: "translate3d(0, 0, 0)", 
        willChange: "transform",
      }}>
        
        <NavLogo />

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <button style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "#3b6ef5", color: "#fff", border: "none",
            borderRadius: 100, padding: "10px 20px", fontSize: 20,
            fontWeight: 500, cursor: "pointer", letterSpacing: "0.01em",
            fontFamily: "'DM Sans', sans-serif",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Start a Project
            <Image
            alt=""
            src='/images/clock.png'
            width={20}
            height={20}
            />
          </button>

          <button style={{
            width: 48, height: 48, background: "#f5a623", border: "none",
            borderRadius: "50%", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer",
            transition: "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }} 
          onMouseEnter={(e) => (e.currentTarget.style.transform = "rotate(90deg)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
          aria-label="Menu">
            <span style={menuBar} />
            <span style={menuBar} />
            <span style={menuBar} />
          </button>
        </div>
      </nav>
  )
}

export default Navbar;