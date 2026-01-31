const box = document.querySelector(".container");
const sparksLayer = document.querySelector(".sparks");

function spawnSpark() {
    const r = box.getBoundingClientRect();
    const edge = Math.floor(Math.random() * 4);
    const s = document.createElement("div");
    s.className = "spark";

    let x, y;

    if (edge === 0) {
        x = Math.random() * r.width;
        y = 3;
    } else if (edge === 1) {
        x = r.width - 10;
        y = Math.random() * r.height;
    } else if (edge === 2) {
        x = Math.random() * r.width;
        y = r.height - 10;
    } else {
        x = 3;
        y = Math.random() * r.height;
    }

    s.style.left = x + "px";
    s.style.top = y + "px";

    sparksLayer.appendChild(s);
    setTimeout(() => s.remove(), 900);
}

let sparkInterval;

box.addEventListener("mouseenter", () => {
    sparkInterval = setInterval(spawnSpark, 80);
});

box.addEventListener("mouseleave", () => {
    clearInterval(sparkInterval);
});
