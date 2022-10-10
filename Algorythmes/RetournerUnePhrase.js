function retourneLaPhrase(str) {


    return str.split('').reverse().join('');
 
 
 }
 
 console.log(retourneLaPhrase("Bonjour à tous"));
 
 // console.log("Hello world".split('').join(''));
 
 
 // ----------------- ÉNONCÉ -----------------
 
 // Créez un Algorithme qui va retourner une phrase. 
 // par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
 // Bonne chance.
 
 // ----------------- CONSEILS -----------------
 
 // La fonction join(), permet de transformer un tableau en chaine de caractère.
 // La fonction split(), permet de transformer une chaine de caractère en tableau.
 // exemple split('') sur une chaine de caractere sans espace => console.log("hello".split('')); => ["h","e","l","l""o"]
 // exemple split(' ') sur une chaine de caractere avec un espace => console.log("hello world".split(' ')); => ["hello, world"]
 // La fonction reverse(), permet de retourner les éléments d'un tableau. ( du dernier element au premier element)