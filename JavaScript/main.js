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
      span.style.background = "black";
    });
    document.getElementById("boxer").appendChild(span);
  }
}

addSpan();
