import "../styles/globals.scss";
import type { AppProps } from "next/app";
import {
  useState,
  useEffect,
  useReducer,
  useContext,
  createContext,
} from "react";
import Layout from "../components/layout/layout";

// const Usercontext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (window.localStorage.getItem("cp_uid")) {
      let user = window.localStorage.getItem("cp_uid");
      setUser(user!);
    }
  }, [user]);
  console.log(user);

  return (
    <Layout>
      <Component {...pageProps} user={user} />
    </Layout>
  );
}
export default MyApp;
