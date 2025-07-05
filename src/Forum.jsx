import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // 投稿取得
  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const postList = snapshot.docs.map((doc) => ({
        id: doc.id, // ドキュメントIDを保持するのが重要
        ...doc.data(),
      }));
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  // 投稿送信
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.length > 200) {
      alert("200文字以内でお願いします");
      return;
    }
    if (name.trim() && message.trim()) {
      const uid = getAuth().currentUser?.uid;
      const newPost = {
        name,
        message,
        uid,
        createdAt: serverTimestamp(),
        likes: 0, // いいね初期値0
      };
      await addDoc(collection(db, "posts"), newPost);
      setName("");
      setMessage("");

      // 投稿一覧更新
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const postList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postList);
    }
  };

  // いいね押したとき
  const handleLike = async (postId) => {
    const postRef = doc(db, "posts", postId);
    await updateDoc(postRef, {
      likes: increment(1),
    });

    // ローカルのpostsも更新しとく（画面即反映用）
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: (post.likes || 0) + 1 } : post
      )
    );
  };

  return (
    <div style={{ marginTop: 40 }}>
      <h2>掲示板（実験中）：匿名でお願いします。</h2>

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
          maxLength={200}
          style={{ padding: 8, marginRight: 10, width: "50%" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          投稿
        </button>
      </form>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {posts.map((post, index) => (
          <li
            key={post.id}
            style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
          >
            <strong>{post.name || "名無し"}</strong>（
            {post.createdAt?.toDate?.()?.toLocaleString?.() || "時間不明"}）
            <br />
            {post.message}
            <br />
            <button
              onClick={() => handleLike(post.id)}
              style={{
                marginTop: 4,
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              ♥️  {post.likes || 0}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}