"use client";

import { useEffect, useState } from "react";

const URL = "https://jsonmock.hackerrank.com/api/countries";

interface Country {
  name: string;
  area: number;
}

const fetchData = async (url: string) => {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

export default function Countries() {
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountries: Promise<any> = new Promise((resolve, reject) => {
    if (countries) {
      resolve(console.log("success"));
    } else {
      console.error("error");
      reject(new Error("error"));
    }
  });

  useEffect(() => {
    getCountries
      .then(() => {
        return fetchData(`${URL}?page=1`);
      })
      .then((data) => {
        console.log(data);
        return data.total_pages;
      })
      .then((totalPages) => {
        let promises = [];
        console.log(totalPages);

        for (let i = 0; i < totalPages; i++) {
          promises.push(fetchData(`${URL}?page=${i + 1}`));
        }

        return promises;
      })
      .then(async (promises) => {
        let countries: Country[] = [];

        return Promise.all(promises).then((pages) => {
          // map data returned and push to data [{ name: "..", area: "" }]
          pages.forEach((page) => {
            page.data.forEach((country: Country) => {
              countries.push({ name: country.name, area: country.area });
            });
          });

          setCountries(countries);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <h1>{countries.length} Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>
            {country.name} - {country.area}
          </li>
        ))}
      </ul>
    </>
  );
}
