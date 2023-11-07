import React from "react";
import { emojiData } from "../mockData";

const Emojis = () => {
  return (
    <div style={{ width: "100%", maxHeight: "20rem", overflow: "auto" }}>
      <ul
        style={{ display: "flex", flexWrap: "wrap", gap: "0.5em" }}
        onClick={(e) => {
          console.log(e.target.innerText);
        }}
      >
        {emojiData.map((value, key) => (
          <li key={key} style={{ fontSize: "2rem" }}>
            {String.fromCodePoint(...value.split(","))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Emojis;
