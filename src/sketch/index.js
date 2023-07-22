import Particle from './particle';

const sketch = (p5) => {
  let particles = [];
  let field = [];
  let fieldStep;
  let gravity;
  let config;
  let colorSet = [];

  p5.setup = () => {
    if (config) {
      p5.createCanvas(config?.canvas?.width, config?.canvas?.height);
      p5.colorMode(p5.HSL, 100);
      p5.frameRate(60);
      p5.noStroke();
      setGravity();
      init();
    }
  };

  p5.updateWithProps = (props) => {
    if (props.config) config = props.config;
    if (props.colorSet) colorSet = props.colorSet;
    p5.setup();
  };

  function init() {
    p5.clear();
    p5.fill(0);
    p5.textSize(config?.textSize);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textStyle(p5.BOLD);
    p5.text(config?.text, p5.width / 2, p5.height / 2);
    particles = createParticles();
    field = createField();
    p5.clear();
  }

  function createParticles() {
    let tempParticles = [];
    let step = calculateStep(160);
    let i = 0;
    for (let x = 0; x < p5.width; x += step) {
      for (let y = 0; y < p5.height; y += step) {
        const alpha = p5.get(x + step / 2, y + step / 2)[3];
        if (alpha > 0.5) {
          tempParticles.push(
            new Particle(
              p5,
              config,
              colorSet,
              x + step / 2,
              y + step / 2,
              step * 3,
              i
            )
          );
          i++;
        }
      }
    }
    return tempParticles;
  }

  function createField() {
    let tempField = [];
    let step = (fieldStep = calculateStep(20));
    let i = 0;
    for (let x = 0; x < p5.width; x += step) {
      for (let y = 0; y < p5.height; y += step) {
        i++;
        const a = p5.noise(i) * p5.TWO_PI;
        tempField[`${x}-${y}`] = a;
      }
    }
    return tempField;
  }

  function calculateStep(min) {
    return p5.floor(
      p5.max(p5.width, p5.height) / p5.min(min, p5.min(p5.width, p5.height))
    );
  }

  function setGravity() {
    gravity = p5.createVector(
      p5.radians(config?.gravity?.direction),
      config?.gravity?.force
    );
  }

  p5.draw = () => {
    if (config) {
      p5.background(config?.canvas?.bg || 'white');
      particles.forEach((particle) => {
        particle.addForce(gravity);
        particle.addForce(
          p5.createVector(
            field[
              `${Math.floor(particle.position.x / fieldStep) * fieldStep}-${
                Math.floor(particle.position.y / fieldStep) * fieldStep
              }`
            ] + config?.flowOffset,
            config?.flow
          )
        );
        particle.update();
        particle.display();
      });
    }
  };
};

export default sketch;
