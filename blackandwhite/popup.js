let buttonActivate = document.getElementById('activate');

buttonActivate.addEventListener("click", function() {
      console.log('activate');
      browser.tabs.executeScript(null, { file: "blackandwhite.js" });
  });
