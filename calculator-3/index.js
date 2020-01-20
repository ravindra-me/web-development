document.addEventListener("DOMContentLoaded", () => {
  const btnContainer = document.querySelector(".btn-container");
  const inputTag = document.getElementById("getinput");
  const outputScreen = document.getElementById("getresult");
  const result = document.getElementById("result");

  let operation = "";

  btnContainer.addEventListener("click", event => {
    if (event.target.classList.contains('number')) {
      operation += `${event.target.innerHTML}`; // template literal
    }
    inputTag.value = operation;
  });
  result.addEventListener("click", () => {
    const result = eval(operation);

    outputScreen.value = result;
  });

  console.log("hello world");
});
