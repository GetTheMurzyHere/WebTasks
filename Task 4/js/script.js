isChecked = false;

function square(a, b) {
    return Math.PI * a * b;
}

function insertHTML(a, b) {
    let number = document.getElementById('result');
    number.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em;">' + square(a, b) + '</span>';
}
