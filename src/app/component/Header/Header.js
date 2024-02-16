"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

export default function SearchAppBar() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName === selectedItem ? null : itemName);
  };

  const isItemSelected = (itemName) => {
    return itemName === selectedItem ? styles.selected : "";
  };

  return (
    <header className={styles.headerFixed}>
      <div className={styles.headerLimiter}>
        <h1>
          <Link href="/">Apurv</Link>
        </h1>

        <nav>
          <Link
            href="/"
            className={isItemSelected("Home")}
            onClick={() => handleItemClick("Home")}
          >
            Home
          </Link>
          <Link
            href="/blog"
            className={isItemSelected("Blog")}
            onClick={() => handleItemClick("Blog")}
          >
            Blog
          </Link>
          <Link
            href="/apurv"
            className={isItemSelected("Apurv")}
            onClick={() => handleItemClick("Apurv")}
          >
            Apurv
          </Link>
          <Link
            href="/about"
            className={isItemSelected("About")}
            onClick={() => handleItemClick("About")}
          >
            About
          </Link>
          <Link
            href="/profile"
            className={isItemSelected("Profile")}
            onClick={() => handleItemClick("Profile")}
          >
            Profile
          </Link>

          {/* <a href="#">Home</a>
          <a href="#" className={styles.selected}></a>
          <a href="#"></a>
          <a href="#">About</a>
          <a href="#">Contact</a> */}
        </nav>
      </div>
    </header>
  );
}
