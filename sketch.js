var canvas,backgroundImg;
var gameState = 0;
var playerCount ,database;
var form,game,player;
var allPlayers;
var fighter1,fighter2;
var fighter1Img;
var background;

function preload (){
  fighter1Img = loadImage("still.png");
  backgroundImg = loadImage("bb.png");
}
function setup(){
  canvas = createCanvas(900,700,500.10);
database = firebase.database();

game = new Game();
game.getState();
game.start();
}

function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
