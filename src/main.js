import './style.css'
import { setupWord } from './word.js'
import { setupAnswer } from './answer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="word"></h1>
    <div class="card">
      <input id="answer" type="text" />
    </div>
  </div>
`

setupWord(document.querySelector('#word'))
setupAnswer(
  document.querySelector('#answer'),
  document.querySelector('#word')
)
