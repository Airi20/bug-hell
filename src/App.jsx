import Forum from "./Forum";
import React from "react";
import "./style.css"; // CSSファイル読み込み
import TodaysFortune from "./components/TodaysFortune";
import UpComment from "./components/UpComment";


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
    {
      name: "HumanOS 起動中...",
      description: "コンピューターでも、起動遅いときがある。",
      url: "https://emotional-support-kappa.vercel.app/",
    },
    {
      name: "npm恋愛バグ",
      description: "「貴方解剖純愛歌死ね」のLINE MVから着想を得て、恋愛こじらせまくった人の心情をコマンドプロンプト風に表現してみた。",
      url: "https://error-love.vercel.app/",
    },
    {
      name: "弾をよけるゲーム",       
      description: "クリア時間競えるよ。<>で移動、スペースで攻撃。パソコンじゃないとできない。",
      url: "https://git-main-airi20s-projects.vercel.app/",
    },
    {
      name: "数独",     
      description: "うｐ主の愚痴コメント付き。",
      url: "https://sudoku-one-smoky.vercel.app/",
    },
    {
      name: "オセロ",
      description: "黄色いところをクリックするだけっていう。",
      url: "https://othello-six.vercel.app/",
    },
    {
      name: "ナイチンゲールの配信ゲーム",
      description: "ブロックを回転させて横一列そろえたら消える。天井着いたらゲームオーバー。",
      url: "https://nightingale-s-streaming-game.vercel.app/",
    },
    
  ];

  return (
    <div className="container">
      <aside className="sidebar left">
        <h3>リンク集</h3>
        <ul>
          <li><a href="https://github.com/Airi20" target="_blank">GitHub</a></li>
          <li><a href="https://note.com/cool_drake1171" target="_blank">note</a></li>
        </ul>
        <h3>おすすめアプリ</h3>
        <ul>
          <li><a href="https://trussfront.onrender.com/" target="_blank">TrussForce</a></li>
          <li><a href="https://mine-sweeper2.vercel.app/" target="_blank">マインスイーパー</a></li>
          <li><a href="https://error-love.vercel.app" target="_blank">私、恋愛向いてない。</a></li>
        </ul>
        <h3>おすすめの話</h3>
        <ul>
          <li><a href="https://yesterday-teal.vercel.app/" target="_blank">シンプルにここの空白を埋めたいだけなんだけど😇</a></li>
          <li><a href="https://pro3-ten.vercel.app/" target="_blank">雑談🍵</a></li>
        </ul>

      </aside>

      <main className="main">
  <h1 style={{ fontSize: "20px" }}>動けば正義のアプリ集</h1>
  <p className="intro">
    こんにちは。<del>最近鬱です。</del>日々アプリを作って現実逃避している非情報系学部３年です。<br />
    鬱っぽいけどミセスが聴けるのでまだ心に余白あるかなと思ってます。<br />
    自分でも何個作ったのか分からないので、思い出せる範囲でかき集めました。<br />
    有名どころ（？）から、「誰得？」なやつまで雑多に置いてます。<br />
    基本「動けばOK」精神で作ってるので、気軽に触ってやってください。<br />
    最近ちょっと心がバグってますが、まぁなんとか生きてます。<br />
    ゆるくダラダラ、時々現実逃避。そんな感じで今後もやっていきます。<br />
    <br />
    それでは、テキトーに遊んでいってね。<br />
  </p>
  <br />



  <>
    
    <UpComment />
    {/* 他のコンテンツ */}
  </>



<br />

  <p>それにしても、お腹いてえええええ。。。<br />
  😢</p>

  <p><del>マジで生きてるだけで偉いし。もっと褒めてくれたっていいじゃんね。ほめられたい需要が多すぎて、ほめる人材不足してる現代。</del>
  <br />
  <br />
  バイク免許取るか、Macを買うかの２択で悩んでいます。<br />去年お金を使いすぎて貯金があんまりなくてどっちかです。<br />
  Mac買えばAppStoreにアプリが出せる。バイク免許取れば気軽に旅行に行ける。</p>

  <p><del>誰かー、無理して働かなくていいよーって言って(´•ω•̥`)…ｸﾞｽﾝ</del>
  <br /><del>お腹すくの鬱。また食わなきゃってなる。重症。( ；∀；)</del></p>

  <p><del>それにしても、人生に希望をもって、あれやりたいとかこれやりたいとか言えてる人って神経どうなってんの？？？🥺<br />
  毎日生活するだけでしんどいし必死なのに。</del></p>












  

        <h2 style={{ fontSize: "20px" }}>作品一覧</h2>
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
        <h3>制作主からのコメント</h3>
        <div className="ad-box">
          😇 早く寝よう。 <br />
          日々、アプリを作って現実逃避中。<br />
          いつかこれが誰かの役に立ったらうれしい。<br />

        
          
        </div>
        <h3>最近のつぶやき</h3>
        <p>💤😴<br />
        ほんとは料理人になりたかった！かもしれない。<br />
        何もしない日も必要です。<br />
        最近、心がバグってます。<br />
        消化不良だしカフェイン中毒だし頭痛いし鬱っていうね。
        みんなも、無理せずにね。<br />
        どうやって生きていこうかなー。<br />
        <br />
        <del>仕方がないから期末の勉強でもするかー。</del>
        <br />
        <br />
        多動なんだよな。<br />
        最近スペースキーの調子がおかしい。<br />
        ビビるぐらい家のWi-Fi不安定<br />
        物理好きだったのに、今は何故か生物学んでるし、学校の勉強そっちのけでコードいじってるし、どこで人生間違えた？ｗｗ<br />
        結局多動性だから分野はどこでもいいんだよな。<br />
        Macほちぃ。<br />
        Macかバイクの免許かどっちにしようｗ<br />
        バイト増やすかー😭<br />
        </p>
      </aside>
    </div>
  );
}
