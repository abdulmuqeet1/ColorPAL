import type { NextPage } from "next";
import style from "../styles/Home.module.scss";

const Home: NextPage = (props: any) => {
  return (
    <div className={style.maincontainer}>
      <h2>Main Page</h2>
      <p>pallete page </p>
      <p>color library page</p>
      {/* <p>{props.user}</p> */}
    </div>
  );
};

export default Home;
