function maj(str) {
    
    let tableauMinus = str.toLowerCase().split(' ');
    
    // donc la methode map prend une valeur courante qui va être chaque élement de notre tableau qui va passer dans la fonction
    let resultat = tableauMinus.map(function(val){
      // pour chaque element on va remplacer (chartAt(0)) la premiere lettre du mot par la premiere lettre mais en majuscule
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    // return chaque mot avec une majuscule (espace dans join(' ') pour faire un espace entre chaque mot)
    return resultat.join(" ");
    
  }
  
  console.log(maj("Les sanglots longs des violons de l'automne..."));
  
  
  // ----------------- ÉNONCÉ -----------------
  
  // Créez un Algorithme qui prends une phrase en argument et qui retourne cette meme
  // phrase avec la premiere lettre de chaque mots en Majuscule.
  
  // ----------------- CONSEILS -----------------
  
  // Fonctions utiles : 
  // map(); méthode "callback", qui permet de traiter chaque élément d'un tableau et
  // d'en retourner un nouveau avec les éléments modifiés.
  // toUpperCase(); transforme en majuscule.
  // toLowerCase(); pour transformer en minuscule.
  // charAt(); pour sélectionner un caratère.
  // split(); pour transformer string->tableau.
  // replace(); pour remplacer une partie d'une chaine.