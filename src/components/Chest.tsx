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
        position: "absolute", // Ensure the chest is positioned absolutely
        top: "10%", // Adjust this to place it above your name (can tweak this)
        left: "50%", // Center the chest horizontally
        transform: "translateX(-50%)", // Center it perfectly
        zIndex: 1000, // Ensure it's above other sections
        cursor: "pointer", // Change cursor to indicate it's clickable
      }}
      onClick={handleChestClick}
    >
      <img
        src="/images/chest.png" // Path to your chest image
        alt="Chest"
        style={{
          width: "250px", // Adjust size to fit your design
          height: "250px", // Adjust size to fit your design
        }}
      />
    </motion.div>
  );
};

export default Chest;
