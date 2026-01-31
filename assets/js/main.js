const box = document.querySelector(".container");
const sparksLayer = document.querySelector(".sparks");

function spawnSpark() {
    const r = box.getBoundingClientRect();
    const edge = Math.floor(Math.random() * 4);
    const s = document.createElement("div");
    s.className = "spark";

    let x, y;

    // choose random edge
    if (edge === 0) {
        // top
        x = Math.random() * r.width;
        y = 2;
    } else if (edge === 1) {
        // right
        x = r.width - 2;
        y = Math.random() * r.height;
    } else if (edge === 2) {
        // bottom
        x = Math.random() * r.width;
        y = r.height - 2;
    } else {
        // left
        x = 2;
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
