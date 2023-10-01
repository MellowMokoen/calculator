// Function to append a character into the input
function appendToDisplay(value) {
    document.getElementById('number').value += value;
}

// Function to clear every character displayed
function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('number').value = '';
}

// Function to move back by deleting each character starting from the last one 
function moveBack() {
    let number = document.getElementById('number');
    let numberDisplayed = number.value;

    if (numberDisplayed.length > 0) {
        number.value = numberDisplayed.replace(/.$/, '');
    }
}
   
// Function to calculate and display the results
function calculate() {
    let expression = document.getElementById('number').value;

    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('number').value = 'Error';
    }
}