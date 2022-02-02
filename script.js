let input = document.getElementById('input'),
    output = document.getElementById('output');
window.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        if (output.innerHTML == '') {
            output.style.opacity = '0';
        }
        output.style.opacity = '1';
        output.innerHTML += input.value + "<br>";
        input.value = "";
    } else if (e.key == "Backspace") {
        output.style.opacity = '0';
        output.innerHTML = '';
    }
})


// 1 задание
function fillingArr(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        if (i % 2) continue;
        arr.push(i);
    }
    return arr;
}
output.innerHTML = 'Вывод чётных чисел:' + "<br>" +fillingArr(50);