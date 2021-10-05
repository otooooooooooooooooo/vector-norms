import {unit} from './main.js'

export class FunctionGraph {
    constructor(func, x, y) {
        this.points = []
        this.func = func
        this.x = x
        this.y = y
        this.initialize()
    }

    initialize(){
        for (let i = 0; i < unit; i++) {
            let y = this.func(i)
            const points = [[i, y], [i, -y], [-i, y], [-i, -y]]
            points.forEach(p => {
                this.points.push([p[0] + this.x, p[1] + this.y])
                this.points.push([p[1] + this.x, p[0] + this.y])
            })
        }
    }

    setPosition(x, y) {
        this.points.length = 0
        this.x = x
        this.y = y
        this.initialize()
    }
}
