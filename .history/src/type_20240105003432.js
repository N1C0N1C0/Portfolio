'use strict';

document.addEventListener('DOMContentLoaded', function () {
    // TypeIt 초기화 코드 여기에 추가
    new TypeIt('.home__title--strong')
      .move(-11)
      .type('Amazing ')
      .move(null, { to: 'END' })
      .delete()
      .type('Front-end Engineer')
      .go();
  });
