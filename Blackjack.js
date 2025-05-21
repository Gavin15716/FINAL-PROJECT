          let cards = []
          let sum = 0
          let hasBlackJack = false
          let isAlive = false
          let message = ""

          const messageEl = document.getElementById("message-el")
          const sumEl = document.getElementById("sum-el")
          const cardsEl = document.getElementById("cards-el")
          const playerEl = document.getElementById("player-el")
playerEl.textContent = "Gavin Ly"
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1; 
    if (randomNumber === 1)
      return 11;
    else if(randomNumber >= 10)
      return 10;
    else 
      return randomNumber;
}
         

function startGame(){
isAlive = true;
  let CardOne = getRandomCard();
  let CardTwo = getRandomCard();
  cards = [CardOne, CardTwo]
  sum = CardOne + CardTwo
renderGame();
}
          
function renderGame(){
cardsEl.textContent= "Cards: ";
for (let i = 0; i < cards.length; i++){
 cardsEl.textContent += cards[i] + " ";
}
 sumEl.textContent = "Sum: " +sum;
  if (sum < 21){
  isAlive = true;
  message = "Hit?";
}
  else if (sum > 21){
  message = "Bust!"
  isAlive = false; 
}
  else if (sum === 21){
  isAlive = false;
  hasBlackjack = true;
  message = "You won!";
}
  messageEl.textContent = message;
}


function drawCard(){
  if (isAlive == true){
    let cardDraw = getRandomCard();
    sum += cardDraw;
    cards.push(cardDraw)
    renderGame();
  }          let cards = []
          let sum = 0
          let hasBlackJack = false
          let isAlive = false
          let message = ""

          const messageEl = document.getElementById("message-el")
          const sumEl = document.getElementById("sum-el")
          const cardsEl = document.getElementById("cards-el")
          const playerEl = document.getElementById("player-el")
playerEl.textContent = "Gavin Ly"
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1; 
    if (randomNumber === 1)
      return 11;
    else if(randomNumber >= 10)
      return 10;
    else 
      return randomNumber;
}
         

function startGame(){
isAlive = true;
  let CardOne = getRandomCard();
  let CardTwo = getRandomCard();
  cards = [CardOne, CardTwo]
  sum = CardOne + CardTwo
renderGame();
}
          
function renderGame(){
cardsEl.textContent= "Cards: ";
for (let i = 0; i < cards.length; i++){
 cardsEl.textContent += cards[i] + " ";
}
 sumEl.textContent = "Sum: " +sum;
  if (sum < 21){
  isAlive = true;
  message = "Hit?";
}
  else if (sum > 21){
  message = "Bust!"
  isAlive = false; 
}
  else if (sum === 21){
  isAlive = false;
  hasBlackjack = true;
  message = "You won!";
}
  messageEl.textContent = message;
}


function drawCard(){
  if (isAlive == true){
    let cardDraw = getRandomCard();
    sum += cardDraw;
    cards.push(cardDraw)
    renderGame();
  }
}
