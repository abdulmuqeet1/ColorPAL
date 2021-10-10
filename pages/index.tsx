import type { NextPage } from "next";
import Link from "next/link";
import style from "../styles/Home.module.scss";
import { motion } from "framer-motion";

const Home: NextPage = (props: any) => {
  return (
    <div className={style.mainpagecontainer}>
      <div className={style.fronttext}>
        <h1>COLORPAL</h1>
        <h4>color library app for designer</h4>
        <br />
        <div className="mainpagelinks">
          <Link href="/palletes" passHref>
            <p> Palletes </p>
          </Link>
          <p>
            <span>-</span>
          </p>
          <Link href="/library" passHref>
            <p> Color Library </p>
          </Link>
        </div>
      </div>
      <div className={style.threedmodel}></div>
    </div>
  );
};

export default Home;
