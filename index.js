const container = document.querySelector(".container");
const imageContainers = document.querySelectorAll(".img-container");
console.log(container);
container.addEventListener("click", (e) => {
  for (let i in imageContainers) {
    const loopingContainer = imageContainers[i];
    console.log();
    if (loopingContainer.classList) {
      if (loopingContainer.classList.contains("active")) {
        loopingContainer.classList.remove("active");
      }
    }
  }
  const targetElement = e.target.parentElement;
  const isActive = targetElement.classList.contains("active");
  if (!isActive) {
    targetElement.classList.add("active");
  }
});
