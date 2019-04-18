function square(a, b) {
    return Math.PI * a * b;
}

function insertHTML(a, b) {
    let number = document.getElementById('insert-number');
    number.innerHTML = square(a,b);
}
