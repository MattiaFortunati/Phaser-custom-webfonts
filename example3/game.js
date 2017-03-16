var game = new Phaser.Game(320, 480, Phaser.CANVAS, "game");

game.state.add("preloaderState",preloaderState);
game.state.add("gameState",gameState);
game.state.start("preloaderState");