import React from "react";

const comments = [
  "最近夏バテ気味だな。",
  "やっと夏休みだよ。",
  "Wi-Fiが来ないんだ。",
  "バイト増やそうかな。",
  "うえーい。",
];

export default function UpComment() {
  const [selected, setSelected] = React.useState(null);
  const [comment, setComment] = React.useState("");

  const handleClick = (i) => {
    setSelected(i);
    setComment(comments[i]);
  };

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <h2 style={{fontSize:"18px"}}>今日の気分🍵</h2>
      {[...Array(comments.length)].map((_, i) => (
        <button key={i} onClick={() => handleClick(i)} style={{ margin: "0 5px" }}>
          {i + 1}番
        </button>
      ))}
      {selected !== null && <p style={{ marginTop: "20px" }}>💬 {comment}</p>}
    </div>
  );
}
