$(function () {
    $('[data-toggle="popover"]').popover()
})

var enterSizeButton = document.getElementById('enter-size-btn');
enterSizeButton.addEventListener('click', getMatrixSize);
enterSizeButton.addEventListener('click', showMatrix);

function getMatrixSize() {
    return Number(document.getElementById('size').value);
}

function showMatrix() {
    document.getElementById('input-size').style.display = "none";
}





