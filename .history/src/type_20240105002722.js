'use strict';

// new TypeIt('.home__title--strong')  // Jeongmin Kim
// .move(-11)
// .type('Amazing ')           // Amazing | Jeongmin Kim
// .move(null, { to : 'END'})  // Amazing Jeongmin Kim
// .delete()
// .type('Front-end Engineer')
//     .go();


document.addEventListener("DOMContentLoaded", function () {
    new TypeIt('.home__title--strong', {
      strings: ["This is my string!"],
    }).go();
  });