let chave = "19d7030b0d5fff78ecd16bbbe0dbe9c4";

function colocarNaTela(dados) {
  document.querySelector(".cidade").innerHTML = dados.name;

  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "Â°C";

  document.querySelector(".umidade").innerHTML =
    dados.main.humidity + "%" + " Umidade do Ar.";

  document.querySelector(".descricao").innerHTML = dados.weather[0].description;

  document.querySelector(".icone").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=" +
      chave +
      "&lang=pt_br" +
      "&units=metric"
  ).then((resposta) => resposta.json());

  colocarNaTela(dados);
}

function cliqueiNoBotao() {
  let cidade = document.querySelector(".input-cidade").value;
  buscarCidade(cidade);
}
