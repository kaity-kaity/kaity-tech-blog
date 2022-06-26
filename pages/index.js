import Head from "next/head";
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
  allPostsData.sort(function (prev, next) {
    return prev.order - next.order;
  });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>
          <b>React × Typescript</b>
          を勉強中の駆け出しフロントエンドエンジニアです!!
        </p>
        <p>
          現在の目標は、<b>新人パーソナルトレーナーの経営課題解決</b>
          のサポートを目的とした、サービスを開発すること!!
        </p>
      </section>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2>プロジェクト一覧</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, framework, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <div className={styles.frameWork}>
                <img src={`${framework}`} className={styles.frameWorkImage} />
              </div>
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
