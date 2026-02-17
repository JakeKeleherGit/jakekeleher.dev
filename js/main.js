// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll progress bar at top
function updateScrollProgress() {
  const bar = document.querySelector(".scroll-progress__bar");
  if (!bar) return;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  bar.style.width = percent + "%";
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();
