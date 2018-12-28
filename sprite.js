class Sprite {
    constructor (speed, animation, x, y) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.animation = animation;
        this.len = animation.length;
        this.index = 0;
    }

    show () {
        let index = floor(this.index) % this.len;
        image (this.animation[index] , this.x, this.y)
    }

    animate () {
        this.index += this.speed;
        this.x += this.speed * 5;
        if(this.x > width) {
            this.x = -this.animation[0].width
        }
    }
}