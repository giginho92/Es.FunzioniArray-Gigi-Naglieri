// ESERCIZIO 1

//     let valutazione = prompt("Quanto hai preso?")
    
//     function voti(formale) {
        
//         if(formale < 18) {
//             return "Insufficente";
//         } else if(formale >= 18 && formale <21) {
//             return "Sufficente";
//         } else if(formale >= 21 && formale <24) {
//             return "Buono";
//         } else if(formale >=24 && formale <27) {
//             return "Distinto";
//         } else if(formale <=27 && formale <=29 ) {
//             return "Ottimo";
//         } else {
//             return "Eccellente";
//         }
    
    
// }

// voti(valutazione);

// ESERCIZIO 2

// let numero = 100

// function conta(numero) {

//     let tabella = ``;

//     for (let i = 1; i <= numero; i++){
        
//         if (i % 10 == 0){

//             tabella = tabella + i + `\n`
//         }else {

//             tabella = tabella + i + ` `
//         }

        
        
//     }   
//     return tabella;
// }
    
//     conta(100);

// ESERCIZIO 3

let numeri = [4, 6, 54, 7, 98, 12, 24, 89, 34];

numeri.sort(function (a, b)) {
                            return a - b;
};

let firstElement = numeri.shift();
console.log(firstElement);
let lastElement = numeri.pop();
console.log(lastElement);