// src/App.jsx
import Forum from "./Forum";
import React from "react";

export default function App() {
  const apps = [
    {
      name: "TrussForce",
      description: "部材力自動計算アプリ。構造工学の味方！（フロントとバック繋ぐのクソ大変だったし興味なくてもいいから見てって。）(ヾﾉ･ω･`)",
      url: "https://trussfront.onrender.com/",
    },
    {
      name: "マインスイーパー",
      description: "Reactで作った爆速マインスイーパー。息抜きにどうぞ。(๑•̀ •́)وｲｲﾈ✧.ﾟ",
      url: "https://mine-sweeper2.vercel.app/",
    },
    {
      name: "課題に手を付けられない大学生へ",
      description: "課題？やる気？知らんがな。そんな君に贈る時間操作型アプリ。ｳﾜｰﾝ(ﾉ;ω;)ﾉ",
      url: "https://report-time-hope.vercel.app/",
    },
    {
      name: "Done Today",
      description: "今日やったこと、今日できなかったこと、全部記録しとこ(*^^)v。",
      url: "https://done-today-eight.vercel.app/",
    },
    {
      name: "Code Crush",
      description: "JavaScript文法を選択式で学べるクイズアプリ。意外とガチ。( ･´ｰ･｀)",
      url: "https://code-crush-black.vercel.app/",
    },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>人生に迷った理系大学３年女子のアプリ紹介サイト</h1>
      <p>
        こんにちは。融合系工学部の暇人です。
        暇すぎて（というか本当は進級のための勉強したり、院受けるならその準備したり、
        就活すべきなんだけど）、全部やりたくなくて、現実逃避で
        ひたすらアプリを作ってました（だって留年したら内定取り消されるから就活より勉強じゃんね？だけど勉強なんてやりたくないじゃんか。助けて😭）。
        <br /><br />
        なんか気付いたらまあまあ数が増えてたんで、ひとつのサイトにまとめてみました。
        （※ほんとはもっといっぱいある。でもまとめるのと保存がめんどくさかったし毎回リアクトインストールするのもだるいんで一個のローカルフォルダを使いまわしてたりいろいろしてたらデータ消えたりしてたんで。）
        <br /><br />
        自作のWebアプリを紹介していきます！
        ほんとはiPhoneで動くネイティブアプリとか作りたいんだけど、
        Macないし、Apple税高いから。
        こうやってサイトって増えてくんだなー。
      </p>

      <h2>作品一覧</h2>
      <ul>
        {apps.map((app) => (
          <li key={app.name} style={{ marginBottom: 15 }}>
            <a href={app.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", fontSize: 18 }}>
              {app.name}
            </a>
            <p style={{ margin: "5px 0" }}>{app.description}</p>
          </li>
        ))}
      </ul>
      <Forum />
    </div>
  );
}


