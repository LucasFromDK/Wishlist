function createSnow() {
    const snowHolder = document.getElementById("snowHolder");

    for (let i = 0; i < 200; i++) {
        let snowElement = document.createElement("div");
        snowElement.className = "snowfall";
        snowHolder.appendChild(snowElement);
    }
}

createSnow();