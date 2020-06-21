class Sprite {
    constructor(options) {

        this.STATE = {
          UP: 0,
          RIGTH: 1,
          LEFT: 2,
          DOWN: 3,
          STAND: 4,
        };
        this.state = this.STATE.STAND;
        this.speed = 2;
        this.move = 0;
        this.x = 0;
        this.y = 0;
        this.ctx = options.ctx;

        this.image = options.image;

        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = options.ticksPerFrame || 0;
        this.numberOfFrames = options.numberOfFrames || 1;

        this.width = options.width;
        this.height = options.height;

        this.start();
    }
    moveUP(){
        this.move = this.height*3;
        this.state = this.STATE.UP;
    }

    moveDown(){
        this.move = this.height*0;
        this.state = this.STATE.DOWN;
    }

    moveLeft(){
        this.move = this.height*1;
        this.state = this.STATE.LEFT;
    }

    moveRigth(){
        this.move = this.height*2;
        this.state = this.STATE.RIGTH;
    }

    moveStop(){
        this.move = this.height*0;
        this.state = this.STATE.STOP;
    }
    update() {
        this.tickCount++;

        if (this.tickCount > this.ticksPerFrame) {
            this.tickCount = 0;
            if (this.frameIndex < this.numberOfFrames - 1) {
                this.frameIndex++;
            } else {
                this.frameIndex = 0;
            }
        }
    }

    render() {
        if (this.state == this.STATE.RIGTH){
            this.x += this.speed;
            console.log(this.state);
        }
        if (this.state == this.STATE.LEFT){
            this.x -= this.speed;
            console.log(this.state);
        }

        if (this.state == this.STATE.UP){
            this.y -= this.speed;
        }
        if (this.state == this.STATE.DOWN){
            this.y += this.speed;
        }
        if (this.state != this.STATE.STOP){
            this.ctx.clearRect(this.x, this.y, this.width / this.numberOfFrames, 250);
            this.ctx.drawImage(
                this.image,
                this.frameIndex * this.width / this.numberOfFrames,
                this.move,
                this.width / this.numberOfFrames,
                this.height,
                this.x,
                this.y,
                this.width / this.numberOfFrames,
                this.height
            )
        }
        else {
            this.ctx.clearRect(this.x, this.y, this.width / this.numberOfFrames, 250);
            this.ctx.drawImage(
                this.image,
                this.numberOfFrames,
                this.move,
                this.width / this.numberOfFrames,
                this.height,
                this.x,
                this.y,
                this.width / this.numberOfFrames,
                this.height
            )
        }
    }

    start() {
        let loop = () => {
            this.update();
            this.render();

            window.requestAnimationFrame(loop);
        }

        window.requestAnimationFrame(loop);
    }
}

let canvas = document.getElementById('canvasId');
canvas.width = 1000;
canvas.height = 800;
let manImage = new Image();
manImage.src = 'images/man_full.png';




var x = 100; // 
var y = 100;

let sprite = new Sprite({
  ctx: canvas.getContext('2d'),
  image: manImage,
  width: 1145,
  height: 160,
  numberOfFrames: 12,
  ticksPerFrame: 4,
})


