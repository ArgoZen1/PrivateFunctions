// function trouverLongueurMax(str) {

//     var mots = str.split(' ');
//     var longMax = 0;

//     for (var i = 0; i < mots.length; i++){

//         if(mots[i].length > longMax){
//             longMax = mots[i].length;
//         }

//     }

//     return longMax;
// }

// function trouverLongueurMax(str) {

//     var arr = str.split(' ');

//     return arr.reduce(function(x,y){
//         return Math.max(x, y.length)
//     }, 0); // 0 valeur initial de x grace à reduce pour l'initier 

// }

function trouverLongueurMax(str){

    let arr = str.split(' ');
  // si notre tableau arr.length === 1, si la longueur du tableau est 1 ça veut dire que l'on a enlever tous les mots qui ont la longueur la plus grande
  // donc on return le mot qui aura la plus grande longueur
    if(arr.length === 1){
        return arr[0].length;
    }
// le tableau fait une case/ si le premier mot est superieur à la celule 1 
    if(arr[0].length >= arr[1].length){
    // à partir de la seconde casde [1], si le premiere element est superieur ou égal au second on va supprimer le second élement
    // splice permet de supprimer un element d'un tableau
        arr.splice(1,1);
        // on va lui passer en argument le second tableau qui aura la seconde valeur qui aura été supprimée
        return trouverLongueurMax(arr.join(' '));
    }
    // si la premiere valeur est inferieur ou égale à la seconde valeur
    if(arr[0].length <= arr[1].length){
        // on return un nouveau tableau avec slice depuis la position 1 jusqu'à la fin du tableau
        return trouverLongueurMax(arr.slice(1).join(' '));

    }

}


console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));



// ----------------- ÉNONCÉ -----------------

// Trouve la longueur du mot le plus longs dans une phrase et retourne la.

// ----------------- CONSEILS -----------------

// Le but ici va être de le faire de trois manières différentes, avec trois concepts
// différents.
 
// 1: avec une boucle For.
// 2: avec une méthode Callback.(reduce,Math.max)
// 3: avec une récursion.(slice, splice)