class Sprite {
    constructor(options) {
        this.x = 10;
        this.y = 10;
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
        this.x += 2;
        this.ctx.clearRect(this.x, this.y, this.width / this.numberOfFrames, 250);
        this.ctx.drawImage(
            this.image,
            this.frameIndex * this.width / this.numberOfFrames,
            0,
            this.width / this.numberOfFrames,
            this.height,
            this.x,
            this.y,
            this.width / this.numberOfFrames,
            this.height
        )
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
manImage.src = 'images/man.png';




var x = 100; // 
var y = 100;

let sprite = new Sprite({
  ctx: canvas.getContext('2d'),
  image: manImage,
  width: 1145,
  height: 250,
  numberOfFrames: 12,
  ticksPerFrame: 4,
})


