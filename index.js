function functioninver(str){
   return str.split('').reverse( ).join('');
}
console.log(functioninver("ibrahima"));
console.log(functioninver("GUEYE"))

function functioncarac(ibou){
    return ibou.length;
}
console.log(functioncarac("javascript"));
console.log(functioncarac("table"))

function functionmajs(majus){
    return majus.split(' ')
                .map(maj => maj.charAt(0).toUpperCase()+maj.slice(1)) 
                .join(' ');
}
console.log(functionmajs("television national"))
console.log(functionmajs("pratique important"))

function functiontab(blo){
    return Math.max(...blo)
}
console.log(functiontab([6, 7, 45, 19,]));

function functiontable(tabu){
    return Math.min(...tabu)
}
console.log(functiontable([2, 5, 78, 9]));

function functionsom(soo){
    return soo.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(functionsom([6, 4, 8, 17]));

function functionfilt(ter, condition){
    return ter.filter(condition);
}
console.log(functionfilt([4, 2, 7, 9, 1, -8, -3],  num => num > 1))

function factoriel(n){
    if (n < 0) return undefined; // La factorielle n'est pas définie pour les nombres négatifs
    if (n === 0 || n === 1) return 1; // La factorielle de 0 et 1 est 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
   return result;
}
console.log(factoriel(7))
console.log(factoriel(3))

function nbrpremier(num){
    if (num <= 1) return false; // Les nombres 0 et 1 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Si num est divisible par i, ce n'est pas un nombre premier
    }
    return true; // Si aucun diviseur trouvé
}
console.log(nbrpremier(75))
console.log(nbrpremier(18))
console.log(nbrpremier(2))

function fibonacci(n){
    let fibSequence = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibSequence.push(0);
        } else if (i === 1) {
            fibSequence.push(1);
        } else {
            fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
        }
    }
    return fibSequence;
}
console.log(fibonacci(12))
console.log(fibonacci(7))
console.log(fibonacci(9))