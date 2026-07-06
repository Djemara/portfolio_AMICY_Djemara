// ===== HORLOGE EN TEMPS RÉEL =====
function rafraichirHorloge() {
  let maintenant = new Date();

  let heures = String(maintenant.getHours()).padStart(2, "0");
  let minutes = String(maintenant.getMinutes()).padStart(2, "0");
  let secondes = String(maintenant.getSeconds()).padStart(2, "0");

  document.getElementById("horloge").innerHTML = `${heures}:${minutes}:${secondes}`;

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dateEnFrancais = maintenant.toLocaleDateString('fr-FR', options);

  document.getElementById("date-fr").innerHTML = dateEnFrancais.charAt(0).toUpperCase() + dateEnFrancais.slice(1);
}

setInterval(rafraichirHorloge, 1000);
rafraichirHorloge();

// ===== ANALYSEUR DE DATES =====
window.onload = function () {
  const inputDate = document.getElementById("saisie-date");
  const btnCalculer = document.getElementById("btn-calculer");
  const elAffichage = document.getElementById("affichage-date");
  const elDifference = document.getElementById("zone-difference");

  btnCalculer.onclick = function () {
    let chaine = inputDate.value.trim();

    let formatValide = /^\d{2}-\d{2}-\d{4}$/;
    if (!formatValide.test(chaine)) {
      alert("Format invalide ! Veuillez utiliser ce format JJ-MM-AAAA (Exemple : 25-12-2026)");
      return;
    }

    let parties = chaine.split("-");
    let jour = parties[0];
    let mois = parties[1];
    let annee = parties[2];

    elAffichage.innerHTML = `${jour}/${mois}/${annee}`;

    let dateSaisie = new Date(annee, mois - 1, jour);
    let dateAujourdhui = new Date();

    dateSaisie.setHours(0, 0, 0, 0);
    dateAujourdhui.setHours(0, 0, 0, 0);

    let diffMillisecondes = dateSaisie.getTime() - dateAujourdhui.getTime();
    let unJourEnMs = 1000 * 60 * 60 * 24;
    let diffJours = Math.round(diffMillisecondes / unJourEnMs);

    if (diffJours === 0) {
      elDifference.innerHTML = "C'est aujourd'hui !";
    } else if (diffJours > 0) {
      elDifference.innerHTML = `Il reste ${diffJours} jour(s) avant cette date.`;
    } else {
      elDifference.innerHTML = `Il y a ${Math.abs(diffJours)} jour(s) que cette date est passée.`;
    }
  };
};