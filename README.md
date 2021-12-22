# React Text Particles

Create fancy text particles 😎

![5y7y9b](https://user-images.githubusercontent.com/27916419/146520664-d1cc323a-3a5b-444b-b402-18390309e9dc.gif)

<br>

## Installation

Install react-text-particles with npm

```bash
  npm install react-text-particles
```

<br>

## Usage

<br>

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

<br>

## Props List

| Name       | Type   | Default                                                       |
| ---------- | ------ | ------------------------------------------------------------- |
| text       | String | Halil Atilla                                                  |
| flow       | Number | 0.3                                                           |
| flowOffset | Number | 0                                                             |
| topSpeed   | Number | 100                                                           |
| lifeSpan   | Number | 2000                                                          |
| gravity    | Object | { direction: 90, force: 0 }                                   |
| canvas     | Object | { width: 880, height: 300, bg: '#161c1e' }                    |
| colorSet   | Array  | colorSet: ['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5'] |

<br>

## Development

Pull requests are encouraged and always welcome.
[Pick an issue](https://github.com/halilatilla/react-text-particles/issues)
and help us out!

To install and work on `React Text Particles` locally:

```bash
git clone https://github.com/halilatilla/react-text-particles.git
cd react-text-particles
npm install
```

<br>

`http://localhost:3000/`

```bash
yarn start or npm start
```

<br>

`http://localhost:6006/`

```bash
yarn storybook or npm start storybook
```

<br>

## Authors

- [@halilatilla](https://www.github.com/halilatilla)

## License

[MIT](https://choosealicense.com/licenses/mit/)
