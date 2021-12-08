let x = parseFloat(prompt("Введите х",""));
let y = parseFloat(prompt("Введите y",""));
let z = parseFloat(prompt("Введите z",""));
document.getElementById("param").innerText="x ="+x.toFixed(1);
document.getElementById("param2").innerText="y ="+y.toFixed(1);
document.getElementById("param3").innerText="z ="+z.toFixed(1);
function f(x, y, z) {
    let b = 5*Math.tan(z)-4*Math.pow(y,2)+Math.abs(y*x);
    return document.getElementById("param4").innerText="b ="+b.toFixed(3);
}

f(x,y,z);
