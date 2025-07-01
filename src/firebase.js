import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-if7wJ-TF3z_NLRBFGM7nTLhhGfa2_-w",
  authDomain: "project-2358297796130982877.firebaseapp.com",
  projectId: "project-2358297796130982877",
  storageBucket: "project-2358297796130982877.appspot.com",
  messagingSenderId: "185310078105",
  appId: "1:185310078105:web:e0c8ffbce638104976c408",
  measurementId: "G-E09S90NZDV"
};

// ✅ 先にAppを初期化！
const app = initializeApp(firebaseConfig);

// ✅ Appからauthとdbを取得
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ 匿名ログイン
signInAnonymously(auth)
  .then(() => {
    console.log("✅ 匿名ログイン成功！");
  })
  .catch((error) => {
    console.error("🚨 匿名ログイン失敗：", error);
  });

// 🔄 dbを外部で使えるようにexport
export { db };
