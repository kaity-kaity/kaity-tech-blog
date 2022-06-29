import Head from "next/head";
import React from "react";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Button } from "@material-ui/core";

const name = "KAITO KITAGAWA";
export const siteTitle = "kaity-blog";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!home && (
        <div className={utilsStyles.backHomeButton}>
          <Button variant="contained" color="primary">
            <Link href="/">
              <a className={utilsStyles.backHomeButtonLink}>ホームに戻る</a>
            </Link>
          </Button>
        </div>
      )}
      <header className={styles.header}>
        {home ? (
          <img
            className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
            src="/images/kaito.jpg"
            alt="アイコン画像"
          />
        ) : (
          <img
            className={`${utilsStyles.borderCircle} ${styles.headerImage}`}
            src="/images/kaito.jpg"
            alt="アイコン画像"
          />
        )}
        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
      </header>
      <div className={utilsStyles.container}>
        <main>{children}</main>
        {!home && (
          <div className={utilsStyles.backHomeButton}>
            <Button variant="contained" color="primary">
              <Link href="/">
                <a className={utilsStyles.backHomeButtonLink}>ホームに戻る</a>
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
