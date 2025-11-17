import allEmojis from "emojibase-data/en/data.json";

export const emojis = allEmojis.map((e) => ({
  emoji: e.emoji,
  name: e.annotation,
  group: e.group,
  subgroup: e.subgroup,
  shortcodes: e.shortcodes,
}));
