import Forum from "./Forum";
import React from "react";

export default function App() {
  const apps = [
    {
      name: "TrussForce",
      description:
        "部材力自動計算アプリ。💻\n実験でパソコンで結果出てんのに手計算しろって言われたので作ってみた\n（フロントとバック繋ぐのクソ大変だったし興味なくてもいいから見てって。）",
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
    {
      name: "５秒ルール練習用アプリ",
      description: "本当の５秒を知ろう。作ってから３秒ルールじゃね？って思ったけど気にしないことにした。",
      url: "https://5seconds-ueqx.vercel.app",
    },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto", fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>色々サボって作ったアプリ集</h1>
      <p style={{ whiteSpace: "pre-wrap" }}>
        こんにちは。融合系工学部３年の暇人です。
        暇すぎて（というか本当は進級のための勉強したり、院受けるならその準備したり、
        就活すべきなんだけど）、全部やりたくなくて、現実逃避で
        ひたすらアプリを作ってました（だって留年したら内定取り消されるから就活より勉強じゃんね？
        だけど勉強なんてやりたくないじゃんか。助けて😭）。
        
        なんか気付いたらまあまあ数が増えてたんで、ひとつのサイトにまとめてみました。
        
        自作のWebアプリを紹介していきます。
        ほんとはiPhoneで動くネイティブアプリとか作りたいんだけど、
        Macないし、Apple税が鬼で諦めてます。
        こんな感じで日々、現実逃避しつつエンジニア道を模索中です。大学院行くか迷ってます。
      </p>

      <h2>作品一覧</h2>
      <ul>
        {apps.map((app) => (
          <li key={app.name} style={{ marginBottom: 15 }}>
            <a href={app.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: "bold", fontSize: 18 }}>
              {app.name}
            </a>
            <p style={{ margin: "5px 0", whiteSpace: "pre-wrap" }}>{app.description}</p>
          </li>
        ))}
      </ul>

      <Forum />

      <div style={{ marginTop: 40, fontSize: 14, color: "#666" }}>
        <h3>利用規約・免責事項</h3>
        <p>
          この掲示板は匿名で誰でも投稿可能ですが、以下の内容を含む投稿は禁止です：
          <br />・誹謗中傷、差別、嫌がらせ、脅迫行為
          <br />・法令違反、公序良俗に反する内容
          <br />・個人情報の掲載（自分のでも他人のでもNG）
        </p>
        <p>
          問題のある投稿は管理者が確認次第削除する場合がありますが、常に監視・削除できるとは限りません。
          <br />
          本掲示板を利用することによって生じたトラブル・損害等について、管理者は一切の責任を負いません。
        </p>
        <p>
          本掲示板は現在テスト運用中です。予告なく機能の停止・変更・削除を行うことがあります。
        </p>
      </div>

      <div style={{ marginTop: 40, fontSize: 12, color: "#999" }}>
        <p>
          © {new Date().getFullYear()} Airi. All rights reserved.
          <br />
          このサイトに掲載されているコンテンツ（文章、アプリ、UIなど）は、
          クリエイティブ・コモンズ 表示 - 非営利 - 改変禁止 4.0 国際（CC BY-NC-ND 4.0）ライセンスの下で提供されています。
          <br />
          商用利用・無断改変・転載は禁止です。
          <br />
          ライセンス詳細:{" "}
          <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.ja" target="_blank" rel="noopener noreferrer">
            CC BY-NC-ND 4.0
          </a>
        </p>
      </div>
    </div>
  );
}
