import React from "react";

const fortunes = ["大吉", "中吉", "小吉", "凶", "末吉"];
const items = ["猫の動画", "チョコレート", "おふとん", "ストレッチ", "アイスコーヒー"];
const messages = [
  "今日のバグは明日の成長。",
  "寝ろ。それがすべて。",
  "ひとりの時間、大事にして。",
  "思ってるより周りは見てないから大丈夫。",
  "落ちるインターンも人生の肥やし。"
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getToday = () => new Date().toLocaleDateString();

export default function TodaysFortune() {
  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <h2>🌠 {getToday()} のうんせい 🌠</h2>
      <p>🔮 {getRandom(fortunes)}</p>
      <p>🍀 ラッキーアイテム：{getRandom(items)}</p>
      <p>🎲 ラッキーナンバー：{Math.floor(Math.random() * 100)}</p>
      <p><i>📜 {getRandom(messages)}</i></p>
    </div>
  );
}
