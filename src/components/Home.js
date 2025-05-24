import "../styles/home.scss";
import { motion, AnimatePresence } from "motion/react";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="home__text">
        <div className="home__text__name">
          <p>Lind</p>
          <p>sey</p>
          <p>pak</p>
        </div>
        <div className="home__text__titles">
          <p>brand designer</p>
          <p>UX/UI designer</p>
          <p>front end software engineer</p>
          <p>product manager</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
