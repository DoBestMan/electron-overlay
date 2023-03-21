const CPU_USAGE = document.getElementById("cpu");
const CLOSE_BTN = document.getElementById("close");

CLOSE_BTN.addEventListener("click", api.close);
setInterval(UpdateStats, 1000);

async function UpdateStats() {
  const usage = await api.getCurrentLoad();
  const cpuUsed = usage.currentLoad;
  CPU_USAGE.innerText = `CPU: ${cpuUsed.toFixed(1)}%`;
}
