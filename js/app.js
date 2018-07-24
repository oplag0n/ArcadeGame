// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    // x pos
    // y pos

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x; 
    this.y = y + 55; 
    this.step = 101;
    this.speed = speed;
    this.boundary = this.step *5;
    this.resetPos = -this.step;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < this.boundary) {
        this.x += this.speed * dt;
    } else {
        this.x = this.resetPos;
    }
    // If enemy is not passed boundary
        // move forward
        // increment x by speed * dt
    // else 
        // reset pos to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Hero class
class Hero {
    constructor () {
        this.sprite = 'images/char-boy.png';
        this.step = 101;
        this.jump = 83;
        this.startX = 2 * this.step;
        this.startY = (5 * this.jump) -15;
        this.x = this.startX; 
        this.y = this.startY;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(input) {
        switch(input) {
            case "left":
                if(this.x > 0) {
                    this.x -= this.step;
                }
                break;
            case "up":
                if(this.y > 0) {
                    this.y -= this.jump;
                }
                break;
            case "right": 
                if (this.x < this.step * 4) {
                    this.x += this.step;
                }
                break;
            case "down":
                if (this.y < this.jump * 4) {
                    this.y += this.jump;
                }
                break;
                
        }
    }
}
    // Constructor
        // Props
            // x cordinate
            // y cordinate 
            // Sprite image
        // Methods
            // Update Position
                // check collision 
                    // did x and y collide with enemy?
                // check win 
                    // did player reach final
            // Render
                // draw player on current x,y position
            // Handle keyboard input
                // Update players x,y pops acording to input
            // reset hero
                // set x,y pos to starting x,y


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// New Hero object 
const player = new Hero();
const bug1 = new Enemy(-101, 0, 300);
const bug2 = new Enemy(-101, 83, 200);
const bug3 = new Enemy(-101 *2.5, 83, 400);
// init allEnemies array
const allEnemies = [];
allEnemies.push(bug1);
allEnemies.push(bug2);
allEnemies.push(bug3);
// For each enemy create and push new Enemy object into the above array

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
