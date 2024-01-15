const myEmail = 'albaniaromannikko@gmail.com'

function contact() {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')
    window.open(`mailto:${myEmail}?subject=from ${name} (${email})&body=${message}`);
} 

// Get the cursor element
const cursor = document.querySelector(".cursor");

// Update its position on mousemove
window.addEventListener("mousemove", (event) => {
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});
