import {canvasHeight, canvasWidth, unit} from "./main.js";
import {balls, canvasData, ctx} from './main.js'

function displayAsGrid() {
    const gridPositions = [
        [unit +5, unit + 5],
        [canvasWidth / 2 - unit - 5, unit + 5],
        [canvasWidth / 2 + unit + 5, unit + 5],
        [canvasWidth - unit - 5, unit + 5],

        [unit +5, canvasHeight - unit - 5],
        [canvasWidth / 2 - unit - 5, canvasHeight - unit - 5],
        [canvasWidth / 2 + unit + 5, canvasHeight - unit - 5],
        [canvasWidth - unit - 5, canvasHeight - unit - 5],
    ]

    for (let i = 0; i < balls.length; i++) {
        balls[i].move(gridPositions[i][0], gridPositions[i][1])
        balls[i].display()
    }

}

export function drawPixel (x, y, r, g, b, a) {
    let index = (x + y * canvasWidth) * 4;

    canvasData.data[index] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

export function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}

export function clear() {
    //TODO
}
