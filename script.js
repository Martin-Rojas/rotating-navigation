const elemenOpen = document.getElementById("open");
const elemenClose = document.getElementById("close");
const container = document.querySelector(".container");

elemenOpen.addEventListener("click", () => container.classList.add("show-nav"));

elemenClose.addEventListener("click", () =>
  container.classList.remove("show-nav")
);
