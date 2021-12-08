let x = parseInt(prompt("Введите х ", ""));
document.getElementById("param").innerText = "Вы ввели х =" + x;
if (x >= 10 && x!= 20) {
  let y = Math.sqrt(x-1);
  document.getElementById("param2").innerText = "y = " + y.toFixed(2);
} else if (x<0) {  
   let y = 1/x + Math.pow(Math.E, 2*x); 
   document.getElementById("param2").innerText = "y = " + y.toFixed(2);
} else {  
    let z = x+1;
    let y = Math.log(z)
    document.getElementById("param2").innerText = "y = " + y.toFixed(2);
}
