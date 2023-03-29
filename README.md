![npm](https://img.shields.io/npm/v/react-text-particles?label=npm) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/halilatilla/react-text-particles?label=code%20size)
[![GitHub license](https://img.shields.io/github/license/halilatilla/react-text-particles?label=license)](https://github.com/halilatilla/react-text-particles/blob/main/LICENSE)

# 🎉 React Text Particles

### **Create visually stunning text particles with React Text Particles and let your imagination run wild! 😎**


<br>

![ysg9teskojiduxxb0u83rhe2](https://user-images.githubusercontent.com/27916419/147081699-e10f8eef-52a5-4ac3-a68f-23ec109ae38b.gif)

<br>

## **📦 Installation**

Install react-text-particles using npm:

```
npm install react-text-particles
```

## **🚀 Usage**

### **React**

```
import { TextParticles } from 'react-text-particles';

function App() {
  return <TextParticles />;
}
```

### **Next.js**

```
import dynamic from 'next/dynamic';

const TextParticles = dynamic(
  () => import('react-text-particles').then(mod => mod.TextParticles),
  {
    ssr: false,
  }
);

function App() {
  return <TextParticles />;
}
```

<br>

## **⚙️ Props**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| text | String | Halil Atilla | Text to display as particles |
| textSize | Number | 160 | Font size of text particles |
| flow | Number | 0.3 | Particle flow speed |
| flowOffset | Number | 0 | Particle flow offset |
| topSpeed | Number | 100 | Maximum particle speed |
| lifeSpan | Number | 2000 | Particle lifespan |
| gravity | Object | { direction: 90, force: 0 } | Gravity settings |
| canvas | Object | { width: 880, height: 300, bg: '#161c1e' } | Canvas settings |
| colorSet | Array | ['#fbbf24','#e91e63','#60a5fa','#673ab7','#65a30d'] | Particle colors |

<br>

## **🛠️ Development**

Contributions are welcome and appreciated! Feel free to submit pull requests and help us improve the project.

To set up React Text Particles locally:

```
git clone https://github.com/halilatilla/react-text-particles.git
cd react-text-particles
npm install
```

To start the development server:

```
yarn start
// or
npm start
```

Visit **[http://localhost:3000/](http://localhost:3000/)**

To start Storybook:

```
yarn storybook
// or
npm start storybook
```

Visit **[http://localhost:6006/](http://localhost:6006/)**

<br>

## **👤 Authors**

- **[@halilatilla](https://github.com/halilatilla)**

<br>

## **📄 License**

This project is licensed under the MIT License - see the **[LICENSE](https://github.com/halilatilla/react-text-particles/blob/main/LICENSE)** file for details.
