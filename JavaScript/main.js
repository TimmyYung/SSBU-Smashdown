let boxes = document.getElementsByTagName("span");

for (const box of boxes) {
  box.addEventListener("click", () => {
    box.style.background = "black";
  });
}

function addSpan() {
  for (let i = 0; i < 77; i++) {
    let span = document.createElement("span");
    span.addEventListener("click", () => {
      span.classList.toggle("colorred");
    });
    document.getElementById("boxer").appendChild(span);
  }
}

function resetAll(){
  let boomer = document.querySelectorAll("span")
  boomer.forEach(boomer => boomer.classList.remove("colorred"))
}

addSpan();
