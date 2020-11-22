const nImages = 2;
const scrollPxPerImage = 2000;

document.documentElement.style.height = `calc(${
  nImages * scrollPxPerImage
}px + 100vh)`;

function setStyle(image, scale, opacity) {
  const style = document.querySelector(`#images > img:nth-child(${image + 1})`)
    .style;
  // at the end, it should be scaled to the number
  style.transform = `translateX(-50%) scale(${scale})`;
  style.opacity = opacity;
}

function onScroll() {
  // The "scrollPosition" is a number from 0 to the number of images.
  const scrollPercent = window.scrollY / (nImages * scrollPxPerImage);
  document.querySelector(`#images`).style.transform = `scale(${Math.pow(
    100,
    scrollPercent * nImages
  )})`;
  // const backgroundImage = Math.floor(scrollPosition);
  // const foregroundImage = Math.ceil(scrollPosition);

  // const percentMoved = scrollPosition - backgroundImage;

  // // Set background image to be scaled up as we move and so with foreground
  // for (let i = 0; i <= nImages; i++) {
  //   switch (i) {
  //     case backgroundImage:
  //       setStyle(i, 1 + percentMoved, 1 - percentMoved);
  //       break;
  //     case foregroundImage:
  //       setStyle(i, percentMoved, 1);
  //       break;
  //     default:
  //       setStyle(i, 0, 0);
  //   }
  // }
}

window.addEventListener("scroll", onScroll);
