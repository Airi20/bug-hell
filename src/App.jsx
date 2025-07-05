import Forum from "./Forum";
import React from "react";
import "./style.css"; // CSSファイル読み込み

export default function App() {
  const apps = [
    {
      name: "TrussForce",
      description:
        "部材力自動計算アプリ（送信に１分くらいかかるよ）。💻\n実験でパソコンで結果出てんのに手計算しろって言われたので作ってみた。",
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
    {
      name: "つなげて１２",
      description: "縦、横、斜めに指をスライドさせて、足して１２になるようにするゲームです。",
      url: "https://20-lake.vercel.app/",
    },
    {
      name: "ジャンプして障害物をよけるゲーム",
      description: "BGMはスタワンでカバーしました。",
      url: "https://dinosaur4.vercel.app/",
    },
  ];

  return (
    <div className="container">
      <aside className="sidebar left">
        <h3>リンク集</h3>
        <ul>
          <li><a href="https://x.com/RBWHhj7GOh79960" target="_blank">Twitter</a></li>
          <li><a href="https://github.com/Airi20" target="_blank">GitHub</a></li>
        </ul>
        <h3>おすすめアプリ</h3>
        <ul>
          <li><a href="https://trussfront.onrender.com/" target="_blank">TrussForce</a></li>
          <li><a href="https://mine-sweeper2.vercel.app/" target="_blank">マインスイーパー</a></li>
        </ul>
      </aside>

      <main className="main">
        <h1>動けば正義のアプリ集</h1>
        <p className="intro">
          こんにちは。チャットGPTにドハマリしてて、自分のアプリにAIつけようとしたら、無料枠オーバーしててできなかった人です。
        </p>

        <h2>作品一覧</h2>
        <ul className="app-list">
          {apps.map((app) => (
            <li key={app.name}>
              <a href={app.url} target="_blank" rel="noopener noreferrer">{app.name}</a>
              <p>{app.description}</p>
            </li>
          ))}
        </ul>

        <Forum />

        <div className="legal">
          <h3>利用規約・免責事項</h3>
          <p>
            この掲示板は匿名で誰でも投稿可能ですが、以下の内容を含む投稿は禁止です：
            <br />・誹謗中傷、差別、嫌がらせ、脅迫行為
            <br />・法令違反、公序良俗に反する内容
            <br />・個人情報の掲載（自分のでも他人のでもNG）
          </p>
          <p>
            問題のある投稿は管理者が確認次第削除する場合がありますが、常に監視・削除できるとは限りません。
          </p>
        </div>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Airi. All rights reserved.
            <br />
            本サイトのコンテンツは CC BY-NC-ND 4.0 ライセンスです。
          </p>
        </footer>
      </main>

      <aside className="sidebar right">
        <h3>広告スペース</h3>
        <div className="ad-box">
          😇 早く寝よう。 <br />
          日々、アプリを作って現実逃避中。<br />
          いつかこれが誰かの役に立ったらうれしい。
        </div>
        <h3>最近のつぶやき</h3>
        <p>「React頑張ってる！」</p>
        <p>「ほんとは料理人になりたかった」</p>
      </aside>
    </div>
  );
}
