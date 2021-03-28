//Task: 1-->

window.addEventListener("load", (e) => {
  setTimeout(changeText, 7000);
  changeImg();
});

const changeText = () => {
  let text = document.getElementById("text");
  text.innerHTML = "Design by Bishesh Sunam - 1537070";
  text.classList.add("change__text");

  let banner = document.querySelector(".banner");
  banner.classList.add("change__background");
};

const linkToPiha = () => {
  window.open("http://www.piha.co.nz/");
};

// Task 2:-->

let images = [];
let i = 0;
let time = 2000;

images[0] = "../img/task-2/p1.jpeg";
images[1] = "../img/task-2/p2.jpeg";
images[2] = "../img/task-2/p3.jpeg";
images[3] = "../img/task-2/p4.jpeg";
images[4] = "../img/task-2/p5.jpeg";
images[5] = "../img/task-2/p6.jpeg";

let text = document.getElementById("titleText");
let stdId = document.getElementById("std__Id");
let btnFindOut = document.querySelector(".btn__findout");
let fadeContainer = document.getElementById("fade");
const changeImg = () => {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
    if (i == 1) {
      text.innerHTML = "Find new escapes!";
    } else if (i == 2) {
      text.innerHTML = "Explore the nature!";
    } else if (i == 3) {
      text.classList.toggle("top")
      text.classList.add("bottom");
      text.innerHTML = "Feel the waves!";
     
    } else if (i == 4) {
      text.classList.add("bottom");
      text.innerHTML = "Visit Piha today!";
    }
    else if (i == 5){
      text.innerHTML = "Visit Piha today!";
      text.classList.toggle("top");
      stdId.innerHTML = "Bishesh Sunam- 1537070"
      stdId.classList.add("banner__sideText")
      stdId.classList.add("typewriter");
      btnFindOut.classList.add("btn__findoutVisible");
    }
  } else {
    i = 0;
    text.classList.add("banner__sideText");
  }

  if (i == images.length - 1) {
    btnFindOut.classList.add("btn__findoutVisible");
    clearInterval(intervalId);
    return;
  }
  setTimeout("changeImg()", time);
  
};

let intervalId = setInterval(() => {
  fadeContainer.classList.toggle("fade");
}, 1000);
