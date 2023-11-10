const img = [
  "..########################...........".split(""),
  "..#......................#...#####...".split(""),
  "..#..........########....#####...#...".split(""),
  "..#..........#......#............#...".split(""),
  "..#..........########.........####...".split(""),
  "..######......................#......".split(""),
  ".......#..#####.....###########......".split(""),
  ".......####...#######................".split(""),
];

const height = img.length;
const width = img[0].length;

const printImg = () => {
  for(let i = 0; i < img.length; i++) {
    console.log(img[i].join(""));
  }
}

// poate sa dea stack overflow daca imaginea e foarte mare
function fill(img, x, y, newChar, oldChar) {
  // cred ca e in cazul in care nu e specificat ca argument oldChar
  if (oldChar === undefined) {
    oldChar = img[y][x];
  }

  // daca ma lovesc de un element ce nu e oldChar ma opresc sa nu il rescriu
  if ((oldChar === newChar) || (img[y][x] !== oldChar)) {
    return;
  }

  // rescriu pixelul
  img[y][x] = newChar;

  // merg in jos
  if ((y + 1 < height) && (img[y+1][x] === oldChar)) {
    fill(img, x, y+1, newChar, oldChar);
  }

  // merg in sus
  if ((y - 1 > 0) && (img[y-1][x] === oldChar)) {
    fill(img, x, y-1, newChar, oldChar);
  }

  // merg in dreapta
  if ((x + 1 < width) && (img[y][x+1] === oldChar)) {
    fill(img, x+1, y, newChar, oldChar);
  }

  // merg in stanga
  if ((x - 1 >= 0) && (img[y][x-1] === oldChar)) {
    fill(img, x-1, y, newChar, oldChar);
  }
  return;
}

// fill(img, 3, 3, '1');
// fill(img, width-1, 0, '0')

function fillIter(img, x = 0, y = 0, newChar = 0) {
  const stack = [[y,x]];
  const oldChar = img[y][x];

  while(stack.length > 0) {
    const [py, px] = stack.pop();
    img[py][px] = newChar;

    // dreapta
    if (px + 1 < width && img[py][px+1] === oldChar) {
      stack.push([py, px+1]);
    }

    // dreapta
    if (px - 1 >= 0 && img[py][px-1] === oldChar) {
      stack.push([py, px-1]);
    }

    // jos
    if (py + 1 < height && img[py+1][px] === oldChar) {
      stack.push([py+1, px]);
    }

    // sus
    if (py - 1 >= 0 && img[py-1][px] === oldChar) {
      stack.push([py-1, px]);
    }
  }
}

fillIter(img, width-1, 0);

printImg();
