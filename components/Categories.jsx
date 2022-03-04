import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-slate-800 shadow-xl rounded-xl p-8 pb-12 mb-8">
      <h3 className="text-white text-xl mb-8 font-semibold border-b border-slate-700 pb-4">
        Categories
      </h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`text-white cursor-pointer block ${
              index === categories.length - 1
                ? "border-b-0"
                : "border-b border-slate-700"
            } pb-3 mb-3`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
export default Categories;
