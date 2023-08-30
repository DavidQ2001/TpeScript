import './style.css'
//import './topics/01-basic-types.ts'
import { setupCounter } from './counter.ts'
//import './topics/05-basic-desctructuring.ts'
import './topics/11-optional-chaining.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = ` hola mundo`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
