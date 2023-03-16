function toggleIframe() {
  var iframeContainer = document.getElementById("form-container");
  if (iframeContainer.style.display === "none") {
    iframeContainer.style.display = "block";
  } else {
    iframeContainer.style.display = "none";
  }
}