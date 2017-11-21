/**
 * @description Sets all variables necessary to create enemies
 * @param {Number} y
 */
var Enemy = function (y) {
    this.initialPosition = -100;
    this.maxX = 600;
    this.y = y;
    this.minSpeed = 60;
    this.maxSpeed = 260;
    this.speed = this.calculateSpeed();
    this.sprite = 'images/enemy-bug.png';

    this.getInitialPosition();
};

/**
 * @description Sets the enemy's initial coordinates
 */
Enemy.prototype.getInitialPosition = function () {
    this.x = this.initialPosition;
    this.y = this.y;
}

/**
 * @description Calculates and returns a random speed
 */
Enemy.prototype.calculateSpeed = function () {
    let randomSpeed = Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;

    Math.floor(randomSpeed);
    randomSpeed < 100 ? randomSpeed = 100 : randomSpeed;
    return this.speed = randomSpeed;
}

/**
 * @description Update the enemy's position, multiplying the dt parameter by
 * enemy's movement ensure the game runs at the same speed for all computers
 * @param {Number} dt dt, a time delta between ticks
 */
Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;
    if (this.x >= this.maxX) {
        this.x = this.initialPosition;
        this.speed = this.calculateSpeed();
    }
};

/**
 * @description Draw the enemy on the screen
 */
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
 * @description Sets all variables necessary to create the player
 */
let Player = function () {
    this.minX = 0;
    this.maxX = 400;
    this.minY = 0;
    this.maxY = 400;
    this.sprite = 'images/char-boy.png';

    this.getInitialPosition()
}

/**
 * @description Sets the player's initial coordinates
 */
Player.prototype.getInitialPosition = function() {
    this.x = 200;
    this.y = 400;
}

Player.prototype.update = function () {}

/**
 * @description Draw the player on the screen
 */
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/**
 * Enemy and Player instances
 */

let enemy1 = new Enemy(60);
let enemy2 = new Enemy(144);
let enemy3 = new Enemy(226);
let allEnemies = [enemy1, enemy2, enemy3];
let player = new Player();