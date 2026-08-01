const display = document.getElementById("display");

// Add Value
function appendValue(value) {
    display.value += value;
}

// Clear All
function clearDisplay() {
    display.value = "";
}

// Delete Last Character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate Result
function calculate() {
    try {
        let expression = display.value.replace(/%/g, "/100");

        let result = eval(expression);

        if (result === undefined || result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    else if (["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    }

    // Percentage
    else if (key === "%") {
        appendValue("%");
    }

    // Enter
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace
    else if (key === "Backspace") {
        deleteLast();
    }

    // Escape
    else if (key === "Escape") {
        clearDisplay();
    }
});