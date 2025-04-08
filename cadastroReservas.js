$(document).ready(function(){
  ;


  document.querySelector('#frmReserva').addEventListener('submit', function(e){
    e.preventDefault();
    informarDadosJson();
    carregarReservas();
  })

function informarDadosJson(){
var nome = document.getElementById("nome");
var email = document.getElementById("email");
var dtEntrada = document.getElementById("dataEntrada");
var dtSaida = document.getElementById("dataSaida");
var adultos = document.getElementById('numAdultos');
var criancas = document.getElementById('numCriancas');
var obs = document.getElementById('observacoes');

fetch("http://localhost:3000/reservas", {
    method: "POST",
    body: JSON.stringify({
      Nome: nome.value,
      Email: email.value,
      Data_Entrada: dtEntrada.value,
      Data_Saida: dtSaida.value,
      Num_Adultos: adultos.value,
      Num_Criancas: criancas.value,
      Observacoes: obs.value
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error('Error:', error));

    alert("Solicitação realizada com sucesso!");
  };

});
