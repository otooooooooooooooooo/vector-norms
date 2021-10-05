import {UnitBall} from "./unitball.js";
import {clear} from "./canvas.js"

 export const unit = 25
 let canvas
 export let canvasData
 export let canvasWidth
 export let canvasHeight
 export let ctx

export const balls = []

addEventListener("DOMContentLoaded",  () => {

    canvas = document.getElementById("canvas");
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    ctx = canvas.getContext("2d");
    canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);

    for (let i = 1; i <= 8; i++) {
        const ball = new UnitBall(norm(i))
        balls.push(ball)
        ball.display()
    }

})

//Returns norm function to initialize ball/graph
 const norm = p => x => Math.round(Math.pow(Math.pow(unit, p) - Math.pow(x, p),1/p))

 const moveAllToCorner = () => {
    clear()

    for(let i = 0; i < balls.length; i++) {
        const ball = balls[i]
        ball.move(unit + 5, unit + 5)
        ball.display()
    }
}

//will be used for sorting norm graphs by color
function RGBEuclideanDistance(ball1, ball2) {
    return Math.sqrt((ball1.r - ball2.r)^2 + (ball1.g - ball2.g)^2 + (ball1.b - ball2.b)^2)
}
