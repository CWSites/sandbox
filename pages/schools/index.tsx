"use client";

import { useEffect, useState } from "react";

const URL = "https://data.cityofnewyork.us/resource/s3k6-pzi2.json";

interface School {
  school_name: string;
  dbn: string;
}

// Why write fetchData as async/await instead of using then/catch?
const fetchData = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};

export default function Countries() {
  const [schools, setSchools] = useState<School[]>([]);

  // Create a promise to fetch the data, specify the shape of the data
  const getSchools = new Promise<School[]>((resolve, reject) => {
    // If the data is fetched, resolve the promise as successful
    resolve(fetchData(URL));

    // If the data is not fetched, reject the promise with an error
    if (schools.length === 0) {
      reject(new Error("Unable to fetch data"));
    }
  });

  const loadSchools = () => {
    getSchools
      .then((schools) => {
        setSchools(schools);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadSchools();
  }, []);

  return (
    <main>
      <h1>{schools.length} Schools</h1>
      <ul>
        {schools.map((school) => (
          <li key={school.dbn}>{school.school_name}</li>
        ))}
      </ul>
    </main>
  );
}
