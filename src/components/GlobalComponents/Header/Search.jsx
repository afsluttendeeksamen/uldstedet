"use client";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const Search = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex items-center justify-end p-4">
      <div className="relative flex items-center" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <input type="text" placeholder="Søg..." className={`bg-gray-200 rounded-full py-2 px-4 outline-none transition-all duration-300 ${isHover ? "w-64 opacity-100" : "w-0 opacity-0"}`} />

        <button className="absolute z-10 right-0 p-2">
          <IoIosSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
