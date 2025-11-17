import React, { useState, useMemo } from "react";
import { emojis } from "./emojiData";
import EmojiList from "./components/EmojiList";
import groupMessages from "emojibase-data/en/messages.json";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const groups = groupMessages.groups;
  const categoryMap = useMemo(() => {
    const map = {};
    groups.forEach((g) => {
      map[g.key] = g.message;
    });
    return map;
  }, [groups]);

  const categories = useMemo(() => {
    const set = new Set();
    emojis.forEach((e) => {
      const groupObj = groups.find((g) => g.order === e.group);
      if (groupObj) {
        set.add(groupObj.message);
      }
    });
    return Array.from(set).sort();
  }, [groups]);

  const filteredEmojis = useMemo(() => {
    if (selectedCategory === "All") {
      return emojis;
    }
    const groupObj = groups.find((g) => g.message === selectedCategory);
    if (!groupObj) return emojis;
    const groupOrder = groupObj.order;
    return emojis.filter((e) => e.group === groupOrder);
  }, [selectedCategory, groups]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <EmojiList emojis={filteredEmojis} />
    </div>
  );
}

export default App;
