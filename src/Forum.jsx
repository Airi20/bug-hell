import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from "firebase/firestore";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // 投稿取得
  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const postList = snapshot.docs.map((doc) => doc.data());
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  // 投稿送信
  const handleSubmit = async (e) => {
  e.preventDefault();
  if (name.trim() && message.trim()) {
    const uid = getAuth().currentUser?.uid; // ← ここ追加！
    const newPost = {
      name,
      message,
      uid, // ← これも追加！
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(db, "posts"), newPost);
    setName("");
    setMessage("");

    // 再取得（効率悪いけど手軽）
    const snapshot = await getDocs(query(collection(db, "posts"), orderBy("createdAt", "desc")));
    const postList = snapshot.docs.map((doc) => doc.data());
    setPosts(postList);
  }
};


  return (
    <div style={{ marginTop: 40 }}>
      <h2>掲示板：なんでもどうぞ</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="名前（匿名可）"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 8, marginRight: 10 }}
        />
        <input
          type="text"
          placeholder="コメント内容"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: 8, marginRight: 10, width: "50%" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>投稿</button>
      </form>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {posts.map((post, index) => (
          <li key={index} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            <strong>{post.name || "名無し"}</strong>（{post.createdAt?.toDate?.().toLocaleString?.() || "時間不明"}）<br />
            {post.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
