$(function () {
    $('[data-toggle="popover"]').popover()
})

var enterButton = document.getElementById('enter-btn');
enterButton.addEventListener('click', result);

var inputsArray = document.getElementsByClassName('form-control');
var matrix = []; negativeMatrix = [];

function result() {
    for (let i = 0; i < 5; i++) {
        matrix[i] = inputsArray[i].value.split(' ').map(Number);
        if (matrix[i].length != 8) {
            alert("Некорректно введены значения матрицы! Проверьте поля для ввода на лишние/недостающие пробелы/числа.");
            return;
        }

        negativeMatrix[i] = [];
        for (let j = 0; j < 8; j++) {
            if (matrix[i][j] != 0) {
                negativeMatrix[i][j] = -matrix[i][j];
            }
            else {
                negativeMatrix[i][j] = 0;
            }
        }
    }
}