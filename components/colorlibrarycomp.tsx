// import { React.FC } from "react";
import type { NextPage } from "next";
import style from "../styles/Home.module.scss";
import { FunctionComponent } from "react";
import { colormini } from "../libs/colormini";
import styled from "styled-components";

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

const ColorLibraryComp: FunctionComponent = () => {
  return (
    <div className={style.maincontainer}>
      <h2>Color Library Component</h2>
    </div>
  );
};

export default ColorLibraryComp;
