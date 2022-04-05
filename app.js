const lista1 = document.getElementById('lista-piramide');
const ctx = document.getElementById('myChart');


Sortable.create(lista1, {
    animation: 150,
    choosenClass: "seleccionado",
    ghostClass: "fantasma"

});

const data = {
    labels: [
      'Ágil',
      'Aguerrido',
      'Astuto',
      'Intelectual',
      'Practico',
      'Sociable'
    ],
    datasets: [{
      label: 'Arquetipo',
      data: [4, 9, 5, 6, 4, 7],
      fill: true,
      backgroundColor: 'rgba(84, 255, 231, 0.5)',
      borderColor: 'rgb(84, 255, 231)',
      pointBackgroundColor: 'rgb(84, 255, 231)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };
  
const myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      scales:{
        r: {
          angleLines: {
            color: 'rgba(255, 255, 255, 0.2)'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          },
          pointLabels: {
            color: 'rgba(255, 255, 255, 1)'
          }
        }
      },
      elements: {
        line: {
          borderWidth: 3,
        }
      }
    },
  })