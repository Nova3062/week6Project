const expect = chai.expect
const assert = chai.assert



describe("player", () => {
    class Player{
        constructor(name = " ") {
            this.name = name;
            this.hand = [];
            this.points = 0;
        }
    
        playCard() {
            return this.hand.pop();
        }
    
        receiveCard(cards) {
            this.hand.push(cards);
        }
        displayCards(){
            console.table(this.hand);
        }
    }
    let player1 = new Player()
    it('player points', () => {
        expect(player1.points).to.equal(0)
        player1.points += 1
        expect(player1.points).to.equal(1)
        player1.points -= 1
        expect(player1.points).to.equal(0)
    })
})


