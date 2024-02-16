import React from "react";
import styles from "./apurv.module.css";
import Image from "next/image";

export default function Apurv() {
  return (
    <>
      <div className={styles.apurv}>
        <h1>Apurv</h1>
        <Image
          width={500}
          height={500}
          src="/apurv.jpg"
          alt="apurv"
          loading="lazy"
        />
      </div>
    </>
  );
}
