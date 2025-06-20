# React + TailwindCSS 

To create a React project in typescript using vite:

```code
npm create vite@latest netflix-ui -- --template react
```
To initialize Tailwind CSS in your project:

*1. Install Tailwind CSS*
Install tailwindcss and @tailwindcss/vite via npm.

```code
npm install tailwindcss @tailwindcss/vite
```
*2. Configure the Vite plugin*
Add the @tailwindcss/vite plugin to your Vite configuration file **vite.config.ts**:
```code
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

