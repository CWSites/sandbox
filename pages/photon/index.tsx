"use client";

import Head from "next/head";
import styles from "@/styles/photon.module.css";

interface PageProps {
  title: string;
}

export default function ({ title = "Photon Sandbox" }: PageProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
      </main>
    </div>
  );
}
