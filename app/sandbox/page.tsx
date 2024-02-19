import Head from "next/head";
import styles from "@/pages/index.module.css";

import Counter from "../counter";

// localhost:3000/sandbox

export default function Sandbox() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my sandbox!</h1>

        <p className={styles.description}>
          Get started by editing <code>app/sandbox/page.tsx</code>
        </p>

        <Counter />
      </main>
    </div>
  );
}
