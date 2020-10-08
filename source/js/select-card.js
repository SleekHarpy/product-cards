(function() {
    'use strict'

    let cards = document.querySelectorAll('.card');

    function onCardHoverOut(card) {
        let cardDescriptionHover = card.querySelector('.card__description-hover');
        let cardDescriptionDefault = card.querySelector('.card__description-default');

        if (card.classList.contains('card--selected')) {
            cardDescriptionHover.classList.add('card__description-hover--active');
            cardDescriptionDefault.classList.add('card__description-default--deactivate');
        }
    }

    function onCardClick(card) {
        let cardDescriptionHover = card.querySelector('.card__description-hover');
        let cardDescriptionDefault = card.querySelector('.card__description-default');

        cardDescriptionHover.classList.remove('card__description-hover--active');
        cardDescriptionDefault.classList.remove('card__description-default--deactivate');

        card.classList.toggle('card--selected');

        card.addEventListener('mouseleave', () => {
            onCardHoverOut(card);
        });
    }

    function addEnvents() {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            let cardInner = cards[i].querySelector('.card__inner');
            let cardAppeal = cards[i].querySelector('.card__appeal');

            if (!card.classList.contains('card--disabled')) {
                
                cardInner.addEventListener('click', () => {
                    onCardClick(card);
                    
                });
                cardAppeal.addEventListener('click', () => {
                    onCardClick(card);
                    
                });
            }
        }
    }

    addEnvents();

})();
