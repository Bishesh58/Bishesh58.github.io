//Task: 1----->

window.addEventListener("load", (e) => {
  setTimeout(changeText, 7000);
  changeImg();
  showSummary();
});

const changeText = () => {
  let text = document.getElementById("text");
  text.innerHTML = "Bishesh Sunam - 1537070";
  text.classList.add("change__text");

  let banner = document.querySelector(".banner");
  banner.classList.add("change__background");
};

const linkToPiha = () => {
  window.open("http://www.piha.co.nz/");
};


// Task 2:------->
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
      text.classList.toggle("top");
      text.classList.add("bottom");
      text.innerHTML = "Feel the waves!";
    } else if (i == 4) {
      text.classList.add("bottom");
      text.innerHTML = "Visit Piha today!";
    } else if (i == 5) {
      text.innerHTML = "Visit Piha today!";
      text.classList.toggle("top");
      stdId.innerHTML = "Bishesh Sunam- 1537070";
      stdId.classList.add("banner__sideText");
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

// Task 3: ---------> 
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");


tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    //remove active class
    removeActiveClass();
    //add active to only target whichever clicked
    tab.classList.add("active");
    target.classList.add("active");
  });
});


let page1 = document.getElementById("page__1");
let page2 = document.getElementById("page__2");
let page3 = document.getElementById("page__3");
let page4 = document.getElementById("page__4");

//next page
const nxtPage = () => {
  if(page1.classList.contains("active")){
    removeActiveClass();
    tabs[1].classList.add("active");
    tabContents[1].classList.add("active");
  }
  else if(page2.classList.contains("active")){
    removeActiveClass();
    tabs[2].classList.add("active");
    tabContents[2].classList.add("active");
  }
  else if (page3.classList.contains("active")){
    removeActiveClass();
    tabs[3].classList.add("active");
    tabContents[3].classList.add("active");
  }
};

//prev page
const prevPage = ()=>{
  if(page2.classList.contains("active")){
    removeActiveClass();
    tabs[0].classList.add("active");
    tabContents[0].classList.add("active");
  }
  else if(page3.classList.contains("active")){
    removeActiveClass();
    tabs[1].classList.add("active");
    tabContents[1].classList.add("active");
  }
  else if (page4.classList.contains("active")){
    removeActiveClass();
    tabs[2].classList.add("active");
    tabContents[2].classList.add("active");
  }
}

//helper function for removing the active class
const removeActiveClass =()=>{
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active");
  });
}
//get the form
const myForm = document.querySelector("form");
/* formdata = new FormData will create an object,
Object.entries() will return an array with [key value] (not necessay sorted)
Object.formEntries transforms list of key value pairs into an object
*/
const data = Object.fromEntries(new FormData(myForm).entries());

let btnSubmit = document.getElementById("submit");
const showSummary = () => {
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
    }
  });
};
