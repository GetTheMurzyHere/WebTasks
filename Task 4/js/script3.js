$(function () {
    $('[data-toggle="popover"]').popover()
})

var enterButton = document.getElementById('enter-btn');
enterButton.addEventListener('click', result);

var inputsArray = document.getElementsByClassName('form-control');
var matrix = []; negativeMatrix = [];

function div(val, by){
    return (val - val % by) / by;
}

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

    document.getElementById('input-block').style.display = "none";
    enterButton.style.display = "none";

    document.getElementById('matrix-result-block').className = "d-flex justify-content-around";
    document.getElementById('workspace').className = "container";

    let numbersArray = document.getElementsByClassName('result-number');

    for (let i = 0; i < 40; i++) {
        numbersArray[i].innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main;">' + matrix[i % 5][div(i, 5)] + '</span>'
    }

}