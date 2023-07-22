export interface ParticleState {
  colorSet: string[];
  config: {
    text: string;
    textSize: number;
    flow: number;
    topSpeed: number;
    lifeSpan: number;
    flowOffset: number;
    gravity: {
      direction: number;
      force: number;
    };
    canvas: {
      width: number;
      height: number;
      bg: string;
    };
  };
  sketch: (p5: any) => void;
}
