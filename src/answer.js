export function setupAnswer(element, word, reward) {
    let isCorrect = false;

    const setIsCorrect = () => {
        isCorrect = element.value.toUpperCase() === word.textContent.toUpperCase()
        if (isCorrect) {
            element.classList.add("correct")
            reward.classList.remove("hidden")
            reward.src = new URL(`/public/${word.textContent.toLowerCase().replace(/\s/g, '_')}.jpg`, import.meta.url).href
        } else {
            element.classList.remove("correct")
            reward.classList.add("hidden")
            reward.src = ''
        }
    }

    element.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) { // 13 = enter key
            setIsCorrect()
        }
    })
}