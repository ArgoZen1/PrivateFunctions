function factoriser(num) {

    for (i = 1; num > 1; num--) {
        i = num * i;
        //1 = 5 x 1;
        //5 = 4 x 5;
        //20 = 3 x 20;
        //60 = 2 x 60;
        //120 = 1 x 120;
    }

    return i;
}



console.log(factoriser(5));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va factoriser le nombre qu'on
// lui passe en argument.
// Pour rappel lorsqu'on factorise 5 :
// 5! = 1 * 2 * 3 * 4 * 5 = 120.
// C'est le produit de tous les entiers qui précèdent ou qui sont
// égaux à N, ici 5.

// ----------------- CONSEILS -----------------

// La boucle "for" est ton amie.

// ------------------------ AVEC RECURSION -----------------------------

function factoriserRecursion(num) {
    // condition très importante
    if (num === 0) {
        // parce qu'en dessous on va venir appeler notre fonction à l'infini et on ne veut pas faire de boucle infini si on ne met pas de condition  
        return num == 1;
    }

    return num * factoriser(num - 1)
}
// ce qu'il va se passer : 5 x 4 x 3 x 2 x 1 x 1 jusqu'aà la fin de la condition (num === 0) (le deuxieme fois 1 est à cause de la premiere condition)
console.log(factoriserRecursion(5))