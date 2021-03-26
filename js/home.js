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

images[0] = "../assets/p1.jpeg";
images[1] = "../assets/p2.jpeg";
images[2] = "../assets/p3.jpeg";
images[3] = "../assets/p4.jpeg";
images[4] = "../assets/p5.jpeg";

let text = document.querySelector(".banner__sideText");
let btnFindOut = document.querySelector(".btn__findout");

const changeImg = () => {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
    if(i == 1){
      text.innerHTML = "Find new escapes!"
    }
    else if(i == 2){
      text.innerHTML = "Explore the nature!"
    }
    else if (i == 3){
      text.innerHTML = "Feel the waves!"
      text.classList.remove('banner__sideText');
      text.classList.add("banner__sideTextBottom");
    }
    else if(i == 4){
      text.innerHTML = "Visit Piha today!";
    }
    else{
      return;
    }
   
  } else {
    i = 0;
    text.classList.add('banner__sideText');
  }

  if(i === images.length - 1){
    btnFindOut.classList.add('btn__findoutVisible');
  }

  setTimeout("changeImg()", time);

};
