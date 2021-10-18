import type { NextPage } from "next";
import Image from "next/image";
import style from "../styles/restpage.module.scss";
import { motion } from "framer-motion";

const rainbowvariant = {
  animation: {
    y: [20, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 6,
        ease: "easeInOut",
      },
    },
  },
};

const About: NextPage = (props: any) => {
  return (
    <div className={style.aboutmaincontainer}>
      <div className={style.aboutcontent}>
        <h1>About colorpal</h1>
        <p>
          Color Hunt is an open collection of beautiful color palettes and color
          library with alot of useful features, created by abdul muqeet.
          ColorPal started as a personal small project built to share trendy
          color combinations between a group of designer friends and developers.
          The collection scaled up and now being used daily as a handy resources
          by people all over the world. Color Hunt was created with the goal of
          celebrating the beauty of colors, and to serve as a go-to resource for
          color inspiration.
        </p>
      </div>
      <motion.div
        className={style.aboutimage}
        variants={rainbowvariant}
        animate="animation"
        drag
      ></motion.div>
    </div>
  );
};

export default About;
