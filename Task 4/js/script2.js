function factorial(n) {
    return (n == 1) ? 1 : n * factorial(n - 1);
}

function result(x, count) {
    x = x * 180 / Math.PI;
    let sum = 0;
    let exp = 1;
    for (let i = 1; i <= count; i++) {
        if (i % 2 == 1) {
            sum += Math.pow(x, exp) / factorial(i);
        }
        else {
            sum -= Math.pow(x, exp) / factorial(i);
        }
        exp += 2;
    }
    let finalSum = document.getElementById('result-sum');
    finalSum.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em; padding-right: 0.272em">' + sum + '</span>';

}