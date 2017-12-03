Arcade-game
===============================

This is the third project of the intermediate JavaScript section for Udacity's front-end web development nanodegree. It's a version of the classic frogger arcade-game. The basic requirements for this projects are:
- The player has to reach the water without colliding into the enemies (bugs).
- The player can move up, down, left and right without falling out of the screen.
- The enemies run on the paved block portion of the scene at various speeds.
- The game resets when the player collides into an enemy.
- When the player reaches the water the game is won.
Here is the complete [rubric](https://review.udacity.com/#!/projects/2696458597/rubric).

### What I've learned
This project's goal is to learn about object-oriented programming. All functions must be either class functions or class prototype functions.
I've learned how to write coherent class prototype functions as well as how the scope and prototype chains works.
I've also learned how to use canvas to draw patterns, text and how to create animated elements.

### How to install it.
To run the application clone the repository to your computer:

```
git clone https://github.com/Fa-v/arcade-game.git
cd arcade-game/
```
Then open the index html in your browser.

You can also follow this link to play it.

### How to play it.
Use the following keys to move the player:
- Up: `up-arrow` or `W`
- Down: `down-arrow` or `S`
- Left: `left-arrow` or `A`
- Right: `right-arrow` or `D`

You have to get to the water without colliding with the ladybugs. You have three lives, you lose a life when you collide three times. If you lose three lives you'll lose the game. Each time you get to the water you'll score 100 points. Each time you collide you'll lose 50 points. After you score 300 points collectibles will appear. You'll win the game when you score at least 2000 points.
When you lose or win the game, a play-again button will appear.

### Useful links.
These are some sites that helped me to work on this project:
- w3school [Game Movement](https://www.w3schools.com/graphics/game_movement.asp)
- Khan Academy [Intro to Hoppy Beaver](https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/side-scroller/a/intro-to-hoppy-beaver)
- HTML5 Canvas [Chapter 3. The HTML5 Canvas Text API](http://chimera.labs.oreilly.com/books/1234000001654/ch03.html). By Steve Fulton and Jeff Fulton
- Dive into HTML5 [Let’s Call It A Draw(ing Surface)](http://diveintohtml5.info/canvas.html#text). By Mark Pilgrim
- Udacity's [HTML5 Canvas](https://www.udacity.com/course/html5-canvas--ud292)