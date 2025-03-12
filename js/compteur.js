let linesCount = 0;
let filesCount = 0;
let hoursCount = 0;

function updateCounters() {
    document.getElementById('linesCounter').innerText = Math.floor(linesCount).toLocaleString();
    document.getElementById('filesCounter').innerText = Math.floor(filesCount);
    document.getElementById('hoursCounter').innerText = Math.floor(hoursCount);
}

function startCounting(targetLines, targetFiles, targetHours) {
    const startTime = performance.now();
    const animationDuration = 4000; // 4 seconds

    function update() {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;

        linesCount = (elapsed / animationDuration) * targetLines;
        filesCount = (elapsed / animationDuration) * targetFiles;
        hoursCount = (elapsed / animationDuration) * targetHours;

        updateCounters();

        if (elapsed < animationDuration) {
            requestAnimationFrame(update);
        } else {
            linesCount = targetLines;
            filesCount = targetFiles;
            hoursCount = targetHours;
            updateCounters();
        }
    }

    requestAnimationFrame(update);
}

// Appelez startCounting avec les valeurs cibles
startCounting(28149, 87, 108);
