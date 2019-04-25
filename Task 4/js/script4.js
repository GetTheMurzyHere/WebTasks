$(function () {
    $('[data-toggle="popover"]').popover()
})

var enterSizeButton = document.getElementById('generate-btn');
enterSizeButton.addEventListener('click', getMinAndMax);
enterSizeButton.addEventListener('click', getArray);

var arraySize, matrixSize;

function getMinAndMax() {
    let minMaxArrayValues = document.getElementById('min-max-array').value.split(' ').map(Number);
    let minMaxMatrixValues = document.getElementById('min-max-matrix').value.split(' ').map(Number);

    if (minMaxArrayValues[0] == 0 || minMaxArrayValues[1] == 0 || minMaxMatrixValues[0] == 0 || minMaxMatrixValues[1] == 0) {
        alert('Границы диапазона не могут быть равны нулю!');
        return;
    }
    else {
        if (minMaxArrayValues[0] > minMaxArrayValues[1] || minMaxMatrixValues[0] > minMaxMatrixValues[1]) {
            alert('Верхняя граница диапазона не может быть меньше нижней!');
            return;
        }
        else {
            if (minMaxArrayValues[0] < 0 || minMaxMatrixValues[0] < 0) {
                alert('Размерность массива или матрицы не может быть отрицательной!');
                return;
            }
        }
    }

    arraySize = getRandomInt(minMaxArrayValues[0], minMaxArrayValues[1]);
    matrixSize = getRandomInt(minMaxMatrixValues[0], minMaxMatrixValues[1]);

    showMatrix();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getArray(size) {

}

function showMatrix() {
    document.getElementById('input-generate').style.display = "none";
}





