// main data which shuffling again and again
const data = [
    {
      card: '7',
      symbol: '🔶',
      answer: 0
    },
    {
      card: 'Q',
      symbol: '❤️',
      answer: 1  
    },
    {
      card: '10',
      symbol: '♠️',
      answer: 0
    }
];
// global variables
const main_cards = document.querySelectorAll('.card');
const cards = document.querySelectorAll('.inner-box');
const rank = document.querySelectorAll('.rank');
const symbol = document.querySelectorAll('.symbol');
const cardResult = document.querySelector('.result');
const confetti_wrapper = document.querySelector('.confetti-wrapper');
// connfeti canvas animation
var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
// main function for game
const game = () => {
    // looping each card
    cards.forEach(card => {
        card.addEventListener('click',() => {
            shuffledCards();
            // backside element selected here
            const backSide = card.querySelector('.back-side');
            card.classList.add('active');
            card.setAttribute('data-set',1);
            // restarting cards and shuflling again
            setTimeout(() => {
              card.classList.remove('active');
            },2200);
            gameOption(backSide)
        })
    })
    const gameOption = (backSide) => {
      // checking if card is Queen of heart then...
      if (backSide.childNodes[1].childNodes[1].innerHTML === "Q") {
        cardResult.innerHTML = `🔥 You found Queen of Heart 🔥`;
        confetti_wrapper.classList.add('open');
        setTimeout(() => {
          confetti_wrapper.classList.remove('open');
        },3000);
      } else {
        cardResult.innerHTML = `Oops! try again 🔁`;
        confetti_wrapper.classList.remove('open');
      }
    }
    const shuffledCards = () => {
        // shuffle card data
        let shuffleCards;
        for (let i = 0; i < 10; ++i) {
          // const shuffleCards =
          shuffleCards = data.sort(card => 0.5 - Math.random()); 
        }
        console.log(shuffleCards)
        // shuffled array
        shuffleCards.forEach((result,index) => {
          // display result
          rank[index].innerHTML = result.card;
          symbol[index].innerHTML = result.symbol;
          // user can choose only one card
          main_cards[index].classList.add('deactivate');
          setTimeout(() => {
            // reseting card content
            if (rank[index].innerHTML = result.card) {
              main_cards[index].classList.remove('deactivate')
              rank[index].innerHTML = '';
              symbol[index].innerHTML = '';
            }
          },2200);
        })
    }
}

game();