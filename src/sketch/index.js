/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

import Particle from './particle';

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

  function init() {
    p5.clear();
    p5.fill(0);
    p5.textSize(config?.textSize);
    p5.text(config?.text, p5.width / 2, p5.height / 2);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textStyle(p5.BOLD);
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
          particles.push(
            new Particle(p5, config, colorSet, targetX, targetY, step * 3, i)
          );
          i++;
        }
      }
    }
    field = [];
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
