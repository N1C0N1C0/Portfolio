'use strict';

new TypeIt('.home__title--strong', {
    loop : true,
    speed : 250,
})  // Jeongmin Kim
    .move(-12)
    .type('Amazing ')           // Amazing | Jeongmin Kim
    .pause(1000)
    .move(null, { to : 'END'})  // Amazing Jeongmin Kim
    .delete()
    .type('Front-end Engineer')
    .pause(1000)
    .move(-9)
    .delete()
    .type('Back-end')
    .pause(1000)
    .delete(8)
    .type('Full-stack')
    .move(9)
    .delete()
    .go();    
