// import Typed from "typed.js";
// not going to use this
// // ---------- HEADER ----------
// let headText = ["Web Dev", "Hot Dogs"];

// const options = {
//   strings: [headText[0]],
//   typeSpeed: 100,
//   loop: "true"
// };

// const options1 = {
//   strings: [headText[1]],
//   typeSpeed: 100,
//   loop: "true"
// };

// const typedHeader = new Typed(".header-text", options);
// const typedHeader1 = new Typed(".ht1", options1);

// ---------- END HEADER ----------

// ---------- SET AVATAR DATA ----------
const uname = "Omar Rosado Ramirez";
const sm_uname = "O. Rosado Ramirez";
const handle = "afrotonder";
const slogan = "Full-time problem solver";

document.getElementById("uname").innerText = uname;
document
  .getElementById("avatar")
  .setAttribute(
    "src",
    "https://pbs.twimg.com/profile_images/1087372828473733120/eJJHI1Su_400x400.jpg"
  );

document.getElementsByClassName("header-text")[0].innerHTML = uname;

document.getElementsByClassName("header-text ht1")[0].innerHTML = slogan;
// ---------- END SET AVATAR DATA ----------

// ---------- ICON DATA----------
let imgs = [
  // {
  //   name: "ig",
  //   url: "https://www.instagram.com/afrotonder/?hl=es-la",
  //   title: "afrotonders Instagram",
  //   alt: "Instagram Icon",
  //   source: "assets/instagram-icon.png"
  // },
  {
    name: "lin",
    url: "linkedin.com/in/afrotonder/",
    title: "afrotonder@LinkedIn",
    alt: "LinkedIn Icon",
    source: "assets/linkedin-icon.png"
  },
  {
    name: "grm",
    url: "https://angular-g2qjyv.stackblitz.io/",
    title: "TheGripRepo",
    alt: "Rob Zombies Halloween 2018 Pumpkin Icon",
    source: "assets/halloween2018.png"
  },
  {
    name: "github",
    url: "https://github.com/afrotonder",
    title: "afrotonder@GitHub",
    alt: "Github Octocat Logo",
    source: "assets/Octocat.png"
  },
  {
    name: "chess",
    url: "https://www.chess.com/member/afrotonder",
    title: "afrotonder@Chess.com",
    alt: "Chess.com Icon",
    source: "assets/chesscomicon.png"
  },
  {
    name: "twt",
    url: "https://twitter.com/afrotonder",
    title: "afrotonder@Twitter",
    alt: "Twitter Icon",
    source: "assets/twittericon.png"
  }
];

for (let img of imgs) {
  let elem = document.createElement("a");

  elem.setAttribute("href", img.url);
  elem.setAttribute("target", "_blank");

  elem.innerHTML =
    `<img src=` +
    img.source +
    `  title=` +
    img.title +
    ` alt=` +
    img.alt +
    `/>`;

  document.getElementById("social-icons").appendChild(elem);
}

// --------------- set Description --------------- //

// set normal desc

// set mobile desc

// --------------- set Description --------------- //

// --------------- set footer data --------------- //
const footer = "afrotonder © ";
let year = new Date().getFullYear();

document.getElementsByClassName("footer-text")[0].innerHTML =
  footer + year.toString();
// --------------- set footer data --------------- //
