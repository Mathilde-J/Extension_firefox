let buttonActivate = document.getElementById('activate');
let buttonDesactivate = document.getElementById('desactivate');

buttonActivate.addEventListener("click", function() {
      console.log('activate');
      browser.tabs.executeScript(null, { file: "blackandwhite.js" });
});

buttonDesactivate.addEventListener("click", function() {
      console.log('desactivate');
      browser.tabs.reload();
});
