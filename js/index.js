import Game from './classes/Game.js';
import Brick from './classes/Brick.js';

console.log('this');

const bricksSchema = [
    [null, null, new Brick(), new Brick(), new Brick(), new Brick(), null, null],
    [null, new Brick(), new Brick(), new Brick(), new Brick(), new Brick(), new Brick(), null],
    [null, new Brick(), new Brick(), new Brick(), new Brick(), new Brick(), new Brick(), null],
    [null, null, new Brick(), new Brick(), new Brick(), new Brick(), null, null],
];

const fieldEl = document.getElementById('field');

const game = new Game(fieldEl);
game.createBricks(bricksSchema);
