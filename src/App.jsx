import Forum from "./Forum";
import React from "react";

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
    <div
      style={{
        display: "flex",
        maxWidth: 1000,
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        padding: 20,
        gap: 20,
      }}
    >
      {/* 左サイドバー */}
      <aside style={{ width: 200, borderRight: "1px solid #ccc", paddingRight: 10 }}>
        <h3>リンク集</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            <a href="https://x.com/RBWHhj7GOh79960" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/Airi20" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          
        </ul>
        <h3>おすすめアプリ</h3>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>
            <a href="https://trussfront.onrender.com/" target="_blank" rel="noreferrer">
              TrussForce
            </a>
          </li>
          <li>
            <a href="https://mine-sweeper2.vercel.app/" target="_blank" rel="noreferrer">
              爆速マインスイーパー
            </a>
          </li>
        </ul>
      </aside>

      {/* メインコンテンツ */}
      <main style={{ flexGrow: 1 }}>
        <h1>動けば正義のアプリ集</h1>
        <p style={{ whiteSpace: "pre-wrap" }}>
          こんにちは。チャットGPTにドハマリしてて、自分のアプリにAIつけようとしたら、無料枠オーバーしててできなかった人です。
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
            <br />
            ・誹謗中傷、差別、嫌がらせ、脅迫行為
            <br />
            ・法令違反、公序良俗に反する内容
            <br />
            ・個人情報の掲載（自分のでも他人のでもNG）
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
      </main>

      {/* 右サイドバー */}
      <aside style={{ width: 200, borderLeft: "1px solid #ccc", paddingLeft: 10 }}>
        <h3>広告スペース</h3>
        <div
          style={{
            backgroundColor: "#eee",
            height: 200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          広告募集してます。無料です。
        </div>
        <h3>最近のつぶやき</h3>
        <p style={{ fontSize: 12, color: "#666" }}>「にゃーん」</p>
        <p style={{ fontSize: 12, color: "#666" }}>「最近React頑張ってる！」</p>
        <p style={{ fontSize: 12, color: "#666" }}>「提出期限に追われない人生はどんなに素晴らしいだろうか。」</p>
        <p style={{ fontSize: 12, color: "#666" }}>「ほんとは料理人になりたかった」</p>
      </aside>
    </div>
  );
}
