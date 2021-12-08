let x = parseFloat(prompt("Введите х < 1 ", ""));
document.getElementById("param").innerText="x = " + x.toFixed(2);
if (x<1){    
    let n = 0;
    let exp = 0.001;
    let dop=0;
    let res = 0;
    function Telor(){
        z = 2*n +1;
        dop = (Math.pow(-1, n)*Math.pow(x,z))/(2*n+1);
        n++;
        res += dop;
        if(Math.abs(dop)<=exp){
            return res;
        }
        return Telor();
    }
    Telor();
    document.getElementById("param2").innerText = "Значение функции arctg = " + res.toFixed(4) ;
    let a = Math.atan(x);
    document.getElementById("param3").innerText = "Значение функции arctg с помощью math = " + a.toFixed(5);
} 
else {
    document.getElementById("param").innerText = "Вы ввели не корректные данные";
}
    