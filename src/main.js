import './style.css'
import { setupAnswer } from './answer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>PROTEROSUCHUS</h1>
    <div class="card">
      <input id="answer" type="text" />
    </div>
  </div>
`

setupAnswer(document.querySelector('#answer'))
