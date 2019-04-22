function drawEllipse(a, b) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (a != 0 && b != 0 && a > b) {
        ctx.beginPath();
        ctx.setLineDash([]);
        ctx.ellipse(200, 200, a, b, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(200 - a, 200);
        ctx.setLineDash([3, 2]);
        ctx.lineTo(200, 200);
        ctx.lineTo(200, 200 - b);
        ctx.stroke();
        ctx.closePath();
    }

}

function square(a, b) {
    return Math.PI * a * b;
}

function result(a, b) {
    var number = document.getElementById('result');
    number.innerHTML = "";
    if (a == "" || b == "") {
        alert("Введите значения длин!");
        return;
    }
    if (a == 0 || b == 0) {
        if (a < 0 && b == 0 || a == 0 && b < 0) {
            alert("Введены неверные данные!");
            drawEllipse(a, b);
            return;
        }
        let isWaste = confirm("Вы уверены, что не знаете того, что результатом будет 0?");
        if (isWaste) {
            number.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em;">' + 0 + '</span>'
        }
    }
    else {
        if (a < 0 || b < 0) {
            alert("Введены неверные данные!");
            drawEllipse(a, b);
            return;
        }
        if (a < b) {
            alert("Большая полуось не может быть меньше малой!");
            drawEllipse(a, b);
            return;
        }
        number.innerHTML = '<span class="mn" id="MathJax-Span-5" style="font-family: MathJax_Main; padding-left: 0.272em;">' + square(a, b) + '</span>';
    }
    drawEllipse(a, b);
}
