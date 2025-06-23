document.getElementById("lockScreen").addEventListener("click", () => {
 document.getElementById('lockScreen').style.animation='aniunlock 2s ease-out forwards'
 setTimeout(function () {
   window.location.href="homeScreen.html"
 },100)

   
 
});

function openMessage() {
  window.location.href="/birthday.html"
}

function closeMessage() {
  window.history.back()
}
