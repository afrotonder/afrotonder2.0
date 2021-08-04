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
console.log("GOJIRAA TESTING");

// set hallow theme default
document.body.setAttribute("color-theme", "hallow");

// ---------- SET AVATAR DATA ----------
const uname = "Omar Rosado Ramirez";
const sm_uname = "O. Rosado Ramirez";
const handle = "afrotonder";
const slogan = "Full-time problem solver";
const job1 = "TuChequera.com";
const job2 = "APS Health";

document.getElementById("uname").innerText = uname + "!";
document
  .getElementById("avatar")
  .setAttribute(
    "src",
    "https://pbs.twimg.com/profile_images/1087372828473733120/eJJHI1Su_400x400.jpg"
  );

document.getElementsByClassName("header-text")[0].innerHTML = uname;

document.getElementsByClassName("header-text ht1")[0].innerHTML = slogan;

document.getElementById(
  "meet"
).innerHTML = ` I'm a software developer with 6+ years of experience
                                              creating apps and sites in a wide variety of stacks. 
                                              I'm currently a software developer @<a href="https://tuchequera.com" target="_blank">${job1}</a> 
                                              and a Business Intelligence Analyst @<a href="https://apshealth.com/" taget="_blank">
                                              ${job2}</a>.`;
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
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLVNE5VzXYTVhRHGvgEQwEtMhLXHSnqBen3cdCoqWt4SuSWe8T5r_Exiwqojum8UcfVDOWXp8bQOMHsmTosZ_nXRRJLVejQETukkHl2tLXdxyO4eZb8T8R7qkzzAK-P5k6-J19EKzgOurp0cYfDdIcMDrQ=s947-no?authuser=0"
  },
  {
    name: "grm",
    url: "https://angular-g2qjyv.stackblitz.io/",
    title: "TheGripRepo",
    alt: "Rob Zombies Halloween 2018 Pumpkin Icon",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLVUi4E7FqkIvgGH4pnB2nFQYQLycPbXPtN_LhTE4L7Qc7rSPJm6BLkJ72CtYEYt7gkqshtP2kUBCO4OHOIru3HIh7Kzx22lh9mXZoQdSEiv6-a15M5EfhA7o3oX-YV54UAtv_1IoiWXYcVvck387tcs2A=w436-h639-no?authuser=0"
  },
  {
    name: "github",
    url: "https://github.com/afrotonder",
    title: "afrotonder@GitHub",
    alt: "Github Octocat Logo",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLW-X-Evbsl5eNDvgiWpH4SVPSLajzhYuWYcUAZH4_iuuxo_Lct_fxEW94HeGfpiWakK_TrGDTA8eQ0GoBNT4SosNjz7wBwHcgBRJlt8Sb9dY-5ip2yrHmpKcVOc5q9HK7eaItyA4D2uWKKhUbhfEeq0ug=w800-h665-no?authuser=0"
  },
  {
    name: "chess",
    url: "https://www.chess.com/member/afrotonder",
    title: "afrotonder@Chess.com",
    alt: "Chess.com Icon",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLVpB_6kvN9WwGnnQfDJVAVs-I1jZ50Ew8z7G0nSDWdOEdSnbgcgoyqPimBjJGD7b7xfDpXTDxqoGgbGo4vfcHWYcrrDzI3gFdo__15fp8xzvrSZMEbHX2HFOy6qq-8SgsWfgQVWSCbRhlltUfyyMcDbGg=s947-no?authuser=0"
  },
  {
    name: "twt",
    url: "https://twitter.com/afrotonder",
    title: "afrotonder@Twitter",
    alt: "Twitter Icon",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLV_K5Pj-uRf2XF4thazQi1XU0Yfyp57GRIJ5wIndWt_no3d-QiYPqDJJ96BXoQYCmTuAMZirb3CoKx8RM3ykMOgQ9_tLcJpAug-recCbuMOilC22P6Y6l30OOQMkWHi6R17-EI-Tn_XmhcbLS3lf6PxfQ=s512-no?authuser=0"
  }
];

