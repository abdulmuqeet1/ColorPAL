import { useState } from "react";
import type { NextPage } from "next";
import style from "../styles/restpage.module.scss";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
const palette_url =
  process.env.COLORPAL_PALLETE_URL || "http://127.0.0.1:8000/palletes";

// const PalletWrapper = styled.div`
//   width: 2rem;
//   height: 5rem;
//   display: grid;
//   grid-template-column: 10fr 1fr;
//   .pallete {
//     background-color: ${(props) => props.color};
//     display: flex:
//     flex-direction: row !important;
//     align-items: center;
//     justify-content: center;
//   }
//   .data {
//     background-color: pink;
//   }
// `;

const PaletteWrapper = styled.div`
  min-width: 1rem;
  width: 25%;
  height: 10rem;
  background-color: ${(props) => props.color};
  transition: 100ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 14px;
    display: none;
    cursor: pointer;
  }
  &:hover {
    transform: scaleX(1.5);
    p {
      display: block;
      transform: scaleX(0.8);
    }
  }
`;
const HeartWrapper = styled.div`
  background-color: red;
  color: red;
`;

const Palettes: NextPage = ({ palettesdata }: any) => {
  const [saved, setSaved] = useState(false);
  const savehandler = () => {
    setSaved(!saved);
  };
  const copyhexhandler = (hex: any) => {
    navigator.clipboard.writeText(hex);
  };
  return (
    <div className={style.palletemaincontainer}>
      <h2>color Palletes Page</h2>
      <div className={style.palletescontainer}>
        {palettesdata.map((pal: any, key: any) => {
          return (
            <div className={style.palletediv} key={key}>
              <div className={style.pallete}>
                {pal.colorpallete.map((c: any, k: any) => {
                  return (
                    <PaletteWrapper color={c.colval} key={k}>
                      <p
                        onClick={() => {
                          copyhexhandler(c.colval);
                        }}
                      >
                        {c.colval}
                      </p>
                    </PaletteWrapper>
                  );
                })}
              </div>
              <div className={style.palletedata}>
                <div>
                  <button onClick={() => savehandler()}>
                    {saved ? <AiFillHeart /> : <AiOutlineHeart />}
                  </button>
                  {/* {pal.saves > 0 && <p>{pal.saves}</p>} */}
                  {pal.saves > 0 ? <p>{pal.saves}</p> : <p>98828</p>}
                </div>
                <div className="dots">
                  <span>
                    <BsThreeDots />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://127.0.0.1:8000/palletes");
    // console.log(res);
    const palettesdata = await res.json();

    if (!palettesdata) {
      return {
        notFound: true,
      };
    }

    return {
      props: { palettesdata },
    };
  } catch (e) {
    console.log("error fetching data ", e);

    return {
      props: {},
    };
  }
};

export default Palettes;
