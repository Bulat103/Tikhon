import "./style.css";
import ids from "./ids.json";
import { renderPreview } from "./renderPreviewImage";
import myimg from "./assets/images/IMG_53ACF2134C5F-1.png";

let videos = [...ids];
let filters = [];
const tagBtns = document.querySelectorAll(".hashtag");

// -----------------------------------------------------------------------
const hidePreloader = () => {
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1000);
};

// -----------------------------------------------------------------------
const changeFooterAboutInfoVisibility = () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight - 20) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
};

// ----------------------------------------------------------------------------------------
const observer = new IntersectionObserver((entries) => {
  const lastImgNumber = document.querySelectorAll(".preview_img").length;
  console.log(document.querySelectorAll(".preview_img"));
  let endIndex = lastImgNumber + 15;
  console.log(entries);
  if (videos.length - lastImgNumber < 15) {
    endIndex = videos.length;
  }
  if (entries[0].isIntersecting) {
    renderPreview(lastImgNumber, endIndex, videos);
  }
});

const intersection = document.getElementById("intersection");
if (intersection) {
  observer.observe(intersection);
}
// -----------------------------------------------------------------------
function toggleTag(tag) {
  if (tag.classList.contains("selected")) {
    tag.classList.remove("selected");
  } else {
    tag.classList.add("selected");
  }
}

const isTagSelected = (tag) => {
  if (tag.classList.contains("selected")) {
    return true;
  } else {
    return false;
  }
};

const filterVideo = () => {
  videos = videos.filter(
    (video) =>
      filters.filter((item) => video.tags.includes(item)).length >=
      filters.length
  );
};

const disableTagBtns = () => {
  tagBtns.forEach((btn) => {
    const tag = btn.getAttribute("data-tag");
    let isBtnDisabled = true;
    videos.forEach((video) => {
      const isVideoContainTag = video.tags
        .split(" ")
        .filter((el) => el === tag).length;
      if (isVideoContainTag) {
        isBtnDisabled = false;
      }
    });
    if (!btn.classList.contains("select") && isBtnDisabled) {
      btn.setAttribute("disabled", isBtnDisabled);
    } else {
      btn.removeAttribute("disabled");
    }
  });
};

// -------
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("hashtag")) {
    const tagElement = event.target;
    const tag = tagElement.getAttribute("data-tag");
    toggleTag(tagElement);
    if (isTagSelected(tagElement)) {
      filters.push(tag);
    } else {
      filters = filters.filter((item) => item != tag);
    }
    filterVideo();
    disableTagBtns();
    const vidoesContainer = document.querySelector(".vidoes_container");
    vidoesContainer.innerHTML = "";
    renderPreview(0, videos.length, videos);
    return;
  }

  if (event.target.classList.contains("preview_img_container")) {
    const id = event.target.getAttribute("id");
    const videoItem = videos.find((el) => el.id === id);
    replaceImgWithVideo(videoItem);
  }

  if (event.target.classList.contains("reset-tags")) {
    videos = [...ids];
    tagBtns.forEach((btn) => {
      btn.removeAttribute("disabled");
      btn.classList.remove("selected");
    });
    filters = [];
    const vidoesContainer = document.querySelector(".vidoes_container");
    vidoesContainer.innerHTML = "";
    renderPreview(0, 15, videos);
  }
});

// -------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  hidePreloader();
});

// -----------------------------------------------------------------------
const footer = document.querySelector("footer");

window.addEventListener("scroll", changeFooterAboutInfoVisibility);

document.querySelector(".feedback_btn").addEventListener("click", () => {
  footer.classList.add("visible");
});

// ---------------------------------------------------------
const avatarImg = document.createElement("img");
avatarImg.setAttribute("src", myimg);
document.querySelector(".avatar").appendChild(avatarImg);
