import videojs from "video.js";
import "videojs-youtube";

export const replaceImgWithVideo = (item) => {
  const imgContainer = document.querySelector(`#video_${item.id}`);
  const img = imgContainer.querySelector(`img`);
  const btn = imgContainer.querySelector(`button`);
  const video = document.createElement("video");
  video.setAttribute(
    "data-setup",
    `{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/${item.id}"}] }`
  );
  video.setAttribute("width", item.width);
  video.setAttribute("height", item.height);
  video.setAttribute("id", `video_${item.id}`);
  video.setAttribute("controls", true);
  video.setAttribute("class", "video-js video-js-default vjs-default-skin");
  img.replaceWith(video);
  btn.remove();
  const videoItem = videojs(video);
  videoItem.autoplay("play");
};
