export interface TextParticlesProps {
    text: string;
    textSize: number;
    flow?: number;
    topSpeed?: number;
    lifeSpan?: number;
    flowOffset?: number;
    gravity?: {
      direction?: number;
      force?: number;
    };
    canvas: {
      width: number;
      height: number;
      bg?: string;
    };
    colorSet?: string[];
  }