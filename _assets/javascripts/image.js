// Utility functions
// =============================================================================
function random(height = 300, width = 500, grey = false, blur = false) {
  if (typeof height !== "number" || typeof width !== "number") {
    throw new Error("Either height or width is not a number. NaN!");
  }
  if (typeof grey !== "boolean" || typeof blur !== "boolean") {
    throw new Error("grey and/or blur should be a boolean!");
  }
  let imgNum, imgURL;
  let imgArray = [
    0,
    1,
    100,
    1000,
    1001,
    1005,
    1010,
    1018,
    1025,
    1031,
    1041,
    1044,
    1060
  ]

  imgNum = imgArray[Math.floor(Math.random() * imgArray.length)]
  imgURL = `https://unsplash.it/${
    grey ? "g/" : ""
    }${width}/${height}?image=${imgNum}${blur ? "&blur=3" : ""}`;

  return imgURL;
}

// Export functions
// =============================================================================

function oneImg(height = 300, width = 500, grey = false, blur = false) {
  return random(height, width, grey, blur);
}

function manyImgs(
  height = 300,
  width = 500,
  number = 6,
  grey = false,
  blur = false
) {
  if (typeof number !== "number") {
    throw new Error("The number of images should be a number!");
  }
  const imgUrl = random(height, width, grey, blur);
  const imgId = parseInt(imgUrl.match(/image=([^&]+)/)[1]);
  let arr = [];
  for (let i = 0; i < number; i++) {
    let newUrl = imgUrl.replace(imgId, Math.floor(Math.random() * 1000));
    arr.push(newUrl);
  }

  return arr;
}


// CUSTOM CODE
var w = window.innerWidth;
var h = window.innerHeight;

const url = oneImg(h, w, false, true)
const header = document.getElementById('title-img');
header.setAttribute('src', url)
