import type { NextPage } from "next";
import { useState, useEffect } from "react";

import emailjs from "emailjs-com";
import Link from "next/link";
import style from "../styles/restpage.module.scss";
import { BsWhatsapp } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { GiHand } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";

const Hire: NextPage = (props: any) => {
  const [mailstatus, setMailstatus] = useState(false);
  const [mailcount, setMailcount] = useState(0);

  const removemsg = () => {
    setTimeout(() => {
      setMailstatus(false);
    }, 5000);
  };

  function sendEmail(e: any) {
    e.preventDefault();

    if (
      e.target[0].value === "" ||
      e.target[1].value === "" ||
      e.target[2].value === ""
    ) {
      return;
    }

    if (mailcount >= 3) {
      return;
    }

    setMailcount(mailcount + 1);
    emailjs
      .sendForm(
        "service_2kq1lvm",
        "template_wiqphyf",
        e.target,
        "user_FHbcqX6JOmsI9MAZPLWvs"
      )
      .then(
        () => {
          setMailstatus(true);
          removemsg();
        }
        // ,
        // (error) => {
        //   console.log(error.text);
        // }
      );
  }
  return (
    <div className={style.hiremaincontainer}>
      <div className={style.hireusinfo}>
        <h1>Contact Us to get our services!</h1>{" "}
        <p>
          check out{" "}
          <Link href="https://abdulmuqeet-portfolio.netlify.app/" passHref>
            <a target="_blank" className={style.portfoliolink}>
              portfolio
            </a>
          </Link>
        </p>
        <p>
          <Link href="mailto:abdulmuqeet521@gmail.com" passHref>
            <div>
              <AiOutlineMail /> abdulmuqeet521@gmail.com
            </div>
          </Link>
        </p>
        <p>
          <BsWhatsapp /> +92 304 9785798
        </p>
      </div>

      <div>
        <h1>
          Say Hi <GiHand />
        </h1>
        <div className={style.contactform}>
          <form action="POST" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="name"
              className={style.forminputfield}
            />{" "}
            <br />
            <input
              type="email"
              name="email"
              placeholder="email"
              className={style.forminputfield}
            />
            <br />
            <input
              type="textarea"
              name="msg"
              placeholder="message"
              className={style.forminputfield}
            />
            <br />
            <br />
            {mailcount < 2 ? (
              <div className={style.formbtnbg}>
                <input type="Submit" className={style.formbtn} />
              </div>
            ) : (
              <input
                type="Submit"
                className={style.formbtndisbaled}
                disabled={true}
              />
            )}
          </form>
          <div className={mailstatus ? style.activemailmsg : style.mailmsg}>
            <span>
              <GrStatusGood />
            </span>
            mail send successfully
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hire;
