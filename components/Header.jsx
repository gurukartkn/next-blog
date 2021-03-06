import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";
import { GiTechnoHeart } from "react-icons/gi";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-slate-700 py-8">
        <div className="md:float-left flex items-center">
          <div className="text-4xl text-sky-500">
            <GiTechnoHeart />
          </div>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl pl-4 text-white">
              trivialtech
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents text-white ease-in-out duration-300 ">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle  ml-4 font-semibold cursor-pointer hover:text-sky-500">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
