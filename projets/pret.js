window.onload = function () {
  const inputMontant = document.getElementById("montant");
  const inputTaux = document.getElementById("taux");
  const inputDuree = document.getElementById("duree");
  const btnCalculer = document.getElementById("btn-calculer");

  const zoneErreur = document.getElementById("zone-erreur");
  const zoneResultat = document.getElementById("zone-resultat");

  const elMensualite = document.getElementById("mensualite");
  const elCoutTotal = document.getElementById("cout-total");
  const elTotalInterets = document.getElementById("total-interets");

  btnCalculer.onclick = function () {
    zoneErreur.innerHTML = "";
    zoneResultat.classList.remove("visible");

    let montant = parseFloat(inputMontant.value);
    let tauxAnnuel = parseFloat(inputTaux.value);
    let dureeAnnees = parseInt(inputDuree.value);

    if (isNaN(montant) || isNaN(tauxAnnuel) || isNaN(dureeAnnees)) {
      zoneErreur.innerHTML = "Erreur : veuillez remplir tous les champs avec des valeurs valides.";
      return;
    }

    if (montant <= 0) {
      zoneErreur.innerHTML = "Erreur : le montant doit être supérieur à 0.";
      return;
    }

    if (dureeAnnees <= 0) {
      zoneErreur.innerHTML = "Erreur : la durée doit être supérieure à 0.";
      return;
    }

    if (tauxAnnuel < 0) {
      zoneErreur.innerHTML = "Erreur : le taux ne doit pas être négatif.";
      return;
    }

    let n = dureeAnnees * 12;
    let mensualite = 0;

    if (tauxAnnuel === 0) {
      mensualite = montant / n;
    } else {
      let r = (tauxAnnuel / 12) / 100;
      mensualite = (montant * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }

    let coutTotal = mensualite * n;
    let totalInterets = coutTotal - montant;

    elMensualite.innerHTML = mensualite.toFixed(2);
    elCoutTotal.innerHTML = coutTotal.toFixed(2);
    elTotalInterets.innerHTML = totalInterets.toFixed(2);

    zoneResultat.classList.add("visible");
  };
};