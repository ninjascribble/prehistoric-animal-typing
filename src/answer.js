export function setupAnswer(element, word) {
    let isCorrect = false;

    const setIsCorrect = () => {
        isCorrect = element.value.toUpperCase() === word.textContent.toUpperCase()
        if (isCorrect) {
            element.classList.add("correct")
        } else {
            element.classList.remove("correct")
        }
    }

    element.addEventListener('keyup', () => setIsCorrect())
}