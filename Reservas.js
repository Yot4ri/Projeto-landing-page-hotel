$(document).ready(function(){
    carregarReservas();
});

function carregarReservas() {
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/reservas",
      success: function(reservas) {
        var corpoTabela = $('#reservasRealizadas tbody');
        corpoTabela.empty(); // Limpa a tabela antes de adicionar os novos itens
  
        // Itera sobre cada reserva e adiciona à lista
        reservas.forEach(function(reservas) {
          var item = $('<tr></tr>').append(
            $('<td></td>').text(reservas.id),
            $('<td></td>').text(reservas.Nome),
            $('<td></td>').text(reservas.Email),
            $('<td></td>').text(reservas.Data_Entrada),
            $('<td></td>').text(reservas.Data_Saida),
            $('<td></td>').text(reservas.Num_Adultos),
            $('<td></td>').text(reservas.Num_Criancas),
            $('<td></td>').text(reservas.Observacoes)
            
          );
          corpoTabela.append(item);
        });
      },
      error: function() {
        alert('Erro ao carregar as reservas.');
      }
    });
  }