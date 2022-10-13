import Brick from './Brick.js';

class Game {
    fieldEl;
    ship;
    bricks = [];

    constructor(fieldEl) {
        this.fieldEl = fieldEl;
    }

    createBricks(bricksSchema) {
        this.bricks = bricksSchema;

        for (let i = 0; i < this.bricks.length; i++) {
            const row = this.bricks[i];
            const rowPosition = i * Brick.height;

            for (let j = 0; j < row.length; j++) {
                const brick = row[j];
                if(brick) {
                    brick.setPosition((j * Brick.width) + this.fieldEl.getBoundingClientRect().width / 4, rowPosition);
                    brick.render(this.fieldEl);
                }
            }
        }
    }

    setShip(ship) {
        this.ship = ship;
    }

    start() {

    }
}

export default Game;
