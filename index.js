const loading = document.getElementById("loadingAnimation");
const content = document.getElementById("displayContent");

window.onload = setTimeout(showContent, 3000);

function showContent() {
  loading.style.display = "none";
  content.style.display = "block";
}
