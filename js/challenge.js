let count = document.querySelector('#counter')
console.log(count)

let plusButton = document.querySelector('#plus')
plusButton.addEventListener('click', incrementCounter)

function incrementCounter(eventObject) {
    count++
}








// let minusButton = document.querySelector('#minus')
// minusButton.addEventListener('click', decrementCounter)

// function decrementCounter()


