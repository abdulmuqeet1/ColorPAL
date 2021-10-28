import React from "react";
import style from "../../styles/Home.module.scss";

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <div>
          <div className={style.footerlogobgimg}>
            <h2>COLORPAL</h2>
          </div>
          <p>Color Library App for Developers and Designers</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
