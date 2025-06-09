import "../styles/about.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import headshot from "../images/fillerPortrait.jpg";

const About = () => {
  const wrapper = useRef();
  const { scrollYProgress } = useScroll({
    target: wrapper,
  });

  const x = useTransform(scrollYProgress, [0, 2], ["0%", "-100%"]);
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
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
        <div className="about__scrollWrapper__vp2">
          <div className="about__scrollWrapper__vp2__text">
            <p>
              Back in 3rd grade, my mom got me my very first phone. I remember
              it vividly—it was a blue Samsung flip phone that was basically
              indestructible. (And yes, I thoroughly tested that theory in hopes
              my mom would replace it with something cooler.) I’d sit in my room
              clicking the arrow buttons, navigating the menu just to watch the
              background color change with each selection. That’s when the magic
              hit me. I remember thinking, “Who’s the person that makes this
              happen? I want to be that person.”
            </p>
            <p>
              Fast forward to college:
              <br /> UX/UI was the hot new field, and I felt like I struck gold.
              It was exactly what I wanted to do. I soaked up four years of
              design shenanigans and loved every minute. But I wanted more—I
              wanted to bring my designs to life.
            </p>
            <p>
              Enter: the next chapter.
              <br /> Remember the dark, confusing days of early COVID-19? I was
              part of the Class of 2020 (yep, that special group). The world was
              shutting down, internships were vanishing, and companies were
              scrambling to figure out how to “go remote.” On top of the global
              chaos, I had no clue what my future looked like.
            </p>
            <p>
              Cue existential crisis. <br /> But then—lightbulb moment! I
              thought, “How do I turn this mess into an opportunity?” So I
              enrolled in a coding bootcamp. Initially, it was just to beef up
              my UX/UI skills and stand out once the job market recovered.
            </p>
            <p>
              Plot twist:
              <br /> I actually really liked coding. I started applying to both
              design and dev roles, and the first offer I got was for a
              front-end software engineering position. I took it.
            </p>
            <p>
              Now here’s where we pivot (again—but I promise we’re almost done).
              I stayed at that job for three years and wore a lot of hats. Some
              days I felt more like a project manager than a developer—and
              honestly, I kind of liked it. My role gradually shifted into a
              Technical Project Manager position, giving me the chance to dip my
              toes into design, code, and product strategy.
            </p>
            <p>
              And that brings us to today. Some people might look at my winding
              path and think, “Wow, this girl can’t decide what she wants to
              do.” But I see it differently: I’m a powerhouse, do-it-all,
              awesome possum unicorn who’s always been driven by one thing—a
              genuine passion for building great digital experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
