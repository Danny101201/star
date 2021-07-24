const canvas = document.querySelector('#canvas')
const c = canvas.getContext('2d')
let w, h, stars, stars2

function init() {
    resize()
    animationLoop()
}
function resize() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
    stars = []
    for (let i = 0; i < 500; i++) {
        stars.push(new Star())
    }
    stars2 = []
    for (let i = 0; i < 500; i++) {
        stars2.push(new Star2())
    }

}
function animationLoop() {
    c.clearRect(0, 0, w, h)
    requestAnimationFrame(animationLoop)
    drowScence()
}
function drowScence() {
    stars.forEach(star => {
        star.update()
    })
    stars2.forEach(star2 => {
        star2.update()
    })
}
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min
}
class Star {
    constructor() {
        this.reset()
        this.rgb = `52,235,236`
    }
    reset() {
        this.x = getRandomInt(0, w)
        this.xc = ((this.x - (w/2)) / (w/2)) / 2
        this.y = getRandomInt(-(h * 0.3), h)
        this.yc = getRandomInt(10,15) /10
        this.size = getRandomInt(10, 20) / 10
        this.a = getRandomInt(-10, 0) / 10
        this.ac = getRandomInt(3,5)/100
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        c.fillStyle = `rgba(${this.rgb},${this.a})`
        c.strokeStyle = `rgba(${this.rgb},${this.a})`
        c.fill()
        c.stroke()
        c.closePath()
    }
    update() {
        this.draw()
        this.x += this.xc
        this.y += this.yc
        this.a += this.ac
        if (this.a > 1) {
            this.ac *= -1
        } else if (this.a < 0 && this.ac < 0) {
            this.reset()
        }
    }
}
class Star2 {
    constructor() {
        this.reset()
        this.rgb = `52,235,236`
    }
    reset() {
        this.x = getRandomInt(0, w)
        this.y = getRandomInt(-(h * 0.3), h)
        this.size = getRandomInt(0, 5) / 10
        this.a = getRandomInt(-10, 0) / 10
        this.ac = 0.01
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        c.fillStyle = `rgba(${this.rgb},${this.a})`
        c.strokeStyle = `rgba(${this.rgb},${this.a})`
        c.fill()
        c.stroke()
        c.closePath()
    }
    update() {
        this.draw()
        this.y -= 0.1
        this.a += this.ac
        if (this.a > 1.5) {
            this.ac *= -1
        } else if (this.a < 0 && this.ac < 0) {
            this.reset()
        }
    }
}

window.addEventListener('resize', init)
window.addEventListener('DOMContentLoaded', init)

