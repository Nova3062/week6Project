
//create an implementation of the card game War using javasxcript classes 

class Card {  //class to store and represent a single playing card objects with a 'rank', 'suit', and 'value'
    constructor(rank, suit, value) { //constructor operator to create new objects
        this.rank = rank; //properties of the Card class
        this.suit = suit;
        this.value = value;
    }
    showCard(){ //method to return a string representing the card
        return `${this.rank} of ${this.suit}`  
    }
}

class Deck { // class representing a deck of cards which is an array
    constructor(){
        this._cards = []; //array of 52 card objects
        this.buildDeck();// properties to call the class methods objects 
        this.populate();//
    }
    //  getCards(){
    //      return this._cards; //unused code
    // }
    buildDeck(){ // method to call both populate and shuffle methods
        this.populate(); //methods to be called upon for game class
        this.shuffle(); // 
        return this._cards //property used to store the cards of the deck
    }
    populate() { //method to create a deck of cards with all possible combinations of ranks and suits and value alignment 
        
        
        const suit = ["Hearts", "Diamonds", "Spades", "Clubs"];
        const rank = [//arrays to assemble deck
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "Jack",
        "Queen",
        "King", "Ace"];

        for (let i = 0; i < suit.length; i++){ //for loop to iterate over the rank and suit arrays and create a deck of cards with all possible combinations of ranks and suits and assigns a value to each card
            for (let j = 0; j < rank.length; j++){
                this._cards.push(new Card(rank[j],suit[i], j + 2 ))
            }
    }   
 
}  
 
    shuffle() {//method to shuffle the cards and deck using a random number generator
        let temp = 0
        for (let i = 0; i < this._cards.length; i++) {
            let ranNum = Math.floor(Math.random() * (51) + 1 );
            temp = this._cards[i];
            this._cards[i] = this._cards[ranNum]
            this._cards[ranNum] = temp 
        }
    }

}
// var testDeck = new Deck(); // code made for mid-construction testing 
// testDeck.populate();
// this.testDeck.shuffle();
// console.table(testDeck.getCards());

class Player{ //class representing players in the game with 'name', 'hand', and 'points" 
    constructor(name = " ") {
        this.name = name;
        this.hand = [];
        this.points = 0;
    }

    playCard() { //method to remove and return the last card in the players hand
        return this.hand.pop();
    }

    receiveCard(cards) { //method to add cards to the players hand
        this.hand.push(cards);
    }
    displayCards(){ //method to log the player's hand to the console as a table using the .table convention
        console.table(this.hand);
    }
}
class Game {//class to represent the game itself with a "deck" of cards and 'two' player objects
    constructor(playerNameOne, playerNameTwo){  // need properties of players, card objects 
            this.deck = new Deck(); //property to use the deck from deck class
            this.player1 = new Player(playerNameOne);
            this.player2 = new Player(playerNameTwo);//properties to use players from the player class as objects in the game class
            this.dealCards(); // 
            this.currentTurn = 1;
        
    }
    dealCards() { //method to deal half the cards to each player by calling thier recieve cards method
        for (let i = 0; i < 26; i++) {
        this.player1.receiveCard(this.deck._cards.pop());
        this.player2.receiveCard(this.deck._cards.pop());
        }

        //  console.log(this.player1.playCard(), this.player2.playCard());
    } 
    
    playTurn(){ //method that loops through 26 times, each having both players play a car and comparing thier card values using the compareCards method
        let player1Card;
        let player2Card;
        
        for (let i = 0; i < 26; i++){ //see above
        player1Card = this.player1.playCard();
        player2Card = this.player2.playCard();
        this.compareCards(player1Card, player2Card);
        
        } 

    }   
    
    compareCards(player1Card, player2Card){ //this method counts the points of the players and logs the played cards and scoring to the console
        if (player1Card.value > player2Card.value) {//if statements to determine which player object gains, looses a point due to the played cards value comparassion 
            this.player1.points += 1
            console.log(`Player1 played: ${player1Card.showCard()}\nPlayer2 played: ${player2Card.showCard()}`)
            console.log("player1 scores point")
        }
        if (player1Card.value < player2Card.value) {
            this.player2.points += 1
            console.log(`Player1 played: ${player1Card.showCard()}\nPlayer2 played: ${player2Card.showCard()}`)
            console.log("player2 scores point")
        }
        if (player1Card.value == player2Card.value) {
            console.log(`Player1 played: ${player1Card.showCard()}\nPlayer2 played: ${player2Card.showCard()}`)
            console.log("no points assigned")
            
        }
    }
    gameResult(){// method that returns a string with the current points of both player objects
        return `${this.player1.points} v ${this.player2.points}`;       
    }

    gameWinner(){ //method that logs the winner of the game to the console, or a tie of the points are even
        if (this.player1.points > this.player2.points) {//if statements to dtermine point accumulation and provide a winner or a tie
            
            console.log('player 1 wins')
        }
        if (this.player1.points < this.player2.points) {
            
            console.log('player 2 wins')
        }
        if (this.player1.points == this.player2.points) {
            console.log('this is no winner the game is a tie')
            
        }
    }

    
}

let myGame = new Game(); //in this instance of new game, the deck is shuffled, cards are dealt
myGame.deck.shuffle();// to both players, a turn is played, the result of the game is logged to the console
myGame.dealCards();// and the winner of the game is determined and logged to the console.
myGame.playTurn();
console.log(myGame.gameResult());
myGame.gameWinner();

