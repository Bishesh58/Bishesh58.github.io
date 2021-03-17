let result = 0;
const showResult = () => {
  let inputText = document.getElementById("inputText").value;
  let output = document.getElementById("output");
  if (inputText !== "") {
    select = document.getElementById("select");
    if (select.selectedIndex === 0) {
      result += parseInt(inputText);
      output.innerHTML = `Your result is: ${result}`;
    }
    if (select.selectedIndex === 1) {
      result -= inputText;
      output.innerHTML = `Your result is: ${result}`;
    }
  } else {
    output.innerHTML = `Enter the number in text field`;
  }
};

const clearField = (e) => {
  document.getElementById("inputText").value = "";
  output.innerHTML = "";
};