let tools = [
  {
    name: "JS (ES6+)",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLUKHskMuUuHO_is0ybhEjpPV8A0bNjYZ4_I9RDnmpPXfR0LyJj5TnTVmQ99HKiHIoP-YA6fsZThuW2q8akvL4xtAZArKsi31WWD9WJNQCOUBOCnE8rPlQrJ4JQzrc9qMPgq-VK3q1LnrQnir9mTGCOpMQ=s512-no?authuser=0"
  },
  {
    name: "HTML",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLVsCnvmXO27GpTOs7YIuLF36Eu-EmEARycUHFUPeSpcg8V4c_RIJoQ5uE8iCdIgu0l6jXx5B9M6SLUTm3iYFuf0xKjA8ghcaY-EuAfXhX3wVH8cZw_93Pk0CPExdwInUx4oaIMr8wk5vzCUNtOftimkcw=s512-no?authuser=0"
  },
  {
    name: "CSS/SCSS",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLX7HkxS64MFgUsVb92WFow1WZJ8bV133S4LLxrY5dQ4sZA063Hyr71KuSNka47zTYMNyHMDJ3IM6yx6O_Y0Eig0gCFd2r1a_l-UL8uh6Bi7wDEgZdIAmt9Qg5J8FdN0elCGsjCpChFsiUfzrP58ppvdhg=s512-no?authuser=0"
  },
  {
    name: "TypeScript",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLV770qUILpGj2OaHKRoxmaEUqaEl4SGl9Sy7Wg1lIiHzU5VqyoHNCcMbMnlUpkSM0Do01OZPkGG39y2myGTTB9h77gDWThkWPHK7k9UQi5Z36K4JjFWWQqrOGqGy7BnUm4d5UT9ZgtArcbEEI9uQEBUPQ=s512-no?authuser=0"
  },
  {
    name: "Angular",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLVpGumyK9XKGBu4nh3SUnbwAxce94ULnBP7NUwNuQoZkGNHzjyPwjELVHIetDPhjOtoOo5Mf9JP3mdQdX2ThMV9622bZR1VJy88sg8dlWmdUBz1NGQ4krMIxNwRlvrVuKLji_HAKqY_SFiYbP9pwX3RGA=s947-no?authuser=0"
  },
  {
    name: "Ionic",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLWmdhlto5MddcYK-_54q3ezOnrZiVQSgczG1sEVuEvvhhJBvn504XVvsp_UpJ6xX-QLrrAZ0WAGsUnpUaDyvUynwpiW3oNCBar4KyjaExrnM4lNy66wVVPxd9pIDBE3wIJ3szU8KpzC1E7iBdb8F_6dmg=s947-no?authuser=0"
  },
  {
    name: "iOS",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLX9wfiz1jC62N-n9fv-LAdEj-M-BmfdpLXEvwt7uwBRn1srovkkci6nXDpZCy1AhMmzb7TA_fUOwtWx2QSS0v3sJWMbgE-sT9sltMzYwERltbocgbvl_I5DIBMOZRa2LJp5XYibZBxOJHGKhmEXprmrBw=s512-no?authuser=0"
  },
  {
    name: "Android",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLVBimjbQm-MEAfNnaBeDTIawhg5pD6Rv81XhF4xOrQXKOlwrke_LdQPcAWE5GZvt6F_Rv9zEH16BlZldJtC_xMi2X9xpss1uQeZ2srNu8xW1WrOw41G-H5L-Bi8juP2_1nEDUh_Poj1In93_I5iaXYoAw=s600-no?authuser=0"
  },
  {
    name: "Capacitor",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLXrtT2viZGfqoSRy1uH4OaejcdNh9fUGdoIX_qMY4c85KN1VBwcanfaMGA10orXjWme1zhNty_E5ebpjvbsw532QwrUvCmg69lYo91_EJJCEZqlQ2giO_G8iAbDe5zL5w45w98qBBetbIdkksDohvyDYA=s500-no?authuser=0"
  },
  {
    name: "Python",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLURELxf92g6UaUf_bebAUodJeY4W3BMAMwaTy0CIFml1GK6dFvFFgdBrWy4hi7xI_roMDISJtjYv48oyAp8mABRUpTFQ2UQRTanSVdLUGtHYnZ72VcogyALffkUOyrSkK1T-pIQbRmAxZv3TI1G7dolZw=s512-no?authuser=0"
  },
  {
    name: "PHP",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLUJRmr_OyDI36MLRlrWv7jjK8MaWfj5RHPBaKX8vizRXd9i9rE62k6gDGlNiQEVB2obqGwXDeqCvIfpCZBYc-ug5x8R8y324-di_-xHbAtXqOiWuULjtnttJTFYPPvcCm9M2g_Qi7BwidvKUTQqBl6BfA=s512-no?authuser=0"
  },
  {
    name: "Bootstrap",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLXhEnrb4vXyO7uFe4Hk5MaEIhMR_ypSjEAwx_cKvEH8WXlxfRUX4vOIpkqItiiYKiu4AvpjeVMILq72r40c5OU39c5Ei6kaznnWPT7BNG-Q5PRAnaf1jrBKJ2ip9w4V4BW3O5Ktd4d-pHW2ypjWabXulw=w1024-h860-no?authuser=0"
  },
  {
    name: "SQL",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLXizphzEzNxlgAM1wv8E97Qaz6vIT8GvO1SYzV0CRbRw7eOkAUi_OiVN36AWVFs_Bm1OcvW4OMBXKpOrYBrb1IQ9Q040iUQiS5duEfGACgP5mans4ljhp-MOcdtb-zeB9e20lzNSantroUBcMbz-VnXRA=w397-h298-no?authuser=0"
  },
  {
    name: "WordPress",
    source:
      "https://lh3.googleusercontent.com/pw/AM-JKLV7t9t6TP4ET35dL7ru0w7Iq3593unFKsPXX7tUx44oHIAZSousQfJIMqK66AmB1p5BNoqWLtDo9Iu-FIXQWSS9QG6beTheNwZw7LyrHB17BkGHt56rjvr-_-OgmgVyIOmbUSpNYbU75shud25vlX0bMA=s512-no?authuser=0"
  }
];

// set/ renderfooter
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

// set/render tools
for (let tool of tools) {
  let elem = document.createElement("div");

  elem.setAttribute("class", "tool-icons");
  // elem.setAttribute("target", "_blank");

  elem.innerHTML =
    `<img src=` +
    tool.source +
    `  title=` +
    tool.name +
    ` alt=` +
    tool.name +
    `/>`;

  document.getElementById("tools").appendChild(elem);
}

// const rightButton = document.getElementById("scroll-right");

document.getElementById("scroll-right").onclick = function () {
  document.getElementById("tools").scrollLeft += 500;
};

// const leftButton = document.getElementById("scroll-left");

document.getElementById("scroll-left").onclick = function () {
  document.getElementById("tools").scrollLeft += -500;
};
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

// Functions //

document.getElementById("themes").onchange = function (event) {
  // 1 = hallow, 2 = 80s, 3 = plain
  console.log(this.value);
  if (this.value === "1") {
    console.log("HALLOW!");
    document.body.setAttribute("color-theme", "hallow");
  } else if (this.value === "2") {
    console.log("80s");
    document.body.setAttribute("color-theme", "ochentas");
  } else if (this.value === "3") {
    document.body.setAttribute("color-theme", "normal");
  }
};
