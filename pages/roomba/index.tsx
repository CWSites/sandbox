"use client";

import { useState } from "react";
import Head from "next/head";
import styles from "@/styles/roomba.module.css";

interface RoombaProps {
  degree: number;
}

const Roomba = ({ degree }: RoombaProps) => {
  return (
    <span
      className={styles.Roomba}
      style={{ transform: `rotate(${degree}deg)` }}
    >
      ☝🏼
    </span>
  );
};

export default function Sandbox() {
  const [degree, setDegree] = useState(0);
  const [position, setPosition] = useState([0, 0]);

  const rotateRoomba = () => {
    let newDegree = degree + 90;
    if (newDegree === 360) {
      newDegree = 0;
    }
    setDegree(newDegree);
  };

  const moveForward = () => {
    // get current position
    let [x, y] = position;

    // determine math based on degree
    switch (degree) {
      case 0:
        y -= 1;
        break;
      case 90:
        x += 1;
        break;
      case 180:
        y += 1;
        break;
      case 270:
        x -= 1;
        break;
      default:
        break;
    }

    // hits a wall, rotate 90 degrees (right)
    if (x < 0 || x > 9 || y < 0 || y > 9) {
      rotateRoomba();
      return;
    }

    // set new position
    setPosition([x, y]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Roomba</h1>

        <button type="button" onClick={() => moveForward()}>
          Move Forward
        </button>

        <button type="button" onClick={() => rotateRoomba()}>
          Turn Right
        </button>

        <div className={styles.Grid}>
          {new Array(10).fill(null).map((_, x) => (
            <div className={styles.Column} key={x}>
              {new Array(10).fill(null).map((_, y) => (
                <div className={styles.Cell} key={y}>
                  {position[0] === x && position[1] === y ? (
                    <Roomba degree={degree} />
                  ) : null}
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
