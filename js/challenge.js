let plusButton = document.querySelector('#plus')
plusButton.addEventListener('click', incrementCounter)

function incrementCounter(eventObject) {
    let count = document.querySelector('#counter');
    return (count++);
}








// let minusButton = document.querySelector('#minus')
// minusButton.addEventListener('click', decrementCounter)

// function decrementCounter()


