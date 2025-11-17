import React from "react";
import EmojiItem from "./EmojiItem";

export default function EmojiList({ emojis }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
        gap: "8px",
      }}
    >
      {emojis.map((item, index) => (
        <EmojiItem key={index} emoji={item.emoji} name={item.name} />
      ))}
    </div>
  );
}
