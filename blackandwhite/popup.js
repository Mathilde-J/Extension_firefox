//déclaration des variables liées aux boutons activer et désactiver
let buttonActivate = document.getElementById('activate');
let buttonDesactivate = document.getElementById('desactivate');

//fonction permettant d'exécuter le script blackandwhite.js en cliquant sur le bouton activer
buttonActivate.addEventListener("click", function() {
      console.log('activate');
      browser.tabs.executeScript(null, { file: "blackandwhite.js" });
});

//fonction permettant de désactiver le filtre en raffraichissant la page en cliquant sur le bouton désactiver
buttonDesactivate.addEventListener("click", function() {
      console.log('desactivate');
      browser.tabs.reload();
});
