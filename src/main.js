import './style.css'
import { setupWord } from './word.js'
import { setupAnswer } from './answer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1 id="word"></h1>
    <div class="card">
      <img id="reward" class="hidden" />
      <input id="answer" type="text" />
      <br/><br/>
      <button id="reset" type="button">Reset</button>
    </div>
  </div>
`

const word = document.querySelector('#word')
const answer = document.querySelector('#answer')
const reset = document.querySelector('#reset')
const reward = document.querySelector('#reward')

setupWord(word)
setupAnswer(answer, word, reward)

reset.addEventListener('click', () => {
  setupWord(word)
  answer.value = ''
})
