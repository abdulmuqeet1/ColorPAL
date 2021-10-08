import { useState, useEffect } from "react";
import style from "../styles/restpage.module.scss";
import styled from "styled-components";
import { AiOutlineCopy } from "react-icons/ai";

const SettingUI = ({ color }: any) => {
  const [usecol, setUsecol] = useState(color);
  const [redval, setRedval] = useState(255);
  const [blueval, setBlueval] = useState(255);
  const [greenval, setGreenval] = useState(255);
  const [opacityval, setOpacityval] = useState(255);
  const [preval, setPreval] = useState(false);

  useEffect(() => {
    setUsecol(color);
  }, [color]);

  function slidercolorchange(e: any) {
    if (!e) {
      return console.error("invalid input!");
    }

    if (e.target.name == "redslider") {
      return setRedval(e.target.value);
    } else if (e.target.name == "greenslider") {
      setGreenval(e.target.value);
    } else if (e.target.name == "blueslider") {
      setBlueval(e.target.value);
    } else if (e.target.name == "opacityslider") {
      setOpacityval(e.target.value);
    } else {
      return;
    }
  }

  function preview() {
    setPreval(!preval);
  }

  function copytext() {
    navigator.clipboard.writeText(usecol);
    console.log("copy text function");
  }

  function copyrgbtext() {
    console.log("copy rgb code");
  }

  return (
    <>
      <style jsx>{`
        .previewscreenbtn {
          width: 12rem;
          height: 6rem;
          background: ${color};
          outline: none;
          border: none;
          cursor: pointer;
        }
        // .displayscreen:hover {
        //   background: black;
        // }
        #redslider,
        #greenslider,
        #blueslider,
        #opacityslider {
          -webkit-appearance: none;
          height: 10px;
          border-radius: 50px;
          outline: none;
          margin-left: 10px;
        }
        #redslider {
          background: rgb(0, 0, 0);
          background: linear-gradient(
            105deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(255, 0, 0, 1) 50%
          );
        }

        #greenslider {
          background: rgb(0, 0, 0);
          background: linear-gradient(
            105deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 255, 0, 1) 50%
          );
        }

        #blueslider {
          background: rgb(0, 0, 0);
          background: linear-gradient(
            105deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 255, 1) 50%
          );
        }

        #redslider::-webkit-slider-thumb,
        #greenslider::-webkit-slider-thumb,
        #blueslider::-webkit-slider-thumb,
        #opacityslider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background-color: rgb(0, 0, 0);
        }

        .previewon {
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: ${color};
          z-index: 10;
          transition: all 200ms ease-in-out;
        }
        .previewoff {
          display: none;
          width: 100vw;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: red;
          z-index: 10;
          transition: all 200ms ease-in-out;
        }
        .colorvaltext {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
        }
        .colorcode {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          // background-color: red;
          margin: 5px 0;
        }
        .colorcode p {
          width: 10rem;
          height: 2rem;
          background-color: white;
          color: black;
          padding: 4px 0 0 8px;
          margin: 0;
          margin-right: 12px;
        }
        .colorcode button {
          margin: 0;
          padding-top: 5px;
          border: none;
          outline: none;
          width: 2rem;
          height: 2rem;
          font-size: 1.2rem;
          background-color: white;
          color: black;
          border-radius: 50%;
        }
      `}</style>
      <div className={preval ? "previewon" : "previewoff"}></div>
      <div className={style.settingui}>
        <h2>Setting UI</h2>
        <div className="slidecontainer">
          <label>R</label>
          <input
            type="range"
            min="0"
            max="255"
            value={redval}
            className="slider"
            id="redslider"
            name="redslider"
            onChange={(e) => slidercolorchange(e)}
          />
          <br />
          <label>G</label>
          <input
            type="range"
            min="0"
            max="255"
            value={greenval}
            className="slider"
            id="greenslider"
            name="greenslider"
            onChange={(e) => slidercolorchange(e)}
          />
          <br />
          <label>B</label>
          <input
            type="range"
            min="0"
            max="255"
            value={blueval}
            className="slider"
            id="blueslider"
            name="blueslider"
            onChange={(e) => slidercolorchange(e)}
          />
          <br /> <label>A</label>
          <input
            type="range"
            min="0"
            max="255"
            value={opacityval}
            className="slider"
            id="opacityslider"
            name="opacityslider"
            onChange={(e) => slidercolorchange(e)}
          />
        </div>

        <button className="previewscreenbtn" onClick={() => preview()}>
          Preview
        </button>
        <div className="colorvaltext">
          <div className="colorcode">
            <p id="hexcodedisplay">{usecol}</p>
            <button id="copyhexbtn" onClick={() => copytext()}>
              <AiOutlineCopy />
            </button>
          </div>
          <div className="colorcode">
            <p id="rgbcodedisplay">rgb(255,255,255)</p>
            <button id="copyrgbbtn" onClick={() => copyrgbtext()}>
              <AiOutlineCopy />
            </button>
          </div>
          <div className="colorcode">
            <p id="rgbcodedisplay">hsl(255,255,255)</p>
            <button id="copyrgbbtn" onClick={() => copyrgbtext()}>
              <AiOutlineCopy />
            </button>
          </div>
          {/* <br />{" "}
          <div className="colorcode">
            <p id="rgbcodedisplay">some(255,255,255)</p>
            <button id="copyrgbbtn" onClick={() => copyrgbtext()}>
              <AiOutlineCopy />
            </button>
          </div>
          <br />{" "}
          <div className="colorcode">
            <p id="rgbcodedisplay">some(255,255,255)</p>
            <button id="copyrgbbtn" onClick={() => copyrgbtext()}>
              <AiOutlineCopy />
            </button>
          </div>
          <br />{" "}
          <div className="colorcode">
            <p id="rgbcodedisplay">some(255,255,255)</p>
            <button id="copyrgbbtn" onClick={() => copyrgbtext()}>
              <AiOutlineCopy />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SettingUI;
