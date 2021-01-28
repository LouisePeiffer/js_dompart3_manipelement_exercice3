// 1 
// let exo1 = document.querySelector('#object')
// let myh1 = exo1.querySelector('h1')
// let myh2 = exo1.querySelector('h2')
// let myElements = []
// myElements.push(myh1,myh2)
// console.log(myElements);

let myElements = document.querySelector('div#object').children
console.log(myElements);

// 2
let monObjet = {
    nom : "Louise",
    age : 22,
}

// 3
let tabObjet = Object.keys(monObjet)
console.log(tabObjet);
tabObjet.forEach(element => {
    console.log(element);
});


// 4 
let tabObjet2 = Object.values(monObjet)
console.log(tabObjet2);

tabObjet2.forEach(element => {
    console.log(element);
});

// 5
tabObjet2.forEach((el,i) => {
    console.log(monObjet[el],i);
});
// Le premier paramètre = l'élément
// Le deuxième élément = index 