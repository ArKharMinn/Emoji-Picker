import React from "react";

export default function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <button
        key="all"
        onClick={() => onSelect("All")}
        style={{
          margin: "0 5px 5px 0",
          padding: "5px 10px",
          backgroundColor: selected === "All" ? "#ddd" : "#fff",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          style={{
            margin: "0 5px 5px 0",
            padding: "5px 10px",
            backgroundColor: selected === cat ? "#ddd" : "#fff",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
