let total = 0;
let buffer = "0";
let previousOperator = null;
let firstPoint = true;
const display = document.querySelector(".display");
const operator_display = document.querySelector(".operator");

function buttonClick(value) {
    if (isNaN(parseInt(value))) {
        if (value === ".") {
            handleDot();
        } else {
            handleSymbol(value);
        }
    } else {
        handleNumber(value);
    }
    rerender();
}

function handleSymbol(value) {
    switch (value) {
        case "AC":
            buffer = "0";
            total = 0;
            previousOperator = null;
            firstPoint = true;
            operator_display.innerText = "";
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                if (buffer[buffer.length - 1] === ".") {
                    firstPoint = true;
                }
                buffer = buffer.slice(0, -1);
            }
            break;
        case "=":
            if (previousOperator === null) {
                return;
            }
            operator_display.innerText = value;
            flushOperation(parseFloat(buffer));
            previousOperator = null;
            buffer = "" + total;
            total = 0;
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(value);
            firstPoint = true;
            break;
    }
}

function handleNumber(value) {
    if (buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
}

function handleDot() {
    if (firstPoint) {
        buffer += ".";
    }
    firstPoint = false;
}

function handleMath(value) {
    operator_display.innerText = value;
    if (buffer === 0) {
        return;
    }

    const floatBuffer = parseFloat(buffer);
    if (total === 0) {
        total = floatBuffer;
    } else {
        flushOperation(floatBuffer);
    }

    previousOperator = value;
    buffer = "0";
}

function flushOperation(floatBuffer) {
    if (previousOperator === "+") {
        total += floatBuffer;
    } else if (previousOperator === "-") {
        total -= floatBuffer;
    } else if (previousOperator === "×") {
        total *= floatBuffer;
    } else {
        total /= floatBuffer;
    }

    if (!Number.isInteger(total)) {
        total = total.toFixed(2);
        firstPoint = false;
    }
}

function rerender() {
    display.value = buffer;
}

document.querySelector(".calc_keys").addEventListener("click", function (e) {
    buttonClick(e.target.innerText);
});