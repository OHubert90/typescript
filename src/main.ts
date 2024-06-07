import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

let age: number = 17;
let i: number;
let user: boolean = false;

for(i = 0; i<=age; i++){
    console.log(i)
}

if(age > 18){
    console.log("Volljährig")
}
else{
    console.log("Minderjährig")
}

if (user) {
    console.log('available.');
}
else {
    console.log("unavailable")
}




