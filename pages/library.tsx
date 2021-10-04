import type { NextPage } from "next";
import { useState } from "react";
import style from "../styles/restpage.module.scss";
import { colors, colorsobj, newcol } from "../libs/colors";
import styled from "styled-components";

// compoenets
import SettingUI from "../components/settingui";

const ColorBox = styled.div`
  position: relative;
  // max-width: 80rem
  width: 75rem;
  min-width: 10rem;
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color: black;
  color: black;
  border-radius: 10px;
  margin: 2rem 0;

  .maincol {
    width: 80%;
    height: 80px;
    background-color: ${(props) => props.color};
    cursor: pointer;
  }
  .shade1 {
    width: 80px;
    height: 80px;
    background-color: red;
  }
  .shade2 {
    width: 80px;
    height: 80px;
    background-color: blue;
  }
  .shade3 {
    width: 80px;
    height: 80px;
    background-color: green;
  }
  .shade4 {
    width: 80px;
    height: 80px;
    background-color: pink;
    border-radius: 0 4px 4px 0;
  }
`;

const Library: NextPage = (props: any) => {
  const [col, setCol] = useState("");

  const setcolor = (color: any) => {
    setCol(color);
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
            {newcol.map((c, key) => {
              return (
                <div key={key}>
                  <ColorBox color={c.hex}>
                    <div className="maincol" onClick={() => setcolor(c.hex)}>
                      {c.colname}
                    </div>
                    <div className="shade1"></div>
                    <div className="shade2"></div>
                    <div className="shade3"></div>
                    <div className="shade4"></div>
                  </ColorBox>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
