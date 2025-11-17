import React from "react";

export default function EmojiItem({ emoji, name }) {
  const handleClick = () => {
    navigator.clipboard.writeText(emoji).then(
      () => {
        // copied
        alert(`"${emoji}" copied!`);
      },
      (err) => {
        console.error("Could not copy emoji: ", err);
      }
    );
  };

  return (
    <div
      onClick={handleClick}
      title={name}
      style={{
        fontSize: "2rem",
        cursor: "pointer",
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        userSelect: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      {emoji}
    </div>
  );
}
