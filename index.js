// Your code goes here
console.log(document.querySelector("p").textContent)
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("text").textContent = "This is really cool!"
    console.log(document.getElementById("text").textContent)
})
