const generalBtn = document.querySelector('.general')
const specificBtn = document.querySelector('.specific')

generalBtn.addEventListener('click', () => {
    location.href = './kitchen-chart.html'
})
specificBtn.addEventListener('click', () => {
    location.href = './kitchen-chart-specific.html'
})