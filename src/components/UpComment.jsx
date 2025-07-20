import React from "react";

const comments = [
  "プログラミングにハマる人間は大抵めんどくさがり屋なんだ。でも、めんどくさがり屋のおかげで、技術は進歩しているんだよ。",
  "高校生にさ、いろんな職業を見せてあげる機会を作った方が良いと思うんだ。",
  "どうやって生きていくのがマシかな。",
  "バイクの免許とMacで悩み中ｗ",
  "あんまり考えすぎないことだ。",
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
