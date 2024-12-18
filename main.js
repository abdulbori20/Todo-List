let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function saveData() {
  if (inputBox.value === "") {
    alert("Ma'lumot to'ldirilmadi!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  localStorage.setItem("Todo-list", listContainer.innerHTML);
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      localStorage.setItem("Todo-list", listContainer.innerHTML);
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      localStorage.setItem("Todo-list", listContainer.innerHTML);
    }
  },
  false
);

function showData() {
  listContainer.innerHTML = localStorage.getItem("Todo-list");
}
showData();