'use strict';

new TypeIt('.home__title--strong', {
    loop : true,
    speed : 50,
})  // Jeongmin Kim
    .move(-12)
    .type('Amazing ')           // Amazing | Jeongmin Kim
    .pause(1000)
    .move(null, { to : 'END'})  // Amazing Jeongmin Kim
    .delete()
    .type('Front-end Engineer')
    .go();    
