import videojs from "video.js";
import "videojs-youtube";
import "./style.css";
// var highlightedItems = document.querySelectorAll(".video-js-default");

// highlightedItems.forEach(function (userItem) {
//   videojs(userItem);
// });

// https://i.ytimg.com/vi_webp/38T5cGSaE_0/maxresdefault.webp
// https://i.ytimg.com/vi_webp/AqZH9AdpjIU/maxresdefault.webp

const app = document.querySelector("#app");
const img = document.querySelector(".preview_img");

document.addEventListener("DOMContentLoaded", () => {
  new Array(150).fill(null).forEach(() => {
    var clonedImage = img.cloneNode(true);
    app.appendChild(clonedImage);
  });
});
// img.addEventListener("click", () => {
//   const video = document.createElement("video");
//   video.setAttribute(
//     "data-setup",
//     '{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/nGotKeVGoSQ"}] }'
//   );
//   video.setAttribute("width", "300px");
//   video.setAttribute("height", "200px");
//   video.setAttribute("id", "1v");
//   video.setAttribute("controls", true);
//   video.setAttribute("class", "video-js video-js-default vjs-default-skin");
//   // app.append(video);
//   img.replaceWith(video);
//   const item = videojs(video);
//   item.autoplay("play");
//   // item.ready(() => {
//   //   setTimeout(() => {
//   //     item.play();
//   //   }, 500);
//   // });
// });

const ids = {
  1: "GvnPZNYsPf8",
  2: "hW8ZiDI3Ju8",
  3: "OJHy-Y1Dl_w",
  4: "u_OTfAIx1GU",
  5: "ncGwS9FKlvw",
  6: "nALF5uWphf0",
  7: "1i_Vkiecan4",
  8: "FY0zSPAUtFg",
  9: "fgrMZW8AWgw",
  10: "WqTpdg40mTQ",
  11: "xQfzwHABmO4",
  12: "XRza2tV-Ifw",
  13: "17lR-pDGelE",
};
