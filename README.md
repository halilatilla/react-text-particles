# React Text Particles

You can create bubbles particles with this package.

![5y7y9b](https://user-images.githubusercontent.com/27916419/146520664-d1cc323a-3a5b-444b-b402-18390309e9dc.gif)

## Installation

Install react-text-particles with npm

```bash
  npm install react-text-particles
```

## Usage

### React

```js
import TextParticles from 'react-text-particles';

function App() {
  return <TextParticles />;
}
```

### Nextjs

```js
const TextParticles = dynamic(() => import('react-text-particles'), {
  ssr: false,
});

function App() {
  return <TextParticles />;
}
```

## Props List

| Name       | Type   | Default                                                       |
| ---------- | ------ | ------------------------------------------------------------- |
| text       | String | H.A                                                           |
| textSize   | Number | 160                                                           |
| flow       | Number | 0.3                                                           |
| flowOffset | Number | 0                                                             |
| topSpeed   | Number | 100                                                           |
| lifeSpan   | Number | 2000                                                          |
| gravity    | Object | { direction: 90, force: 0 }                                   |
| canvas     | Object | { width: 300, height: 300, bg: 'white' }                      |
| colorSet   | Array  | colorSet: ['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5'] |

## Authors

- [@halilatilla](https://www.github.com/halilatilla)

## License

[MIT](https://choosealicense.com/licenses/mit/)
