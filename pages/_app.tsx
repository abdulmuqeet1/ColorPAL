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

const Usercontext = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  // shift this user cookie code to layout file
  const [user, setUser] = useState("abdul");
  useEffect(() => {
    if (window.localStorage.getItem("cp_uid")) {
      let user = window.localStorage.getItem("cp_uid");
      setUser(user!);
    }
  }, [user]);

  return (
    <Usercontext.Provider value={user}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Usercontext.Provider>
  );
}
export default MyApp;
