import style from "../styles/restpage.module.scss";
import styled from "styled-components";

const SettingUI = ({ color }: any) => {
  console.log(`color from setting ui ${color}`);

  return (
    <div className={style.settingui}>
      <h2>Setting UI</h2>
    </div>
  );
};

export default SettingUI;
