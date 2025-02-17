const images = document.querySelectorAll(".image");
let draggedImage = null;

images.forEach((image) => {
  image.addEventListener("dragstart", (e) => {
    draggedImage = e.target;
    e.target.classList.add("selected");
  });

  image.addEventListener("dragover", (e) => {
    e.preventDefault(); // This allows us to drop onto the image
  });

  image.addEventListener("drop", (e) => {
    e.preventDefault();
    if (draggedImage !== e.target) {
      let tempBg = draggedImage.style.backgroundImage;
      draggedImage.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = tempBg;
    }
    draggedImage.classList.remove("selected");
  });

  image.addEventListener("dragend", () => {
    draggedImage.classList.remove("selected");
    draggedImage = null;
  });
});
