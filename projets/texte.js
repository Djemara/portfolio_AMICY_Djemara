const inputTexte = document.getElementById("mon-texte");
const elLongueur = document.getElementById("longueur");
const elSousChaine = document.getElementById("sous-chaine");
const elMajuscule = document.getElementById("majuscule");
const elNbMots = document.getElementById("nb-mots");

inputTexte.oninput = function () {
  let texte = inputTexte.value;

  elLongueur.innerHTML = texte.length;

  elSousChaine.innerHTML = texte.slice(0, 3) || "-";

  elMajuscule.innerHTML = texte.toUpperCase() || "-";

  let texteNettoye = texte.trim();
  if (texteNettoye === "") {
    elNbMots.innerHTML = 0;
  } else {
    let tableauMots = texteNettoye.split(/\s+/);
    elNbMots.innerHTML = tableauMots.length;
  }
};