// Global counter variable
let counter = 0;

// 1pt: Simple Functions
function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

// 1pt: Simple For Loop
function runForLoop() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result.trim();
}

// 1pt: Repetition with Condition (odd numbers from 1 to counter)
function showOddNumbers() {
    let result = "";
    for (let i = 1; i <= counter; i += 2) {
        result += i + " ";
    }
    document.getElementById("oddNumberResult").textContent = result.trim();
}

// 1pt: Arrays – multiples of 5 in reverse order, console.log the array itself
function addMultiplesToArray() {
    let multiples = [];

    if (counter >= 5) {
        // Start from largest multiple ≤ counter, step -5
        for (let i = Math.floor(counter / 5) * 5; i >= 5; i -= 5) {
            multiples.push(i);
        }
    }
    // else → remains empty array

    console.log(multiples);
}

// 2pts: Objects and Form Fields – print object from form inputs
function printCarObject() {
    const car = {
        cType: document.getElementById("carType").value.trim(),
        cMPG: document.getElementById("carMPG").value.trim(),
        cColor: document.getElementById("carColor").value.trim()
    };

    console.log(car);
}

// 2pts: Load car objects from footer script variables
function loadCar(num) {
    let selectedCar;

    if (num === 1) {
        selectedCar = carObject1;
    } else if (num === 2) {
        selectedCar = carObject2;
    } else if (num === 3) {
        selectedCar = carObject3;
    }

    if (selectedCar) {
        document.getElementById("carType").value  = selectedCar.cType;
        document.getElementById("carMPG").value   = selectedCar.cMPG;
        document.getElementById("carColor").value = selectedCar.cColor;
    }
}

// 2pt: Changing Styles – change color of specific paragraph only
function changeColor(btnNum) {
    const para = document.getElementById("styleParagraph");

    if (btnNum === 1) {
        para.style.color = "red";
    } else if (btnNum === 2) {
        para.style.color = "green";
    } else if (btnNum === 3) {
        para.style.color = "blue";
    }
}