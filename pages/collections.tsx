import { useState } from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/client";
import { signIn, signOut } from "next-auth/client";
import style from "../styles/restpage.module.scss";
import Link from "next/link";

const Collections: NextPage = () => {
  const [savedItems, setSavedItems] = useState<any>();
  const [session, loading] = useSession();

  if (!session) {
    return (
      <div className={style.collectionspagelogin}>
        <div>
          <p>Please sign in to view collections</p>
          <Link href="/api/auth/signin" passHref>
            <button
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign in
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={style.collectionspagewithItems}>
      <h1>Collections</h1>
      <div>
        {savedItems ? (
          <div>
            <h2>Collections</h2>
            {savedItems.map((i: any, key: any) => {
              <p key={key}>{i}</p>;
            })}
          </div>
        ) : (
          <h3>No saved item</h3>
        )}
      </div>
    </div>
  );
};
export default Collections;
