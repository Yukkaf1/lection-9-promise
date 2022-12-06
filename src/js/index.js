// const promise = new Promise((resolve, reject) => {
//     const canFulfill = Math.random() > 0.5;

//     setTimeout(() => {
//         if (canFulfill) {
//             resolve('Промис успешно');
//         }
//         reject('Промис с ошибкой')
//     }, 2000);

// });

// // promise.then(
// //     result => {
// //         console.log(result);
// //     },
// //     error => {
// //         console.log(error);
// //     }
// // );

// // promise.then(onFul, onRej);

// function onFul(result) {
//     console.log(result);
// };

// function onRej(error) {
//     console.log(error);
// };

// promise
// .then(onFul)
// .then(x => {
//     console.log(x);
//     return 10;
// })
// .then(y => console.log(y))
// .catch( error => console.log(error))
// .finally(() => console.log("Я в любом случае здесь"));

// -------------- блюдо

// const makeOrder = disch => {
//     const DELAY = 500;  
   
//     // здесь сразу можно писать return promise = new Promise...
//     const promise = new Promise((resolve, reject) => {
//         const passend = Math.random() > 0.5;
//         console.log(passend);

//         setTimeout(() => {
//         if (passend) {
//             resolve('ваше блюдо');
//         } 
//             reject('нет продуктов');
//         }, DELAY);
//     });
//     return promise;
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeError);

// function onMakeOrderSuccess(result) {
//     console.log(result)
// }

// function onMakeError(error) {
//     console.log(error);
// }

// ===== ПОКЕМОНЫ
// fetch функция возвращает промис

const fetchPokemonById = id => {
return fetch( `https://pokeapi.co/api/v2/pokemon/${id} `)
.then(r => r.json());
};

fetchPokemonById(1).then(onSuccess).catch(onError);
fetchPokemonById(12).then(onSuccess).catch(onError);
fetchPokemonById(122).then(onSuccess).catch(onError);
fetchPokemonById(174).then(onSuccess).catch(onError);

function onSuccess(pokemon) {
    console.log(pokemon);
};

function onError(pokemon) {
    console.log('error', error);
};

