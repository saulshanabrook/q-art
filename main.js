const nImages = 2;
const scrollPxPerImage = 1000;

document.documentElement.style.height = `calc(${
  nImages * scrollPxPerImage
}px + 100vh)`;

function setScale(image, scale) {
  document.querySelector(
    `#images > img:nth-child(${image + 1})`
  ).style.transform = `translateX(-50%) scale(${scale})`;
}
function onScroll() {
  // The "scrollPosition" is a number from 0 to the number of images.
  const scrollPosition = window.scrollY / scrollPxPerImage;

  const backgroundImage = Math.floor(scrollPosition);
  const foregroundImage = Math.ceil(scrollPosition);

  const percentMoved = scrollPosition - backgroundImage;
  console.log({ backgroundImage, foregroundImage, percentMoved });

  setScale(backgroundImage, 1 + percentMoved);
  setScale(foregroundImage, percentMoved);
  // root.style.setProperty('--mouse-x', e.clientX + "px");
}

window.addEventListener("scroll", onScroll);
