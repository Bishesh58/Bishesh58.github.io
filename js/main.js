//Task: 1----->

window.addEventListener("load", (e) => {
  changeImg();
  showSummary();
});

const changeText = () => {
  let text = document.getElementById("text");
  text.innerHTML = "Bishesh Sunam - 1537070";
  text.classList.add("change__text");
  let banner = document.querySelector(".banner");
};
setTimeout(changeText, 7000);

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
      document.querySelector(".btnReplay").style.display = "block";
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

const replay = () => {
  let elem = document.getElementById("banner__side").innerHTML;
  document.getElementById("banner__side").innerHTML = elem;
  changeImg();
  let intervalId = setInterval(() => {
    fadeContainer.classList.toggle("fade");
  }, 1000);
};

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
  progressBar();
  if (page1.classList.contains("active")) {
    removeActiveClass();
    tabs[1].classList.add("active");
    tabContents[1].classList.add("active");
  } else if (page2.classList.contains("active")) {
    removeActiveClass();
    tabs[2].classList.add("active");
    tabContents[2].classList.add("active");
  } else if (page3.classList.contains("active")) {
    removeActiveClass();
    tabs[3].classList.add("active");
    tabContents[3].classList.add("active");
  }
};

//prev page
const prevPage = () => {
  progressBar();
  if (page2.classList.contains("active")) {
    removeActiveClass();
    tabs[0].classList.add("active");
    tabContents[0].classList.add("active");
  } else if (page3.classList.contains("active")) {
    removeActiveClass();
    tabs[1].classList.add("active");
    tabContents[1].classList.add("active");
  } else if (page4.classList.contains("active")) {
    removeActiveClass();
    tabs[2].classList.add("active");
    tabContents[2].classList.add("active");
  }
};

//helper function for removing the active class
const removeActiveClass = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
  tabContents.forEach((tabContent) => {
    tabContent.classList.remove("active");
  });
};

//showing summary of all data
const myForm = document.querySelector("form");
let btnSubmit = document.getElementById("submit");
let parentDiv = document.getElementById("summary__container");
let childDiv = document.createElement("div");
childDiv.setAttribute("id", "childDiv");
//by default form will submit if button click so preventing from page refresh
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const showSummary = () => {
  progressBar();
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let data = new FormData(myForm);
    for (let entries of data) {
      //console.log(entries);
      const [key, value] = entries;
      el = document.createElement("div");
      el.setAttribute("id", "singleDiv");
      el.innerHTML += `${key} : ${value}`;
      childDiv.appendChild(el);
      parentDiv.appendChild(childDiv);
    }
    nxtPage();
  });
};

//reset fields & summary
btnReset = document.getElementById("btnreset");
btnReset.addEventListener("click", (e) => {
  e.preventDefault();
  progressFill.style.width = "0%";
  myForm.reset();
  let data = new FormData(myForm);
  for (let [key, value] of data) {
    document.getElementById("singleDiv")?.remove();
  }
  removeActiveClass();
  childDiv.remove();
  tabs[0].classList.add("active");
  tabContents[0].classList.add("active");
});

// progress method 1--->
/*
const progressBar = () => {
  let data = new FormData(myForm);
  for (let [key, value] of data) {
    console.log(key, value);
  }
};
*/

//progress bar method 2--->

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let dob = document.getElementById("dob");

let male = document.getElementById("male");
let female = document.getElementById("female");
let others = document.getElementById("others");
let street = document.getElementById("street");
let city = document.getElementById("city");
let zip = document.getElementById("zip");

let checkInDate = document.getElementById("checkInDate");
let checkOutDate = document.getElementById("checkOutDate");
let adults = document.getElementById("adults");
let child = document.getElementById("child");
let cooking = document.getElementById("cooking");
let swimming = document.getElementById("swimming");
let color = document.getElementById("color");

let license = document.getElementById("license");
let passport = document.getElementById("passport");
let other = document.getElementById("other");
let cardHolder = document.getElementById("cardHolder");
let cardNumber = document.getElementById("cardNumber");
let expiry = document.getElementById("expiry");
let cvv = document.getElementById("cvv");
let tc = document.getElementById("tc");
let rating = document.getElementById("rating")

let progressFill = document.getElementById("progress__fill");
const progressBar = () => {
  let i = (j = k = 0);

  if (fname.value) {
    i++;
  }
  if (lname.value) {
    i++;
  }
  if (email.value) {
    i++;
  }
  if (phone.value) {
    i++;
  }
  if (dob.value) {
    i++;
  }

  if (male.checked || female.checked || others.checked) {
    i++;
  }
  if (street.value) {
    i++;
  }
  if (city.value) {
    i++;
  }
  if (zip.value) {
    i++;
  }

  if (checkInDate.value) {
    j++;
  }
  if (checkOutDate.value) {
    j++;
  }
  if (adults.value) {
    j++;
  }
  if (child.value) {
    j++;
  }

  if (cooking.checked) {
    j++;
  }
  if (swimming.checked) {
    j++;
  }
  if (license.checked || passport.checked || other.checked) {
    k++;
  }
  if (cardHolder.value) {
    k++;
  }
  if (cardNumber.value) {
    k++;
  }
  if (expiry.value) {
    k++;
  }
  if (cvv.value) {
    k++;
  }
  if (tc.checked) {
    k++;
  }
  if(rating.value){
    k++;
  }
  //either first page, second page or third page is completed
  if (i == 9 || j == 6 || k == 7) {
    progressFill.style.width = "33.33%";
  }
  //first and second page is completed
  if (i == 9 && j == 6) {
    progressFill.style.width = "66.99%";
  }
  //first and third page is completed
  if (i == 9 && k == 7) {
    progressFill.style.width = "66.99%";
  }
  //second and third page is completed
  if (j == 6 && k == 7) {
    progressFill.style.width = "66.99%";
  }
  //all three page is completed
  if (i == 9 && j == 6 && k == 7) {
    progressFill.style.width = "100%";
  }
};
