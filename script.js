// function call onclick of calculatet button.
function calculate(event) {
    event.preventDefault();
    // reference variables of elements.
    const number1 = document.getElementById('number-1').value;
    const number2 = document.getElementById('number-2').value;
    const operator = document.getElementById('operator').value;
    const answer = document.getElementById('answer');

    try {
        // valriables used for calculation.
        let num1 = null;
        let num2 = null;
        let sum = null;

        // chaecking if the given values are not null.
        if (number1 != '' && number2 != '') {

            //converting value into number.
            num1 = Number(number1);
            num2 = Number(number2);

            // checking which operator is selected and perform action. 
            switch (operator) {
                case '+':
                    sum = add(num1, num2);
                    success();
                    break;

                case '-':
                    sum = substract(num1, num2);
                    success();
                    break;

                case '*':
                    sum = multiply(num1, num2);
                    success();
                    break;

                case '/':
                    if (num2 != 0) { sum = divide(num1, num2); } else { error("Cannot divide by zero") }
                    success();
                    break;

                case 'p':
                    sum = power(num1, num2);
                    success();
                    break;

                default:
                    //error message if operator is not selected.
                    error("Select valid Operator...");
                    break;

            }
        } else { //error message if values are null.
            error("Enter valid values...");
        }

        answer.value = sum;

    } catch (e) { //
        console.log(e);
    }

    // para.innerText = (num1 + ' ' + operator + ' ' + num2);

}

// function for addition.
add = (num1, num2) => num1 + num2;

// function for substraction.
substract = (num1, num2) => num1 - num2;

// function for multiplication.
multiply = (num1, num2) => num1 * num2;

// function for division.
divide = (num1, num2) => num1 / num2;

// function for calculate power.
power = (num1, num2) => num1 ** num2;

//generate a success message.
success = () => {

    document.getElementById('error').style.color = "#00ff00";
    document.getElementById('error').innerText = ("Success...");
}

// generate error message.
error = (message) => {
    document.getElementById('error').style.color = "#e00505";
    document.getElementById('error').innerText = (message);
}

// reset all the fields.
reset = () => {
    document.getElementById('error').innerText = '';
    document.getElementById('number-1').value = null;
    document.getElementById('number-2').value = null;
    document.getElementById('operator').value = '';
    document.getElementById('answer').value = null;

}