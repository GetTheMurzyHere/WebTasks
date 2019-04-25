$(function () {
    $('[data-toggle="popover"]').popover()
})

var enterSizeButton = document.getElementById('enter-size-btn');
var matrixSize;
enterSizeButton.addEventListener('click', getMatrixSize);
enterSizeButton.addEventListener('click', showInputValuesForm);
enterSizeButton.addEventListener('click', showInputValuesRows);

function getMatrixSize() {
    matrixSize = Number(document.getElementById('size').value);
}

function showInputValuesForm() {
    document.getElementById('input-size').style.display = "none";
    document.getElementsByClassName('size')[0].innerHTML = matrixSize;
    document.getElementsByClassName('size')[1].innerHTML = matrixSize;
    document.getElementById('input-values').style.display = "block";
}

function showInputValuesRows() {
    for (let i = 0; i < matrixSize; i++) {
        document.getElementById('input-rows').innerHTML += '<div class="row"><div class="input-group input-group-sm mb-3"><div class="input-group-prepend"><span class="input-group-text" id="inputGroup-sizing-sm">Строка ' + (i + 1) + '</span></div><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" data-trigger="focus" data-toggle="popover" data-placement="right" data-container="body" data-content="Введите ' + matrixSize + ' значений матрицы через пробел."></div></div>'
    }
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
}





