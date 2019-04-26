$(function () {
    $('[data-toggle="popover"').popover()
})


const matrixBlock = document.getElementsByClassName('matrix')[0]
const input = document.getElementById('input-generate')
const matrixClearButton = document.getElementById('hideMatrix')
const matrixWrapper = document.getElementById('hideMatrixWrapper')
const enterSizeButton = document.getElementById('generate-btn')

matrixClearButton.addEventListener('click', hideMatrix);
hide(matrixWrapper);
hide(matrixClearButton);

enterSizeButton.addEventListener('click', generate);
enterSizeButton.addEventListener('click', getArray);

var min, max;
var array = [], matrix = [];

function generate() {
    if (document.getElementById('min-max-array').value == "" || document.getElementById('values-range').value == "") {
        customAlert('Вы ввели не все значения!');
        return;
    }

    let minMaxArrayValues = document.getElementById('min-max-array').value.split(' ').map(Number);
    let minMaxValue = document.getElementById('values-range').value.split(' ').map(Number);

    if (minMaxArrayValues.length == 2 && minMaxValue.length == 2) {
        if (minMaxArrayValues[0] == 0 || minMaxArrayValues[1] == 0) {
            customAlert('Границы диапазонов не могут быть равны нулю!');
            return;
        } else {
            if (minMaxArrayValues[0] > minMaxArrayValues[1]) {
                customAlert('Верхняя граница диапазона для генерации размерности массива не может быть меньше нижней!');
                return;
            }
            else {
                if (minMaxArrayValues[0] < 0) {
                    customAlert('Размерность массива или матрицы не может быть отрицательной!');
                    return;
                }
            }
        }

        if (minMaxValue[0] > minMaxValue[1]) {
            customAlert('Верхняя граница диапазона минимальных и максимальных значений не может быть меньше нижней!');
            return;
        }
    } else {
        customAlert('Вы ввели неверное количество параметров!');
        return;
    }


    min = minMaxValue[0];
    max = minMaxValue[1];

    var arraySize = Math.pow(getRandomInt(minMaxArrayValues[0], minMaxArrayValues[1]), 2);

    getArray(arraySize);
    getMatrix(arraySize);
    showMatrix(arraySize);
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
    arr.sort(function (a, b) { return a - b });
}

function getMatrix(size) {
    k = 0;
    if (size % 2 == 0) {
        for (let i = Math.sqrt(size) - 1; i >= 0; i--) {
            matrix[i] = [];
            if (i % 2 != 0) {
                for (let j = Math.sqrt(size) - 1; j >= 0; j--) {
                    matrix[i][j] = array[k];
                    k++;
                }
            }
            else {
                for (let j = 0; j < Math.sqrt(size); j++) {
                    matrix[i][j] = array[k];
                }
                k++;
            }
        }
    }
    else {
        for (let i = Math.sqrt(size) - 1; i >= 0; i--) {
            matrix[i] = [];
            if (i % 2 == 0) {
                for (let j = Math.sqrt(size) - 1; j >= 0; j--) {
                    matrix[i][j] = array[k];
                    k++;
                }
            }
            else {
                for (let j = 0; j < Math.sqrt(size); j++) {
                    matrix[i][j] = array[k];
                    k++; 
                }
            }
        }
    }
}

function showMatrix(size) {
    hide(input);
    show(matrixWrapper);
    show(matrixClearButton)

    for (let i = 0; i < Math.sqrt(size); i++) {
        matrixBlock.innerHTML += `<div class="matrix-row" id="row-${i}" style="display: grid; grid-template-columns: repeat(${Math.sqrt(size)}, 1fr)">`
        let matrixRow = document.getElementById(`row-${i}`)
        for (let j = 0; j < Math.sqrt(size); j++) {
            matrixRow.innerHTML += `<div class="matrix-row-element d-flex justify-content-center align-items-center">${matrix[i][j]}</div>`
        }
        matrixBlock.innerHTML += '</div>'
    }
}

function hideMatrix() {
    hide(matrixWrapper);
    hide(matrixClearButton);
    matrixBlock.innerHTML = '';
    show(input);
}

function hide(element) {
    element.style.display = 'none'
}

function show(element) {
    element.style.display = 'block'
}



