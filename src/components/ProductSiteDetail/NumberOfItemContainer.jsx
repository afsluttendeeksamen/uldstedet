"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const NumberOfItemContainer = () => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const price = 100;

  return (
    <div>
      <div>
        <button onClick={() => setNumberOfItems(Math.max(1, Number(numberOfItems - 1)))}>
          <AiOutlineMinus />
        </button>

        <input type="number" value={numberOfItems} min={1} onChange={(e) => setNumberOfItems(e.target.value === "" ? "" : Number(e.target.value))} />

        <button onClick={() => setNumberOfItems(Math.min(5, Number(numberOfItems + 1)))}>
          <AiOutlinePlus />
        </button>
      </div>
      <div>
        <p>{price * numberOfItems} DKK</p>
      </div>
    </div>
  );
};

export default NumberOfItemContainer;
