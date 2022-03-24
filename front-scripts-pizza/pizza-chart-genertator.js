const generalBtn = document.querySelector('.general')
const specificBtn = document.querySelector('.specific')

generalBtn.addEventListener('click', () => {
    location.href = './pizza-chart.html'
})
specificBtn.addEventListener('click', () => {
    location.href = './pizza-chart-specific.html'
})