// function reverseString(str) {
//     var reversed = '';
//     for (var i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   // Exemple d'utilisation
//   console.log(reverseString("Ijlél")); // Affiche "lélji"

//   Question 2:
//   Compunt Characters :

// Function countcharacters("boubaker"){
// return ChannelSplitterNode.length
// }console.log(countcaharacters(boubaker));

// function capitalizeWords(str) {
//     var words = str.split(' ');
//     for (var i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(' ');
//   }
  
//   // Exemple d'utilisation
//   console.log(capitalizeWords("bonjour tout le monde")); // Affiche "Bonjour Tout Le Monde"
// Array Functions:
// function findMaximum(arr) {
//     var max = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }
  
//   function findMinimum(arr) {
//     var min = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     return min;
//   }
  
//   // Exemple d'utilisation
//   var numbers = [3, 5, 1, 8, 2];
//   console.log(findMaximum(numbers)); // Affiche 8
//   console.log(findMinimum(numbers)); // Affiche 1

// Sum of Array
// const tab = [1,2,3,"aaaa",4,5]
// function sumArray (tab) {
// let somme = 0 ;
// for (let i = 0; i < tab.length; i++) {
//   if (typeof(tab[i]) === "number") {
//   somme = somme + tab[i]
//   }
// }
// return somme
// }
// console.log(sumArray(tab))

// Filter Array:
// const tab = [1,2,3,"aaaa",4,5]

// function filterArray (tab) {
// let tabFilted = [];
// for (let i = 0; i < tab.length; i++) {
//  if( typeof (tab[i]) === "number") {
//     tabFilted.push(tab[i]);
//   }
// }
//  return tabFilted;
// }

// console.log(filterArray(tab))
// const tab = [1,2,3,"aaaa",4,5]

// function filterArray (tab) {
// let tabFilted = [];
// for (let i = 0; i < tab.length; i++) {
//  if( (typeof (tab[i]) === "number") && (tab[i] < 4) ){
//     tabFilted.push(tab[i]);
//   }
// }
//  return tabFilted;
// }

// console.log(filterArray(tab))


// Question 3 :Mathematical Functions:
// function factoriel (num) {
//     let numFact = 1 ;
//     for (let i = 1; i <= num; i++) {
//      numFact = numFact * i
//     }
//       return numFact
//     }
//     console.log(factoriel(5))

// Prime Number Check:
// function isPrime(num) {
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// // Exemple d'utilisation
// console.log(isPrime(7)); // Affiche true


