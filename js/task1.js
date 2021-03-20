window.addEventListener("load", (e) => {
  setTimeout(changeText, 7000);
});

const changeText = () => {

  let text = document.getElementById("text");
  text.innerHTML = "Design by Bishesh Sunam - 1537070";
  text.classList.add("change__text");

  let banner = document.querySelector(".banner")
   banner.classList.add("change__background");
};
