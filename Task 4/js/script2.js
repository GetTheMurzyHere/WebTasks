var enterButton = document.getElementById('enter-btn');
enterButton.addEventListener('click', result)

function factorial(n) {
    return (n == 1) ? 1 : n * factorial(n - 1);
}

function result() {
    let x = document.getElementById('argumentX-value').value;
    let count = document.getElementById('accuracy').value;

    if (x == "") {
        document.getElementById('argumentX-value').style.borderColor = "red";
        return;
    }

    document.getElementById('argumentX-value').style.borderColor = "rgb(206, 212, 218)";

    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += Math.pow(-1, i) * ((Math.pow(x, 2 * i + 1)) / (factorial(2 * i + 1)));
    }

    let finalSum = document.getElementById('result-sum');
    finalSum.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em; padding-right: 0.272em">' + sum + '</span>';
    return;
}