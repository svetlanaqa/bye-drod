document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello World!")
  const idiotVideo = document.getElementById("idiot");
  document.getElementById("prize").addEventListener("click", function() {
    idiotVideo.classList.remove("hidden");
    idiotVideo.play();
  })
});
