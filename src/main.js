import './style.css'
import { setupWord } from './word.js'
import { setupAnswer } from './answer.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <h1 id="word"></h1>
      <input id="answer" type="text" autofocus tabindex="0" spellcheck="false" />
      <br/><br/>
      <button id="reset" type="button">Reset</button>
      <img id="reward" class="hidden" />
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
  reward.classList.add("hidden")
  reward.src = ''
  answer.classList.remove("correct")
  answer.value = ''
  answer.focus()
})
