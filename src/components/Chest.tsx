// File: src/components/Chest.tsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Chest() {
  const [open, setOpen] = useState(false);

  // Trigger chest open after the page loads
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000); // Chest opens after 2 seconds
  }, []);

  return (
    <motion.div
      className="chest"
      animate={{ scaleY: open ? 1 : 0 }}  // Chest opens vertically
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "#804000",
        borderRadius: "8px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Card flipping effect inside the chest */}
      <motion.div
        className="card"
        animate={{ rotateY: open ? 0 : 180 }} // Card spins when the chest opens
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          width: "200px",
          height: "300px",
          backgroundColor: "#3b3b3b",
          borderRadius: "8px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {/* Front of the card (your name and photo) */}
        <div className="card-front" style={{ padding: "10px" }}>
          <h3 style={{ color: "white", textAlign: "center" }}>Aryan Raj Joshi</h3>
          <img
            src="your-photo-url.jpg"
            alt="Your photo"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "block",
              margin: "10px auto",
            }}
          />
        </div>

        {/* Back of the card (XP, stats, skills) */}
        <div
          className="card-back"
          style={{
            display: open ? "block" : "none",  // Show the back when the card spins
            padding: "10px",
            color: "white",
            backgroundColor: "#222",
            textAlign: "center",
          }}
        >
          <p>XP: 1200</p>
          <p>Level: 6</p>
          <p>Skills: Swift, C++, JS, React</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
