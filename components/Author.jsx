import React from "react";

const Author = ({ author }) => {
  return (
    <div className="flex text-center items-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <img
        src={author.photo?.url}
        alt={author.text}
        height="100px"
        width="100px"
        className="align-middle rounded-full"
      />

      <h3 className="text-white px-8  text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
