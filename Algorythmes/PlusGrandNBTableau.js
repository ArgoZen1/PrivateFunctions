function plusGrandNb(arr) {

    // Resultats
    let resultats = [];
  // premiere boucle for qui va servir à itérer à travers le premier grand tableau
    for (let i = 0; i < arr.length; i++){
        // Premier tableau, premiere valeur
        let nbMax = arr[i][0]; // renvoi 1 du premier tableau
  
        // la deuxieme boucle va itérer à travers la tableau (n= 1 car nous sommes dans le premier tableau)
        for(let n = 1; n < arr[i].length; n++){
         //exemple si 5 > 8 (premier tableau) donc 8 sur le premier tableau
          if(arr[i][n] > nbMax) {
            nbMax = arr[i][n];
          }
  
        }
        // on push la valeur nbMax de notre premier tableau dans un nouveau tableau resultats
        resultats.push(nbMax);
    }
    // on va return resultat
    return resultats;
    //[8, 88, 39, 3000]
}
  
  console.log(plusGrandNb([
                          [1, 5, 8, 3],
                          [15, 47, 88, 26],
                          [32, 35, 37, 39],
                          [3000, 1001, 857, 1]
                        ]));
  
  
  
  // ----------------- ÉNONCÉ -----------------
  
  // Créez un Algorithme qui prends un tableau composé de plusieurs tableaux en 
  // argument et qui retourne un seul tableau qui contient la valeur maximale de 
  // chaque tableaux.
  
  // ----------------- CONSEILS -----------------
  
  // Une boucle "for" permet d'itérer dans un tableau.
  // Vous n'êtes pas limité à une boucle "for", vous pouvez en utiliser plusieurs...
  
  // la méhode [].push(), pour pousser un élément dans un tableau;
  // Testez :
  // var arrTest = [0,10];
  // arrTest.push(80);
  // console.log(arrTest);
  