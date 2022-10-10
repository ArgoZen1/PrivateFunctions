////////////// fonction pour trouver la valeur maximum dans un tableau avec une boucle ///////////////

let tableau = [1, 6, 9, 15, 2, 3, 7]
let index = tableau[0]

for (let i = 0; i < tableau.length; i++) { // recuperer le max
    if (tableau[i] > index) {
        index = tableau[i]
    }
}
// ici index = maximum du tableau
let sommes = 0  // On cree la variable pour faire la sommes

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] < index) {  // si le i eme element est < au maximum (donc index) on l'ajoute a sommes
        sommes += tableau[i]
    }
}
console.log(sommes)

// VERSION BG EN 1 BOUCLE (on fait le max et la somme en même temps puis on retire le max)
// Ne fonctionne pas si la valeur de max est presente plusieurs fois
let sommes_bg = 0
let max = tableau[0]
for (let i = 0; i < tableau.length; i++) {
    sommes_bg += tableau[i]
    if (tableau[i] > max) {
        max = tableau[i]
    }
}
console.log(sommes_bg - max)