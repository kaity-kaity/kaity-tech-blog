import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import { getPostsData } from "../lib/post";
import styles from "../styles/Home.module.css";
import utilsStyles from "../styles/utils.module.css";

// SSGでデータ取得
export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>私は3年目の新人エンジニアです</p>
      </section>

      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2>プロジェクト一覧</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilsStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilsStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
