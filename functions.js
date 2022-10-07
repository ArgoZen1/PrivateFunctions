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

///////////////////// fonction pour ignorer les accents //////////////////////////
String.prototype.removeAccents = function () {
    return this
        .replace(/[áàãâä]/gi, "a")
        .replace(/[éè¨ê]/gi, "e")
        .replace(/[íìïî]/gi, "i")
        .replace(/[óòöôõ]/gi, "o")
        .replace(/[úùüû]/gi, "u")
        .replace(/[ç]/gi, "c")
        .replace(/[ñ]/gi, "n")
        .replace(/[^a-zA-Z0-9]/g, " ");
};

////////////////////////// POUR TESTER LES PERFORMANCES D'UNE FONCTION /////////////////////////////////
let start = Date.now();
//TU APPELLES TA FONCTION JUSTE ICI
let timeTaken = Date.now() - start;
console.log("Total time taken for custom POO function: " + timeTaken + " milliseconds");

/////////////////// FONCTION DE CREATEELEMENT ////////////////////////////////////////////
const createElement = (elementName, classIdAttr, textContent, appendCh) => {
    let element = document.createElement(elementName);
    // création d'un tableau de classe, d'id ou d'attributs
    Object.keys(classIdAttr).map((i) => {
        element[i] = classIdAttr[i];
    });

    element.textContent = textContent;
    const parent = document.querySelector(appendCh);

    parent.appendChild(element);

    return element;
};
createElement('h5', { className: 'testFunction', id: "iciId", ariaLabel: "ok c'est moi" }, "LeTextduH5", "section.container__card");

//////////////////////////// PLUS PERFORMANT QUE SETATTRIBUTE ////////////////////////
const img = document.createElement("img")
Object.assign(img, {
    className: "laClassDeLimage",
    src: "LeLienDeTonImage",
    alt: "TonAlt"
})