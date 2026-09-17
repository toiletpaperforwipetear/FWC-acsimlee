function isPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

function calculate() {
    const leftVal = document.getElementById('left-num').value;
    const rightVal = document.getElementById('right-num').value;
    const op = document.getElementById('operator').value;

    if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
        alert('Error :(');
        return;
    }

    const leftNum = parseInt(leftVal, 10);
    const rightNum = parseInt(rightVal, 10);

    if ((op === '/' || op === '%') && rightNum === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result;
    switch (op) {
        case '+':
            result = leftNum + rightNum;
            break;
        case '-':
            result = leftNum - rightNum;
            break;
        case '*':
            result = leftNum * rightNum;
            break;
        case '/':
            result = leftNum / rightNum;
            break;
        case '%':
            result = leftNum % rightNum;
            break;
    }

    alert(result);
    console.log(result);
}


document.getElementById('btn-submit').addEventListener('click', calculate);

setInterval(function() {
    alert('Please, use me...');
}, 30000);