// Get the cursor element
const cursor = document.querySelector(".cursor");

// Update its position on mousemove
window.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

