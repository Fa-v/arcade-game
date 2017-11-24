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
 * @description Updates the enemy's position, multiplying the dt parameter by
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
    this.isInWater = false;
    this.sprite = 'images/char-boy.png';

    this.getInitialPosition()
}

/**
 * @description Sets the player's initial coordinates
 */
Player.prototype.getInitialPosition = function() {
    this.x = 200;
    this.y = 400;
    this.isInWater;
}

/**
 * @description Updates the player's position, and calls getInitialPosition and
 * checkCollisions methods
 */
Player.prototype.update = function () {
    if (this.y <= -10) {
        this.getInitialPosition();
        !this.isInWater && game.updateScore();
    }
    this.checkCollisions();
}

/**
 * @description Draw the player on the screen
 */
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

/**
 * @description Checks if the enemy and the player are on the same coordinates
 */
Player.prototype.checkCollisions = function () {
    allEnemies.forEach(enemy => {
        let playerOnFirstRow = player.y - 14 === enemy.y;
        let playerOnSecondRow =  player.y - 16 === enemy.y;
        let playerOnThirdRow = player.y - 20 === enemy.y;
        let enemyOnPlayer = enemy.x >= player.x - 40 && enemy.x <= player.x + 40;

        let collision = (playerOnFirstRow || playerOnSecondRow || playerOnThirdRow)
            && enemyOnPlayer;

        collision && this.getInitialPosition();
        collision && game.score >= 50 && (game.score -= 50);
        collision && (game.collisions += 1);

        if (game.collisions === 3) {
            allLives.splice(0, 1);
            game.collisions = 0;
        }
        collision && allLives.length === 0 && game.over();
    });
}

/**
 * @description Sets values for each key to move the player on the canvas
 * @param {Object} allowedKeys
 */
Player.prototype.handleInput = function (allowedKeys) {
    switch (allowedKeys) {
        case 'left':
            this.x <= 10 ? this.x = 0 : this.x -= 100;
            break;
            case 'up':
            this.y <= 50 ? this.y = -10 : this.y -= 80;
            break;
        case 'right':
            this.x >= 400 ? this.x = 400 : this.x += 100;
            break;
            case 'down':
            this.y >= 400 ? this.y = 400 : this.y += 80;
            break;
    }
}

/**
 * @description Listens for key presses and sends the keys to the
 * Player.handleInput() method.
 * @param {Object} event
 */
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        65:'left',
        38: 'up',
        87: 'up',
        39: 'right',
        68: 'right',
        40: 'down',
        83: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

/**
 * @description Tracks the player's score
 */
let Game = function () {
    this.score = 0;
    this.collisions = 0;
}

/**
 * @description Updates the score when player is in the water
 */
Game.prototype.updateScore = function () {
    !player.isInWater && (this.score += 100);
}

/**
 * @description Creates the text for game's score on canvas
 */
Game.prototype.render = function () {
    ctx.font = '36px sans-serif';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${this.score}`, 20, 563);
    ctx.textBaseline = 'middle';
}

Game.prototype.over = function () {
    console.log('game over!!!');
}

let Lives = function (x) {
    this.sprite = 'images/Heart.png';
    this.x = x;
    this.y = 530;
    this.width = 40;
    this.height = 60;
}

Lives.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, this.width, this.height);
}

/**
 * Enemy and Player instances
 */
let game = new Game();
let enemy1 = new Enemy(60);
let enemy2 = new Enemy(144);
let enemy3 = new Enemy(226);
let allEnemies = [enemy1, enemy2, enemy3];
let player = new Player();
let life1 = new Lives(370);
let life2 = new Lives(410);
let life3 = new Lives(450);
let allLives = [life1, life2, life3];
