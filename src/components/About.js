import "../styles/about.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import headshot from "../images/fillerPortrait.jpg";

const About = () => {
  const wrapper = useRef();
  const { scrollYProgress } = useScroll({
    target: wrapper,
  });
  console.log("hhh", scrollYProgress);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5 }}
      className="about"
      ref={wrapper}
    >
      <motion.div className="about__scrollWrapper" style={{ x }}>
        <div className="about__scrollWrapper__vp1">
          <div className="about__scrollWrapper__vp1__imageCont">
            <img src={headshot} alt="profile image" />
          </div>
          <div className="about__scrollWrapper__vp1__quoteCont">
            <p>add some inspirational quote here</p>
            <p>- whoever the author is</p>
          </div>
        </div>
        <div className="about__scrollWrapper__vp2"></div>
        <div className="about__scrollWrapper__vp3"></div>
      </motion.div>
    </motion.div>
  );
};

export default About;
