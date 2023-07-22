export default class Particle {
  constructor(p5, config, colorSet, x, y, size, index = 0) {
    this.p5 = p5;
    this.config = config;
    this.colorSet = colorSet;
    this.baseSize = size;
    this.index = index;
    this.spawn = this.p5.createVector(x, y);
    this.init();
  }

  init() {
    this.size = this.baseSize * this.p5.random(0.5, 1.5);
    this.start = this.p5.millis();
    this.position = this.spawn.copy();
    this.velocity = this.p5.createVector(0, 0);
    this.acceleration = this.p5.createVector(0, 0);
    this.duration = this.config?.lifeSpan * this.p5.random(0.2, 1.2);
    this.drag = this.p5.random(0.9, 1);
    this.addForce(
      this.p5.createVector(this.p5.random(this.p5.TWO_PI), this.p5.random(10))
    );
    this.color = this.p5.random(this.colorSet);
  }

  display() {
    const elapsed = this.p5.millis() - this.start;
    let sizeMultiplier = 1;

    if (elapsed < this.duration * 0.1) {
      sizeMultiplier = this.p5.map(elapsed, 0, this.duration * 0.1, 0, 1);
    } else if (elapsed > this.duration * 0.5) {
      sizeMultiplier = this.p5.map(
        elapsed,
        this.duration * 0.5,
        this.duration,
        1,
        0
      );
    }

    this.p5.fill(this.color);
    this.p5.circle(
      this.position.x,
      this.position.y,
      this.size *
        sizeMultiplier *
        this.p5.map(this.velocity.mag(), 0, this.config?.topSpeed, 0.5, 1.2)
    );
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.config?.topSpeed);
    this.velocity.mult(this.drag);
    this.position.add(this.velocity.copy().mult(1 / this.p5._targetFrameRate));
    this.acceleration.mult(0);

    if (
      this.position.y > this.p5.height ||
      this.p5.millis() - this.start > this.duration
    ) {
      this.init();
    }
  }

  addForce(vector) {
    this.acceleration.add(vector);
  }
}
