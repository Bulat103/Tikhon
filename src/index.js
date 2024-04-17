import videojs from "video.js";
import "videojs-youtube";

var highlightedItems = document.querySelectorAll(".video-js-default");

highlightedItems.forEach(function (userItem) {
  videojs(userItem);
});
