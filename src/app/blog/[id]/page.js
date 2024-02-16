"use client";
import React from "react";

export default function BlogId({ params }) {
  const id = params.id;

  return (
    <div>
      <h1>Apurv Blog Post: {id}</h1>
    </div>
  );
}
