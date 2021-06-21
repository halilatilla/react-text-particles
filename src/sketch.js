/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
export default function sketch(p) {
  let particles = []
  let field = []
  let fieldStep
  let gravity
  let config
  let colorSet = []

  p.myCustomRedrawAccordingToNewPropsHandler = props => {
    if (props.config) config = props.config
    if (props.colorSet) colorSet = props.colorSet
    p.setup()
  }

  class Particle {
    constructor(x, y, size, index) {
      this.baseSize = size
      this.index = index || 0
      this.spawn = p.createVector(x, y)
      this.init()
    }

    init() {
      this.size = this.baseSize * p.random(0.5, 1.5)
      this.start = p.millis()
      this.position = this.spawn.copy()
      this.velocity = p.createVector(0, 0)
      this.acceleration = p.createVector(0, 0)
      this.duration = config?.lifeSpan * p.random(0.2, 1.2)
      this.drag = p.random(0.9, 1)
      this.addForce(
        p.constructor.Vector.fromAngle(p.random(p.TWO_PI), p.random(10))
      )
      this.color = p.random(colorSet)
    }

    display() {
      let s = 1
      if (p.millis() - this.start < this.duration * 0.1) {
        s = p.map(p.millis() - this.start, 0, this.duration * 0.1, 0, 1)
      } else if (p.millis() - this.start > this.duration * 0.5) {
        s = p.map(
          p.millis() - this.start,
          this.duration * 0.5,
          this.duration,
          1,
          0
        )
      }
      p.fill(this.color)
      p.circle(
        this.position.x,
        this.position.y,
        this.size *
          s *
          p.map(this.velocity.mag(), 0, config?.topSpeed, 0.5, 1.2)
      )
    }

    update() {
      this.velocity.add(this.acceleration)
      this.velocity.limit(config?.topSpeed)
      this.velocity.mult(this.drag)
      this.position.add(this.velocity.copy().mult(1 / p._targetFrameRate))
      this.acceleration.mult(0)
      if (
        this.position.y > p.height ||
        p.millis() - this.start > this.duration
      ) {
        this.init()
      }
    }

    addForce(vector) {
      this.acceleration.add(vector)
    }
  }

  function setGravity() {
    gravity = p.constructor.Vector.fromAngle(
      p.radians(config?.gravity?.direction),
      config?.gravity.force
    )
  }

  function init() {
    p.clear()
    p.fill(0)
    p.textSize(config?.textSize)
    p.textAlign(p.CENTER, p.CENTER)
    p.textStyle(p.BOLD)
    p.text(config?.text, p.width / 2, p.height / 2)
    p.noFill()
    particles = []
    let step = p.floor(
      p.max(p.width, p.height) / p.min(160, p.min(p.width, p.height))
    )
    let i = 0
    for (let x = 0; x < p.width; x += step) {
      for (let y = 0; y < p.height; y += step) {
        const targetX = x + step / 2
        const targetY = y + step / 2
        const alpha = p.get(targetX, targetY)[3]
        if (alpha > 0.5) {
          particles.push(new Particle(targetX, targetY, step * 3, i))
          i++
        }
      }
    }
    field = {}
    p.clear()
    step = fieldStep = p.floor(
      p.max(p.width, p.height) / p.min(20, p.min(p.width, p.height))
    )
    i = 0
    for (let x = 0; x < p.width; x += step) {
      for (let y = 0; y < p.height; y += step) {
        i++
        const a = p.noise(i) * p.TWO_PI
        field[`${x}-${y}`] = a
        p.translate(x, y)
        p.rotate(a)
        p.rect(-step / 4, -step / 2, step / 2, step)
        p.resetMatrix()
      }
    }

    p.clear()

    p.draw = () => {
      p.background(config?.canvas?.bg || 'white')
      particles.forEach(particle => {
        particle.addForce(gravity)
        particle.addForce(
          p.constructor.Vector.fromAngle(
            field[
              `${particle.position.x - (particle.position.x % fieldStep)}-${
                particle.position.y - (particle.position.y % fieldStep)
              }`
            ] + config?.flowOffset,
            config?.flow
          )
        )
        particle.update()
        particle.display()
      })
    }
  }

  p.setup = () => {
    p.createCanvas(config?.canvas?.width, config?.canvas?.height)
    setGravity()
    init()
    p.frameRate(60)
    p.noStroke()
    p.colorMode(p.HSL, 100)
  }
}
