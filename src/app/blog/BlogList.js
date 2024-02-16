"use client";
import React, { useCallback, useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import styles from "./blog.module.css";
import Image from "next/image";
import Loader from "../component/Loader/Loader";
import { CANADA, CATEGORY, INDIA, UNITED_KINGDOM, USA } from "../Util/util";
import Link from "next/link";

export default function BlogList() {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(INDIA);
  const perPage = 10;

  const countryOption = [
    { name: "India", value: INDIA },
    { name: "USA", value: USA },
    { name: "Canada", value: CANADA },
    { name: "UK", value: UNITED_KINGDOM },
  ];

  const handleSelectCountry = (e) => {
    setCountry(e.target.value);
  };
  const fetchNews = async () => {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${CATEGORY}&pageSize=${perPage}&page=${currentPage}`;
    setLoading(true);
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
        },
      });
      const totalResults = response.data.totalResults;
      setTotalPages(Math.ceil(totalResults / perPage));
      setLoading(false);
      setNewsData(response.data.articles);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching news:", error);
    }
  };

  const handlePagination = useCallback(
    (newPage) => {
      setCurrentPage(newPage);

      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Use "smooth" for a smooth scrolling effect
      });
    },
    [setCurrentPage]
  );

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, country]);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.title}>
            <h2>Sports News List ( {country.toLocaleUpperCase()} )</h2>
            <div className={styles.selectContainer}>
              <label>Select Country: </label>
              <select
                className={styles.selectInput}
                value={country}
                onChange={handleSelectCountry}
              >
                {countryOption.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ul className={styles.list}>
            {newsData.map((article, index) => (
              <li key={index} className={styles.listItem}>
                <div className={styles.listItemText}>
                  <h3 className={styles.listItemTitle}>
                    <Link href={`/blog/${index + 1}`}>{article?.title}</Link>
                  </h3>
                  <p className={styles.listItemDescription}>
                    {article?.description}
                  </p>
                  <p className={styles.listItemDate}>
                    Published At:{" "}
                    {new Date(article?.publishedAt).toLocaleString()}
                  </p>
                  <a
                    href={article?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.listItemLink}
                  >
                    Read more
                  </a>
                </div>
                <Image
                  width={300}
                  height={200}
                  className={styles.listItemImage}
                  loading="lazy"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJySGLWibiYk5qOdpaaI20BSth754Lm8FNDJ2xyW0vDNBkXWZN96VmUvtdH8-_XlDLS8&usqp=CAU"
                  alt={article.title}
                />
              </li>
            ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePagination={handlePagination}
          />
        </>
      )}
    </div>
  );
}
