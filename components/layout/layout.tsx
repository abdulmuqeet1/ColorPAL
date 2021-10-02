import React, { ReactNode, useState, useEffect } from "react";
import Head from "./head";
import NextHead from "next/head";
import Header from "./header";
import Footer from "./footer";
import style from "../../styles/Home.module.scss";

import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineShareAlt,
  AiOutlineSearch,
  AiOutlineHeart,
  AiFillSetting,
} from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  if (typeof window !== "undefined") {
    // darkmodeval = window.localStroage.getItem("darkmode");
  }

  const [opennavbtn, setOpennavbtn] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const handlenavbarbtn = () => {
    console.log("click");
    setOpennavbtn(!opennavbtn);
  };

  const handledarkmodebtn = () => {
    setDarkmode(!darkmode);

    if (darkmode) {
      window.localStorage.setItem("darkmode", "false");
    } else {
      window.localStorage.setItem("darkmode", "true");
    }
    // console.log("dark mode: ", darkmode);
  };

  useEffect(() => {
    if (window.localStorage.getItem("darkmode")) {
      let darkmodeval = window.localStorage.getItem("darkmode");
      if (darkmodeval == "true") {
        setDarkmode(true);
      } else {
        setDarkmode(false);
      }
    }
  }, [darkmode]);

  return (
    <>
      <Head />
      <div className={darkmode ? style.darkmainbody : style.lightmainbody}>
        <div className={style.maincontainer}>
          <header className={style.header}>
            <nav className={style.navbar}>
              <Link href="/" passHref>
                {/* <Image
                  src="/images/logo.png"
                  width={100}
                  height={75}
                  alt="logo"
                  loading="lazy"
                /> */}
                LOGO
              </Link>
              <ul className={style.mainlinks}>
                <Link href="/palletes" passHref>
                  <li>Color Pallete</li>
                </Link>

                <Link href="/gradient" passHref>
                  <li>Gradient Color</li>
                </Link>

                <Link href="/library" passHref>
                  <li>Color Library</li>
                </Link>

                <Link href="/about" passHref>
                  <li>About</li>
                </Link>
              </ul>
            </nav>

            <div className={style.settingslinks}>
              <ul>
                <Link href="/collections" passHref>
                  <li>
                    <AiOutlineHeart />
                  </li>
                </Link>

                <li>
                  <button
                    onClick={() => handledarkmodebtn()}
                    className={style.darkmodebtn}
                  >
                    {darkmode ? <BsSun /> : <BsMoon />}
                  </button>
                </li>

                {/* <li>
                  <AiOutlineSearch />
                </li> */}
                <Link href="/" passHref>
                  <li>
                    <AiFillSetting />
                  </li>
                </Link>
              </ul>
            </div>

            <button className={style.navbtn} onClick={() => handlenavbarbtn()}>
              {opennavbtn ? <ImCross /> : <GiHamburgerMenu />}
            </button>

            <div
              className={
                opennavbtn ? style.activemobilelinks : style.mobilelinks
              }
            >
              <nav className="mainlinks">
                <ul>
                  <Link href="/palletes" passHref>
                    <li>Color Pallete</li>
                  </Link>

                  <Link href="/gradient" passHref>
                    <li>Gradient Color</li>
                  </Link>

                  <Link href="/library" passHref>
                    <li>library</li>
                  </Link>

                  {/* <Link href="/" passHref>
              <li>Collection</li>
            </Link> */}

                  <Link href="/about" passHref>
                    <li>ABOUT</li>
                  </Link>
                </ul>
                <div className="mobilenavsocial">
                  <Link href="/collections" passHref>
                    <li>
                      <AiOutlineHeart />
                    </li>
                  </Link>

                  <li>
                    <button
                      onClick={() => handledarkmodebtn()}
                      className={style.darkmodebtn}
                    >
                      {darkmode ? <BsSun /> : <BsMoon />}
                    </button>
                  </li>

                  {/* <li>
                    <AiOutlineSearch />
                  </li> */}
                  <Link href="/" passHref>
                    <li>
                      <AiFillSetting />
                    </li>
                  </Link>
                </div>
              </nav>
            </div>
          </header>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
