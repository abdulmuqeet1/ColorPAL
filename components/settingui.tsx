import { useState, useEffect } from "react";
import style from "../styles/restpage.module.scss";
import styled from "styled-components";
import { AiOutlineCopy } from "react-icons/ai";
const conv = require("colvert");

const SettingUI = ({ colhex }: any) => {
  const [hexval, setHexval] = useState("#111111"); // color value in hex
  const [rgbval, setRgbval] = useState([17, 17, 17]); // color value in hex
  // const [hslval, setHslval] = useState(colhex); // color value in hex
  // let rgb = conv.hexTorgb(usecol);
  let hsl = conv.hexTohsl(hexval);

  const [redval, setRedval] = useState(17);
  const [greenval, setGreenval] = useState(17);
  const [blueval, setBlueval] = useState(17);

  const [opacityval, setOpacityval] = useState(255);
  const [preval, setPreval] = useState(false);

  useEffect(() => {
    setHexval(colhex);
  }, [colhex]);
  useEffect(() => {
    let rgb = conv.hexTorgb(hexval);
    setRedval(rgb[0]);
    setGreenval(rgb[1]);
    setBlueval(rgb[2]);
    setRgbval([rgb[0], rgb[1], rgb[2]]);
  }, [hexval]);

  function redsliderhandler(e: any) {
    if (!e) {
      return console.error("invalid input!");
    }
    setRedval(e.target.value);

    let c = conv.rgbTohex([e.target.value, greenval, blueval]);
    setHexval(c);
    return;
  }

  function greensliderhandler(e: any) {
    if (!e) {
      return console.error("invalid input!");
    }
    setGreenval(e.target.value);
    let c = conv.rgbTohex([redval, e.target.value, blueval]);
    setHexval(c);
    return;
  }

  function bluesliderhandler(e: any) {
    if (!e) {
      return console.error("invalid input!");
    }
    setBlueval(e.target.value);

    let c = conv.rgbTohex([redval, greenval, e.target.value]);
    setHexval(c);
    return;
  }

  function preview() {
    setPreval(!preval);
  }

  function copyhex() {
    navigator.clipboard.writeText(hexval);
  }

  function copyrgbtext() {
    navigator.clipboard.writeText(
      `rgb(${rgbval[0]} , ${rgbval[1]} ,${rgbval[2]})`
    );
    // navigator.clipboard.writeText(`rgb(11, 123, 29)`);
  }
  function copyhsl() {
    navigator.clipboard.writeText(`hsl(${hsl[0]}, ${hsl[1]}, ${hsl[2]})`);
  }

  return (
    <>
      <style jsx>{`
        .previewscreenbtn {
          width: 12rem;
          height: 7rem;
          background: ${hexval};
          outline: none;
          border: none;
          cursor: pointer;
        }
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
          background-color: ${hexval};
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
          cursor: pointer;
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
            value={rgbval[0]}
            className="slider"
            id="redslider"
            name="redslider"
            onChange={(e) => redsliderhandler(e)}
          />
          <br />
          <label>G</label>
          <input
            type="range"
            min="0"
            max="255"
            value={rgbval[1]}
            className="slider"
            id="greenslider"
            name="greenslider"
            onChange={(e) => greensliderhandler(e)}
          />
          <br />
          <label>B</label>
          <input
            type="range"
            min="0"
            max="255"
            value={rgbval[2]}
            className="slider"
            id="blueslider"
            name="blueslider"
            onChange={(e) => bluesliderhandler(e)}
          />
          <br />
          {/* <label>A</label>
          <input
            type="range"
            min="0"
            max="255"
            value={opacityval}
            className="slider"
            id="opacityslider"
            name="opacityslider"
            disabled
            onChange={(e) => slidercolorchange(e)}
          /> */}
        </div>
        <br />

        <button className="previewscreenbtn" onClick={() => preview()}>
          Preview
        </button>
        <div className="colorvaltext">
          <div className="colorcode">
            <p id="hexcodedisplay">{hexval}</p>
            <button id="copyhexbtn" onClick={() => copyhex()}>
              <AiOutlineCopy />
            </button>
          </div>
          <div className="colorcode">
            <p id="rgbcodedisplay">
              rgb({rgbval[0]},{rgbval[1]},{rgbval[2]})
            </p>
            <button id="copyrgbbtn" onClick={() => copyrgbtext()}>
              <AiOutlineCopy />
            </button>
          </div>
          <div className="colorcode">
            <p id="rgbcodedisplay">
              hsl({hsl[0]},{hsl[1]},{hsl[2]})
            </p>
            <button id="copyrgbbtn" onClick={() => copyhsl()}>
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
