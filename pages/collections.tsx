import type { NextPage } from "next";
import style from "../styles/Home.module.scss";

const Collections: NextPage = (props: any) => {
  if (props.user) {
    return (
      <div className={style.maincontainer}>
        <p>user logged in</p>
        <h2>Collections</h2>
      </div>
    );
  } else {
    return (
      <div className={style.maincontainer}>
        <p>please sign in</p>
      </div>
    );
  }
};

export default Collections;
