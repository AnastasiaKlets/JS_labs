let lang = prompt("Выберите язык \"ru\", \"en\", \"fr\", \" de\"", "").toLowerCase();
if (lang == "ru") {
  document.getElementById("param").innerText = "Вы выбрали русский язык";
} else if (lang == "en") {
    document.getElementById("param").innerText = "Вы выбрали англисский язык";
} else if (lang == "fr") {
    document.getElementById("param").innerText = "Вы выбрали французкий язык";
} else if (lang == "de") {
    document.getElementById("param").innerText = "Вы выбрали немецкий язык";
} else{
    document.getElementById("param").innerText = "Язык неизвестен";
}

