"use strict";

(function () {
  'use strict';

  var cards = document.querySelectorAll('.card');

  function onCardHoverOut(card) {
    var cardDescriptionHover = card.querySelector('.card__description-hover');
    var cardDescriptionDefault = card.querySelector('.card__description-default');

    if (card.classList.contains('card--selected')) {
      cardDescriptionHover.classList.add('card__description-hover--active');
      cardDescriptionDefault.classList.add('card__description-default--deactivate');
    }
  }

  function onCardClick(card) {
    var cardDescriptionHover = card.querySelector('.card__description-hover');
    var cardDescriptionDefault = card.querySelector('.card__description-default');
    cardDescriptionHover.classList.remove('card__description-hover--active');
    cardDescriptionDefault.classList.remove('card__description-default--deactivate');
    card.classList.toggle('card--selected');
    card.addEventListener('mouseleave', function () {
      onCardHoverOut(card);
    });
  }

  function addEnvents() {
    var _loop = function _loop(i) {
      var card = cards[i];
      var cardInner = cards[i].querySelector('.card__inner');
      var cardAppeal = cards[i].querySelector('.card__appeal');

      if (!card.classList.contains('card--disabled')) {
        cardInner.addEventListener('click', function () {
          onCardClick(card);
        });
        cardAppeal.addEventListener('click', function () {
          onCardClick(card);
        });
      }
    };

    for (var i = 0; i < cards.length; i++) {
      _loop(i);
    }
  }

  addEnvents();
})();