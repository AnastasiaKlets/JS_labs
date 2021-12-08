let lang = prompt("Выберите язык \"ru\", \"en\", \"fr\", \" de\"", "").toLowerCase();
let err;
try {
    switch (lang) {
      case "ru":
        document.getElementById("param").innerText = "Вы выбрали русский язык";
        break;
      case "en":
        document.getElementById("param").innerText = "Вы выбрали англисский язык";
        break;
      case "fr":
        document.getElementById("param").innerText = "Вы выбрали французкий язык";
        break;
      case "de":
        document.getElementById("param").innerText = "Вы выбрали немецкий язык";
        break;
      default:
        throw err;
    }
} catch (err) {
    document.getElementById("param").innerText = "Язык неизвестен";
}
