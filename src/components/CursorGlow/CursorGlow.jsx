import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[5]
        hidden
        h-[420px]
        w-[420px]
        rounded-full
        md:block
      "
      animate={{
        x: position.x - 210,
        y: position.y - 210,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 0.4,
      }}
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(99,102,241,0.10) 30%, rgba(139,92,246,0.05) 50%, transparent 72%)",
        filter: "blur(10px)",
      }}
    />
  );
}

export default CursorGlow;