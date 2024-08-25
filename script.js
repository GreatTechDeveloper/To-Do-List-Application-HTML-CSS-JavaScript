const input = document.getElementById("input-box");
const ul = document.getElementById("list-container");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  if (input.value === "") {
    alert("You Must Write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "x";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
});

ul.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showTask() {
  ul.innerHTML = localStorage.getItem("data");
}
showTask();
