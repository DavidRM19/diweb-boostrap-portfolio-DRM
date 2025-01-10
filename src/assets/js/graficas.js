// Número de productos por categorías
var categoryCtx = document.getElementById('categoryChart').getContext('2d');
var categoryChart = new Chart(categoryCtx, {
    type: 'bar',
    data: {
        labels: ['Frutas y Verduras', 'Carnicería', 'Pescadería', 'Lácteos', 'Congelados'],
        datasets: [{
            label: 'Número de productos',
            data: [30, 50, 80, 40, 60],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Ranking de gasto en supermercados
var spendingCtx = document.getElementById('spendingChart').getContext('2d');
var spendingChart = new Chart(spendingCtx, {
    type: 'pie',
    data: {
        labels: ['Mercadona', 'Aldi', 'Dia', 'Mas'],
        datasets: [{
            label: 'Gasto en supermercados',
            data: [1200, 1500, 800, 950],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

// Gasto promedio por ticket
var extraCtx1 = document.getElementById('extraChart1').getContext('2d');
var extraChart1 = new Chart(extraCtx1, {
    type: 'line',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Gasto promedio por ticket',
            data: [50, 70, 60, 80],
            fill: false,
            borderColor: '#FF5733',
            tension: 0.1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Número de tickets procesados por semana
var extraCtx2 = document.getElementById('extraChart2').getContext('2d');
var extraChart2 = new Chart(extraCtx2, {
    type: 'bar',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'Número de tickets procesados',
            data: [120, 150, 130, 180],
            backgroundColor: '#FF6347',
            borderColor: '#FF6347',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});