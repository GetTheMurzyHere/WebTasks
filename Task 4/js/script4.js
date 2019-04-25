$(function () {
    $('[data-toggle="popover"]').popover()
})

var enterSizeButton = document.getElementById('enter-size-btn');
var matrixSize;
enterSizeButton.addEventListener('click', getMatrixSize);
enterSizeButton.addEventListener('click', showInputValuesForm);

function getMatrixSize() {
    matrixSize = Number(document.getElementById('size').value);
}

function showInputValuesForm() {
    document.getElementById('input-size').style.display = "none";
    document.getElementsByClassName('size')[0].innerHTML = matrixSize;
    document.getElementsByClassName('size')[1].innerHTML = matrixSize;
    document.getElementById('input-values').style.display = "block";
}





