function memeLettres(arr) {
    // second mot
    let test = arr[1].toLowerCase();
    // premier mot
    let cible = arr[0].toLowerCase();
  
    for(let i=0; i < test.length; i++) {
    // si on vient de commencer à la premiere lettre du premier mot
    // test[i] = premiere lettre du mot sens
    // si la premiere lettre "test" n'est pas presente dans la cible alors on return false
      if(cible.indexOf(test[i]) === -1) {
        return false;
      }
  
    }
  // sinon on return true
    return true;
  }
  console.log(memeLettres(["concupiscence", "sens"]));
  
  
  
  // ----------------- ÉNONCÉ -----------------
  
  // Créez un Algorithme qui prends un tableau qui contient deux chaines en parametre.
  // On doit vérifier si la premiere chaine contient au moins une fois toutes les
  // lettres de la seconde, si oui on retourne true, si non on retour false.
  
  // ----------------- CONSEILS -----------------
  
  // Boucle "for".
  // toLowerCase();
  // indexOf();
  