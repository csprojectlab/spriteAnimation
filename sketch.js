let spritedata;
let spritesheet;
let animation = [];   // Each frame of an animation

function preload () {
    spritedata = loadJSON('./image/horse.json')
    spritesheet = loadImage('./image/horse.png')
}

function setup () {
    createCanvas(640, 480);
    let frames = spritedata.frames;
    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img)
    }
    console.log(animation)

}

function draw () {
    background(0)
    image(animation[frameCount % animation.length], 0, 0)
    
}