// File: src/components/Chest.tsx
import { useState } from "react";
import { motion } from "framer-motion";

const Chest = () => {
  const [open, setOpen] = useState(false);

  const handleChestClick = () => {
    setOpen(true); // Open the chest when clicked
  };

  return (
    <motion.div
      className="chest"
      style={{
        position: "absolute", // Make the chest position absolute
        top: "-5%", // Adjust vertical position to be closer to your name
        left: "50%", // Center horizontally
        transform: "translateX(-50%)", // Adjust horizontally
        cursor: "pointer",
        zIndex: 1000, // Ensure it stays on top
        width: "500px", // Fixed size for the chest
        height: "500px", // Fixed height for the chest
      }}
      onClick={handleChestClick}
    >
     <motion.div
        className="card"
        animate={{ rotateY: open ? 180 : 0 }} // Rotate the chest to open
        transition={{ duration: 3.5, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "100%",
          background: "url('/images/chest.png') no-repeat center center",
          backgroundSize: "cover",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
          position: "absolute",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front content */}
        <div
          className="card-front"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.7)", // Darken the front to make text readable
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "1.5rem",
            borderRadius: "10px",
            backfaceVisibility: "hidden",
          }}
        >
          <h2>Your Name</h2>
        </div>

        {/* Back content */}
        <div
          className="card-back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "#222",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "1rem",
            borderRadius: "10px",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            opacity: open ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <div>
            <p>XP: 1200</p>
            <p>Level: 6</p>
            <p>Skills: Swift, React, C++, and more...</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Chest;