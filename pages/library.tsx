import type { NextPage } from "next";
import { useState } from "react";
import style from "../styles/restpage.module.scss";
import styled from "styled-components";
// import useInView from "react-cool-inview";
// compoenets
import SettingUI from "../components/settingui";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";

const ColorBox = styled.div`
  position: relative;
  // max-width: 80rem
  width: 75rem;
  min-width: 10rem;
  height: 60px;
  display: flex;
  flex-direction: row;
  color: black;
  margin: 2rem 0;

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
    background-color: yellow;
  }
  .shade1 {
    width: 80px;
    height: inherit;
    background-color: red;
  }
  .shade2 {
    width: 80px;
    height: inherit;
    background-color: blue;
  }
  .shade3 {
    width: 80px;
    height: inherit;
    background-color: green;
  }
  .shade4 {
    width: 80px;
    height: inherit;
    background-color: pink;
    border-radius: 0 4px 4px 0;
  }
`;

const Library: NextPage = ({ data }: any) => {
  const [maindata, setMaindata] = useState(data);

  const [colors, setColors] = useState(maindata.slice(0, 100));

  const [col, setCol] = useState("#2701A8");
  // const [rgb, setRgb] = useState(conv.hexTorgb(col));
  // const [hsl, setHsl] = useState(conv.hexTohsl(col));
  // console.log("");

  // console.log("hex", col);
  // console.log("hsl", hsl);
  // console.log("rgb", rgb);

  const setcolor = (color: any) => {
    setCol(color);
  };

  const getmorecolors = async () => {
    const newcolors = maindata.slice(colors.length, colors.length + 30);
    setColors((colors: any) => [...colors, ...newcolors]);
  };

  return (
    <>
      <div className={style.libpagemaincontainer}>
        <div>
          <SettingUI color={col} />
        </div>

        <div className={style.colorlibrarylist}>
          <h2>Library Page</h2>

          <div className="colorlibrary">
            <InfiniteScroll
              dataLength={colors.length}
              next={getmorecolors}
              hasMore={true}
              loader={<h3> Loading...</h3>}
              endMessage={<h4>Nothing more to show</h4>}
            >
              {colors.map((c: any, key: any) => {
                return (
                  <div key={key}>
                    <ColorBox color={c.hex}>
                      <div className="maincol" onClick={() => setcolor(c.hex)}>
                        <p>{c.name}</p>
                      </div>
                      <div className="shade0"></div>
                      <div className="shade1"></div>
                      <div className="shade2"></div>
                      <div className="shade3"></div>
                      <div className="shade4"></div>
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
  const res = await fetch(`http://127.0.0.1:8000/colors`);
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
