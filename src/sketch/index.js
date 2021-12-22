/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

export default function sketch(p5) {
  let particles = [];
  let field = [];
  let fieldStep;
  let gravity;
  let config;
  let colorSet = [];

  p5.setup = () => {
    p5.createCanvas(config?.canvas?.width, config?.canvas?.height);
    setGravity();
    init();
    p5.frameRate(60);
    p5.noStroke();
    p5.colorMode(p5.HSL, 100);
  };

  p5.updateWithProps = props => {
    if (props.config) config = props.config;
    if (props.colorSet) colorSet = props.colorSet;
    p5.setup();
  };

  class Particle {
    constructor(x, y, size, index) {
      this.baseSize = size;
      this.index = index || 0;
      this.spawn = p5.createVector(x, y);
      this.init();
    }

    init() {
      this.size = this.baseSize * p5.random(0.5, 1.5);
      this.start = p5.millis();
      this.position = this.spawn.copy();
      this.velocity = p5.createVector(0, 0);
      this.acceleration = p5.createVector(0, 0);
      this.duration = config?.lifeSpan * p5.random(0.2, 1.2);
      this.drag = p5.random(0.9, 1);
      this.addForce(
        p5.constructor.Vector.fromAngle(p5.random(p5.TWO_PI), p5.random(10))
      );
      this.color = p5.random(colorSet);
    }

    display() {
      let s = 1;
      if (p5.millis() - this.start < this.duration * 0.1) {
        s = p5.map(p5.millis() - this.start, 0, this.duration * 0.1, 0, 1);
      } else if (p5.millis() - this.start > this.duration * 0.5) {
        s = p5.map(
          p5.millis() - this.start,
          this.duration * 0.5,
          this.duration,
          1,
          0
        );
      }
      p5.fill(this.color);
      p5.circle(
        this.position.x,
        this.position.y,
        this.size *
          s *
          p5.map(this.velocity.mag(), 0, config?.topSpeed, 0.5, 1.2)
      );
    }

    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(config?.topSpeed);
      this.velocity.mult(this.drag);
      this.position.add(this.velocity.copy().mult(1 / p5._targetFrameRate));
      this.acceleration.mult(0);
      if (
        this.position.y > p5.height ||
        p5.millis() - this.start > this.duration
      ) {
        this.init();
      }
    }

    addForce(vector) {
      this.acceleration.add(vector);
    }
  }

  function init() {
    p5.clear();
    p5.fill(0);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textStyle(p5.BOLD);
    p5.textSize(p5.width / 5);
    p5.text(config?.text, p5.width / 2, p5.height / 2);
    p5.noFill();
    particles = [];
    let step = p5.floor(
      p5.max(p5.width, p5.height) / p5.min(160, p5.min(p5.width, p5.height))
    );
    let i = 0;
    for (let x = 0; x < p5.width; x += step) {
      for (let y = 0; y < p5.height; y += step) {
        const targetX = x + step / 2;
        const targetY = y + step / 2;
        const alpha = p5.get(targetX, targetY)[3];
        if (alpha > 0.5) {
          particles.push(new Particle(targetX, targetY, step * 3, i));
          i++;
        }
      }
    }
    field = {};
    p5.clear();
    step = fieldStep = p5.floor(
      p5.max(p5.width, p5.height) / p5.min(20, p5.min(p5.width, p5.height))
    );
    i = 0;
    for (let x = 0; x < p5.width; x += step) {
      for (let y = 0; y < p5.height; y += step) {
        i++;
        const a = p5.noise(i) * p5.TWO_PI;
        field[`${x}-${y}`] = a;
        p5.translate(x, y);
        p5.rotate(a);
        p5.rect(-step / 4, -step / 2, step / 2, step);
        p5.resetMatrix();
      }
    }

    p5.clear();

    p5.draw = () => {
      p5.background(config?.canvas?.bg || 'white');
      particles.forEach(particle => {
        particle.addForce(gravity);
        particle.addForce(
          p5.constructor.Vector.fromAngle(
            field[
              `${particle.position.x -
                (particle.position.x % fieldStep)}-${particle.position.y -
                (particle.position.y % fieldStep)}`
            ] + config?.flowOffset,
            config?.flow
          )
        );
        particle.update();
        particle.display();
      });
    };
  }

  function setGravity() {
    gravity = p5.constructor.Vector.fromAngle(
      p5.radians(config?.gravity?.direction),
      config?.gravity.force
    );
  }
}
