import React, { useState, useEffect } from "react";
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
import style from "../../styles/Home.module.scss";
// import { motion, AnimatePresence } from "framer-motion";

// const mobilenavVariants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "100%" },
// };

const Header = () => {
  const [opennavbtn, setOpennavbtn] = useState(false);
  const [darkmode, setDarkmode] = useState(false);

  const handlenavbarbtn = () => {
    console.log("click");
    setOpennavbtn(!opennavbtn);
  };

  const handledarkmodebtn = () => {
    console.log("dark mode: ", darkmode);
    setDarkmode(!darkmode);
  };

  useEffect(() => {
    console.log("change dark mode");
  }, [darkmode]);

  return (
    <>
      <header className={style.header}>
        <nav className={style.navbar}>
          <Link href="/" passHref>
            <Image
              src="/images/logo.png"
              width={100}
              height={75}
              alt="logo"
              loading="lazy"
            />
          </Link>
          <ul className={style.mainlinks}>
            <Link href="/" passHref>
              <li>Color Pallete</li>
            </Link>

            <Link href="/" passHref>
              <li>Gradient Color</li>
            </Link>

            <Link href="/" passHref>
              <li>Explore</li>
            </Link>

            {/* <Link href="/" passHref>
              <li>Collection</li>
            </Link> */}

            <Link href="/" passHref>
              <li>ABOUT</li>
            </Link>
          </ul>
        </nav>

        <div className={style.settingslinks}>
          <ul>
            <li>
              <AiOutlineHeart />
            </li>

            <li>
              <button onClick={() => handledarkmodebtn()}>
                {darkmode ? <BsSun /> : <BsMoon />}
              </button>
            </li>

            <li>
              <AiOutlineSearch />
            </li>

            <li>
              <AiFillSetting />
            </li>
          </ul>
        </div>

        <button className={style.navbtn} onClick={() => handlenavbarbtn()}>
          {opennavbtn ? <ImCross /> : <GiHamburgerMenu />}
        </button>

        <div
          className={opennavbtn ? style.activemobilelinks : style.mobilelinks}
        >
          <nav className="mainlinks">
            <ul>
              <Link href="/" passHref>
                <li>Color Pallete</li>
              </Link>

              <Link href="/" passHref>
                <li>Gradient Color</li>
              </Link>

              <Link href="/" passHref>
                <li>Explore</li>
              </Link>

              {/* <Link href="/" passHref>
              <li>Collection</li>
            </Link> */}

              <Link href="/" passHref>
                <li>ABOUT</li>
              </Link>
            </ul>
            <div className="mobilenavsocial">
              <li>
                <AiOutlineShareAlt />
              </li>

              <li>
                <button onClick={() => handledarkmodebtn()}>
                  {darkmode ? <BsSun /> : <BsMoon />}
                </button>
              </li>

              <li>
                <AiOutlineSearch />
              </li>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
