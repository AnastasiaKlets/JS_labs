let x = parseFloat(prompt("Введите х < 1 ", ""));
document.getElementById("param3").innerText = "x = " + x;
if (x<1){
    let n = 0;
    let exp = 0.001;
    let dop=0;
    let res = 0;
    do {
        z = 2*n +1;
        dop = (Math.pow(-1, n)*Math.pow(x,z))/(2*n+1);
        n++;
        res +=dop;
    } while (Math.abs(dop)>exp);
    document.getElementById("param").innerText = "Значение функции arctg = " + res.toFixed(5);
    let a = Math.atan(x);
    document.getElementById("param2").innerText = "Значение функции arctg с помощью math = " + a.toFixed(5);
} 
else {
    document.getElementById("param").innerText = "Вы ввели не корректные данные";
}
    