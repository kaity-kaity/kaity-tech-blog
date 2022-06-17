import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "KAITO KITAGAWA";
export const siteTitle = "kaity-blog";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <img
            className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
            src="/images/profile.png"
            alt="アイコン画像"
          />
        ) : (
          <img
            className={`${utilsStyles.borderCircle} ${styles.headerImage}`}
            src="/images/profile.png"
            alt="アイコン画像"
          />
        )}
        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームに戻る</Link>
        </div>
      )}
    </div>
  );
}
