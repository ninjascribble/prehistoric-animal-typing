export function setupAnswer(element) {
    let isCorrect = false;

    const setIsCorrect = () => {
        isCorrect = element.value.toUpperCase() === 'PROTEROSUCHUS';
        if (isCorrect) {
            element.classList.add("correct")
        } else {
            element.classList.remove("correct")
        }
    }

    element.addEventListener('keyup', () => setIsCorrect())
}