let mark = document.getElementById("mark-all");
let num = document.getElementById("notification-num");
let box = document.querySelectorAll(".specific");
let notify = document.getElementById("notification-num");
notify.innerText = box.length;

mark.addEventListener("click", () => {
  box.forEach((massage) => massage.classList.remove("specific"));

  let newBox = document.querySelectorAll(".specific");
  notify.innerText = newBox.length;
});

box.forEach((massage) => {
  massage.addEventListener("click", () => {
    massage.classList.remove("specific");

    let newBox = document.querySelectorAll(".specific");
    notify.innerText = newBox.length;
  });
});
