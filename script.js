
window.onload = () => {
  setTimeout(() => {
    document.getElementById("app").classList.remove("hidden");
  }, 4000);
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
