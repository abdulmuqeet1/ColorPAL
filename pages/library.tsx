import type { NextPage } from "next";
import { useState } from "react";
import style from "../styles/restpage.module.scss";
import styled from "styled-components";
// import useInView from "react-cool-inview";
// compoenets
import SettingUI from "../components/settingui";
import InfiniteScroll from "react-infinite-scroll-component";
const library_uri =
  process.env.COLORPAL_API_URL + "/colorsmini" ||
  "http://127.0.0.1:8000/colors";

function hexToRgbA(hex: any, a: Number = 0.9) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      a +
      ")"
    );
  }
  throw new Error("Bad Hex");
}

const ColorBox = styled.div`
  position: relative;
  width: 75rem;
  min-width: 10rem;
  height: 60px;
  display: flex;
  flex-direction: row;
  color: black;
  margin: 2rem 0;
  background-color: #fff;
  border-radius: 6px;

  .maincol {
    width: 80%;
    height: inherit;
    background-color: ${(props) => props.color};
    border-radius: 5px 0 0 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .maincol p {
    margin-left: 1rem;
  }
  .shade0 {
    width: 80px;
    height: inherit;
    background-color: ${(props) => hexToRgbA(props.color, 0.9)};
  }
  .shade1 {
    width: 80px;
    height: inherit;
    background-color: ${(props) => hexToRgbA(props.color, 0.8)};
  }
  .shade2 {
    width: 80px;
    height: inherit;
    background-color: ${(props) => hexToRgbA(props.color, 0.7)};
  }
  .shade3 {
    width: 80px;
    height: inherit;
    background-color: ${(props) => hexToRgbA(props.color, 0.6)};
  }
  .shade4 {
    width: 80px;
    height: inherit;
    background-color: ${(props) => hexToRgbA(props.color, 0.5)};
  }
  .shade5 {
    width: 80px;
    height: inherit;
    background-color: ${(props) => hexToRgbA(props.color, 0.4)};
  }
  .shade6 {
    width: 80px;
    height: inherit;
    background-color: ${(props) => hexToRgbA(props.color, 0.3)};
  }
  .shade7 {
    width: 80px;
    height: inherit;
    background-color: ${(props) => hexToRgbA(props.color, 0.2)};
    border-radius: 0 4px 4px 0;
  }
`;

const Library: NextPage = ({ data }: any) => {
  const [maindata, setMaindata] = useState(data);
  const [colors, setColors] = useState(maindata.slice(0, 100));
  const [colhex, setColhex] = useState("#111111");
  // const [colrgb, setColrgb] = useState([17, 17, 17]);

  const setcolorhandler = (color: any, [r, g, b]: any) => {
    setColhex(color);
    // setColrgb([r, g, b]);
  };

  const getmorecolors = async () => {
    const newcolors = maindata.slice(colors.length, colors.length + 50);
    setColors((colors: any) => [...colors, ...newcolors]);
  };

  return (
    <>
      <div className={style.libpagemaincontainer}>
        <div>
          <SettingUI colhex={colhex} />
        </div>

        <div className={style.colorlibrarylist}>
          <h2>Library Page</h2>

          <div className="colorlibrary">
            <InfiniteScroll
              dataLength={colors.length}
              next={getmorecolors}
              hasMore={true}
              loader={<h3>That,s All</h3>}
              endMessage={<h4>Nothing more to show</h4>}
            >
              {colors.map((c: any, key: any) => {
                return (
                  <div key={key}>
                    <ColorBox color={c.hex}>
                      <div
                        className="maincol"
                        onClick={() =>
                          setcolorhandler(c.hex, [
                            parseInt(c.rgb.r),
                            parseInt(c.rgb.g),
                            parseInt(c.rgb.b),
                          ])
                        }
                      >
                        <p>{c.name}</p>
                      </div>
                      <div className="shade0"></div>
                      <div className="shade1"></div>
                      <div className="shade2"></div>
                      <div className="shade3"></div>
                      <div className="shade4"></div>
                      <div className="shade5"></div>
                      <div className="shade6"></div>
                      <div className="shade7"></div>
                    </ColorBox>
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(library_uri);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default Library;
