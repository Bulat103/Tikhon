import { replaceImgWithVideo } from "./replaceImgWithVideo";

export const renderPreview = (startIndex, endIndex, videos) => {
  const vidoesContainer = document.querySelector(".vidoes_container");

  const renderPreviewImage = (item, number) => {
    const container = document.createElement("div");
    container.setAttribute("class", "preview_img_container");
    container.setAttribute("data-tags", item.tags);
    container.setAttribute("id", `video_${item.id}`);
    container.setAttribute("data-number", number);
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      `https://i.ytimg.com/vi_webp/${item.id}/maxresdefault.webp`
    );

    img.setAttribute("width", item.width);
    img.setAttribute("height", item.height);
    img.setAttribute("id", `video_${item.id}`);
    img.setAttribute("class", "preview_img");
    const btn = document.createElement("button");
    btn.classList.add("start_play");
    btn.innerText = "Play";
    container.append(img);
    container.append(btn);
    container.addEventListener("click", () => replaceImgWithVideo(item));
    vidoesContainer.append(container);
  };

  for (let i = startIndex; i < endIndex; i++) {
    renderPreviewImage(videos[i], i);
  }
};
