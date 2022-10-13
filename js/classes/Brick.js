class Brick {
    position = {
        x: 0,
        y: 0
    }
    static width = 50;
    static height = 20;
    brickEl;

    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }

    render(parentEl) {
        this.brickEl = document.createElement('div');
        this.brickEl.classList.add('brick');
        this.brickEl.style.width = `${Brick.width}px`;
        this.brickEl.style.height = `${Brick.height}px`;
        this.brickEl.style.position = 'absolute';
        this.brickEl.style.left = `${this.position.x}px`;
        this.brickEl.style.top = `${this.position.y}px`;

        parentEl.appendChild(this.brickEl);
    }
}

export default Brick;
