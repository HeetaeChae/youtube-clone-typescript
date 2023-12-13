/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";

function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState<string>("");
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="w-full flex justify-between p-5">
      <Link to="/" className="flex">
        <BsYoutube className="text-4xl text-youtube-red mr-2" />
        <h1 className="font-bold text-3xl">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 border mr-2 rounded-3xl"
        />
        <button className="rounded-full border w-10 h-10 flex items-center justify-center">
          <BsSearch className="text-center" />
        </button>
      </form>
    </header>
  );
}

export default SearchHeader;
