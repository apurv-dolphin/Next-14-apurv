import React from 'react'
import styles from "./blog.module.css";
import BlogList from './BlogList';

export default function Blog() {
  return (
    <div className={styles.blog}>
      <h1>Blog page</h1>
      <BlogList />
    </div>
  );
}
