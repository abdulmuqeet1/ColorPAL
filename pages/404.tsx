import type { NextPage } from "next";
import Link from "next/link";
import style from "../styles/restpage.module.scss";

const Page404: NextPage = () => {
  return (
    <div className={style.errorpage}>
      <p>
        Error finding your page
        <br />
        <strong>
          <Link href="/">Go To Home</Link>
        </strong>
      </p>
    </div>
  );
};

export default Page404;
