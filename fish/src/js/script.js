var app = new PIXI.Application(),
    loader = PIXI.loader,
    Text = PIXI.Text,
    TilingSprite = PIXI.extras.TilingSprite,
    Graphics = PIXI.Graphics;

document.body.appendChild(app.view);
LayoutManager.fitLayout();

PIXI.loader
  .add(["images/fish.png", "images/worm.png", "images/water.png", "images/grass.png", "images/worm-red.png"])
  .load(setup);

var fish,
    worm,
    text,
    water,
    grass,
    scores = 0,
    vec = {},
    wormRed;


function setup() {

  fish   = new SeaCitizen(loader.resources["images/fish.png"].texture);
  worm   = new SeaCitizen(loader.resources["images/worm.png"].texture);
  wormRed= new SeaCitizen(loader.resources["images/worm-red.png"].texture);
  water  = new TilingSprite(loader.resources["images/water.png"].texture);
  grass  = new TilingSprite(loader.resources["images/grass.png"].texture);
  text   = new Text("Worms "+scores,{fontFamily : 'Arial', fontSize: 50, fill : 0xffa500, align : 'start'});

  fish.anchor.set(0.5, 0.5);
  fish.position.set(app.view.width/2, app.view.height/2);
  fish.width = app.view.width/5;
  fish.height = fish.width/2;

  worm.width = wormRed.width = app.view.width/25;
  worm.height = wormRed.height = worm.width;

  fish.vx = 0;
  fish.vy = 0;

  worm.position.set(Math.random()*app.view.width, 0);
  wormRed.position.set(Math.random()*app.view.width, 0);
  worm.vy = wormRed.vy= 5;

  water.width = app.view.width;
  water.height = app.view.height;

  grass.width = app.view.width;
  grass.height = app.view.height/6;
  grass.position.set(0, app.view.height - grass.height);

  var appChilds = [water,fish,text,worm,wormRed,grass];
  addChilds(appChilds, app.stage);

  app.ticker.add(function(){
    gameLoop();
  }); 

  setInterval(function() {
    worm.vy+=1;
    wormRed.vy+=1;
    app.stage.addChild(wormRed);
  }, 5000);
}


function gameLoop(){ 
  fish.x += fish.vx;
  fish.y += fish.vy;

  water.tilePosition.x -= 2;
  grass.tilePosition.x -= 4;
  
  worm.y +=worm.vy;
  wormRed.y +=wormRed.vy;

  if(fish.x >= app.view.width || fish.x <= 0) {
    fish.vx*=-1;
    fish.rotation += Math.PI;
  }

  if(fish.y >= app.view.height || fish.y <=0) {
    fish.vy*=-1;
    fish.rotation += Math.PI;
  }

  if(hitTestRectangle(fish, worm)){
    scores+=1;
    text.text = "Worms "+scores;
    worm.position.set(Math.random()*app.view.width, 0);
  }

  if(hitTestRectangle(fish, wormRed)){
    text.text = "GAME OVER!";
    app.stage.removeChild(worm);
    app.stage.removeChild(wormRed);
    window.removeEventListener("pointerdown", pointerDown);
    window.removeEventListener("pointermove", pointerMove);
    text.position.set(app.view.width/2 - text.width/2, app.view.height/2 - text.height/2)
    text.style = {fontFamily : 'Arial', fontSize: 100, fill : 0xff2800, align : 'start'}
    fishDeath();
  }

  if(wormRed.y >= app.view.height) {
    wormRed.position.set(Math.random()*app.view.width, 0);
  }

  if(worm.y >= grass.y) {
    worm.position.set(Math.random()*app.view.width, 0);
  }

}

window.addEventListener("resize", function(){
  LayoutManager.fitLayout();
  water.width = app.view.width;
  water.height = app.view.height;
  fish.width = app.view.width/5;
  fish.height = fish.width/2;
  worm.width = wormRed.width = app.view.width/25;
  worm.height = wormRed.width = worm.width;
  fish.position.set(app.view.width/2, app.view.height/2);
  worm.position.set(app.view.width-100, 30);
  wormRed.position.set(Math.random()*app.view.width, 0);
  grass.width = app.view.width;
  grass.height = app.view.height/5;
  grass.position.set(0, app.view.height - grass.height);
});

window.addEventListener('pointerdown', pointerDown);
window.addEventListener('pointermove', pointerMove);

function pointerDown(e) {
  fish.rotation = getAngle(e, fish).angle;
  fish.vx = vec.dx/60;
  fish.vy = vec.dy/60;
}

function pointerMove(e) {
  fish.rotation = getAngle(e, fish).angle;
  fish.vx = vec.dx/60;
  fish.vy = vec.dy/60;
}

function getAngle(pointer, target) {
  vec.dx = pointer.x - target.x;
  vec.dy = pointer.y - target.y;
  vec.angle = Math.atan2(vec.dy, vec.dx);
  return vec;
}

function fishDeath() {
  fish.vx = 0;
  fish.vy = -3;
  fish.rotation = Math.PI;
}

function addChilds(arr, obj) {
  arr.forEach(function(child) {
    obj.addChild(child);
  });
}




    
