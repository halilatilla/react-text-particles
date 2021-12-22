![npm](https://img.shields.io/npm/v/react-text-particles?label=npm) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/halilatilla/react-text-particles?label=code%20size)
[![GitHub license](https://img.shields.io/github/license/halilatilla/react-text-particles?label=license)](https://github.com/halilatilla/react-text-particles/blob/main/LICENSE)

# React Text Particles

### **Create fancy text particles limited only by your imagination** 😎

<br>

![ysg9teskojiduxxb0u83rhe2](https://user-images.githubusercontent.com/27916419/147081699-e10f8eef-52a5-4ac3-a68f-23ec109ae38b.gif)

<br>

## Installation

Install react-text-particles with npm

```bash
  npm install react-text-particles
```

<br>

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

<br>

## Props List

| Name       | Type   | Default                                                       |
| ---------- | ------ | ------------------------------------------------------------- |
| text       | String | Halil Atilla                                                  |
| textSize   | Number | 160                                                           |
| flow       | Number | 0.3                                                           |
| flowOffset | Number | 0                                                             |
| topSpeed   | Number | 100                                                           |
| lifeSpan   | Number | 2000                                                          |
| gravity    | Object | { direction: 90, force: 0 }                                   |
| canvas     | Object | { width: 880, height: 300, bg: '#161c1e' }                    |
| colorSet   | Array  | colorSet: ['#fbbf24','#e91e63','#60a5fa','#673ab7','#65a30d'] |

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
