import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      About
    </motion.div>
  );
};

export default About;
