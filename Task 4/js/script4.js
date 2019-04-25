$(function () {
    $('[data-toggle="popover"').popover()
})

var enterSizeButton = document.getElementById('generate-btn');
enterSizeButton.addEventListener('click', generate);
enterSizeButton.addEventListener('click', getArray);

var arraySize, matrixSize;
var min, max;
var array = [], matrix = [];

function generate() {
    if (document.getElementById('min-max-array').value == '' || document.getElementById('min-max-matrix').value == '' || document.getElementById('values-range').value == '') {
        customAlert('Вы ввели не все значения!');
        return;
    }

    let minMaxArrayValues = document.getElementById('min-max-array').value.split(' ').map(Number);
    let minMaxMatrixValues = document.getElementById('min-max-matrix').value.split(' ').map(Number);
    let minMaxValue = document.getElementById('values-range').value.split(' ').map(Number);

    if (minMaxArrayValues[0] == 0 || minMaxArrayValues[1] == 0 || minMaxMatrixValues[0] == 0 || minMaxMatrixValues[1] == 0) {
        customAlert('Границы диапазонов не могут быть равны нулю!');
        return;
    }
    else {
        if (minMaxArrayValues[0] > minMaxArrayValues[1] || minMaxMatrixValues[0] > minMaxMatrixValues[1]) {
            customAlert('Верхняя граница диапазона для генерации размерности массива не может быть меньше нижней!');
            return;
        }
        else {
            if (minMaxArrayValues[0] < 0 || minMaxMatrixValues[0] < 0) {
                customAlert('Размерность массива или матрицы не может быть отрицательной!');
                return;
            }
        }
    }

    if (minMaxValue[0] > minMaxValue[1]) {
        customAlert('Верхняя граница диапазона минимальных и максимальных значений не может быть меньше нижней!');
        return;
    }

    min = minMaxValue[0];
    max = minMaxValue[1];

    arraySize = getRandomInt(minMaxArrayValues[0], minMaxArrayValues[1]);
    matrixSize = getRandomInt(minMaxMatrixValues[0], minMaxMatrixValues[1]);

    getArray(arraySize);
    getMatrix(matrixSize);
    showMatrix();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getArray(size) {
    for (let i = 0; i < size; i++) {
        array[i] = getRandomInt(min, max);
    }
    getResultArray(array);
}

function getResultArray(arr) {
    arr.sort(function (a, b) { return a - b })
}

function getMatrix(size) {
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = getRandomInt(min, max);
        }
    }
}

function showMatrix() {
    document.getElementById('input-generate').style.display = 'none';
    document.getElementById('result-block').style.display = 'flex';
    document.getElementById('workspace').className = 'container';
    let matrixBlock = document.getElementsByClassName('matrix')[0]
    for (let i = 0; i < matrixSize; i++) {
        matrixBlock.innerHTML += `<div class="matrix-row" id="row-${i}" style="display: grid; grid-template-columns: repeat(${matrixSize}, 1fr)">`
        let matrixRow = document.getElementById(`row-${i}`)
        for (let j = 0; j < matrixSize; j++) {
            matrixRow.innerHTML += `<div class="matrix-row-element d-flex justify-content-center align-items-center">${matrix[i][j]}</div>`
        }   
        matrixBlock.innerHTML += '</div>'     
    }
}





