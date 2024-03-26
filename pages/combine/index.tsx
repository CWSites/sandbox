"use client";

import { useEffect, useState } from "react";
import Head from "next/head";

interface CombinedData {
  id: number;
  artist: string;
  genre: string;
  song: string;
}

interface Artist {
  id: number;
  artist: string;
  genre: string;
}

interface Song {
  id: number;
  song: string;
}

const artists = [
  { id: 13, artist: "Deadmau5", genre: "Progressive House" },
  { id: 2, artist: "Daft Punk", genre: "House" },
  { id: 25, artist: "Calvin Harris", genre: "House" },
  { id: 33, artist: "Avicii", genre: "Progressive House" },
  { id: 1, artist: "David Guetta", genre: "Progressive House" },
  { id: 100, artist: "Zedd", genre: "Progressive House" },
];

const songs = [
  { id: 13, song: "Strobe" },
  { id: 2, song: "One More Time" },
  { id: 25, song: "Summer" },
  { id: 33, song: "Levels" },
  { id: 1, song: "Titanium" },
  { id: 13, song: "Ghosts 'n' Stuff" },
];

export default function Sandbox() {
  const [combined, setCombined] = useState<CombinedData[]>([]);

  useEffect(() => {
    const combinedData = songs.map((song) => {
      // .find looks for the first to match the condition
      const artist = artists.find((artist) => artist.id === song.id);
      // ?? is a safer way to check for null or undefined
      return {
        id: artist?.id ?? song.id,
        artist: artist?.artist ?? "No artist found",
        genre: artist?.genre ?? "No genre found",
        song: song ? song.song : "No song found",
      };
    });

    setCombined(combinedData);
  }, []);

  return (
    <div>
      <Head>
        <title>Sandbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Top Music</h1>
        {combined.map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.artist} - {item.song}
              </p>
            </div>
          );
        })}
        <h1>Top Artists</h1>
        {artists.map((artist) => {
          return (
            <div key={artist.id}>
              <p>
                {artist.artist} - {artist.genre}
              </p>
            </div>
          );
        })}
        <h1>Top Songs</h1>
        {songs.map((song) => {
          return (
            <div key={song.id}>
              <p>{song.song}</p>
            </div>
          );
        })}
      </main>
    </div>
  );
}
