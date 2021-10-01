import type { NextPage } from "next";
import style from "../styles/Home.module.scss";
import { useState, useEffect, useContext } from "react";

const Home: NextPage = () => {
  return (
    <div className={style.maincontainer}>
      <h2>Main Page</h2>
      <p>pallete page </p>
      <p>color library page</p>
    </div>
  );
};

export default Home;
