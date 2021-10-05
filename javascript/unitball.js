import {unit, canvasWidth, canvasHeight} from "./main.js";
import {FunctionGraph} from "./graph.js";
import {drawPixel, updateCanvas} from './canvas.js'

export class UnitBall {
    constructor(func) {
        this.r = randColor()
        this.g = randColor()
        this.b = randColor()
        this.a = 255

        this.graph = new FunctionGraph(func, randX(), randY())
    }

    display = () => {
        this.graph.points.forEach(x => {drawPixel(x[0], x[1], this.r, this.g, this.b, this.a)})
        updateCanvas()
    }

    move = (x, y) => this.graph.setPosition(x, y)

}

const randColor = () => Math.floor(Math.random() * 255)
const randX = () => Math.floor(Math.random() * (canvasWidth - unit * 2) + unit)
const randY = () => Math.floor(Math.random() * (canvasHeight - unit * 2) + unit)

