const cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{	
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

const cardsInPlay = [];

function checkformatch(){
	// body...
if (cardsInPlay[0] === cardsInPlay[2]){
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};

function flipCard (cardId){ 

{cardsInPlay.push(cards[cardID].rank);

	console.log("user flipped " + cards[cardId].suit);
	console.log("user flipped " + cards[cardId].cardImage);
}

}
};

function createBoard () {
	for (let i = 0; i < createBoard.length; i++) {
	let newCard = document.cardElement('img');
}
cardElement.setAttribute('images/back.png', i );
document.querySelector(cardElement)[0].addEventListener('click', flipCard);
document.getElementById('game-board').appendChild(cardElement);

}
createBoard();

