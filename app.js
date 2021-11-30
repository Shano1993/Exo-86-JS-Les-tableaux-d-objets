/* Ne touchez pas à ce code */
let citroen = {
    color: 'blue',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Citroën est ouverte");
    },
}

let peugeot = {
    color: 'yellow',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Peugeot est ouverte");
    }
}

let ford = {
    color: 'red',
    // Méthode ouvrir porte
    ouvrirPorte: function() {
        console.log("La porte de la Ford est ouverte");
    }
}


/**
 * Votre code commence ici !
 */
let voitures = {
    garage: 'concession',
    lieu: 'Fourmies',
    // Dans un tableau, ajouter les différentes voitures que vous possédez.
    collection: [citroen, peugeot, ford], // Vos voitures dans cette propriété !
}

let para = document.getElementById('para');
let span = document.createElement('span');
para.prepend(span);

for (let i = 0; i < voitures.collection.length; i ++) {
    voitures.collection[i].ouvrirPorte();
}

span.innerHTML = "La citroen est de couleur" + " " + voitures.collection[0].color + "<br/>";
span.innerHTML += "La peugeot est de couleur" + " " + voitures.collection[1].color + "<br/>";
span.innerHTML += "La ford est de couleur" + " " + voitures.collection[2].color;




// FIXME Parcourrez le tableau dans lequel vous avez placé vos objets.
// TODO ==> invoquez la méthode ouvrirPorte pour chaque voiture de la collection.


