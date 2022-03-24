const pizzaBtn = document.querySelector('.pizzerie-btn');
const kicthenBtn = document.querySelector('.restaurant-btn')

pizzaBtn.addEventListener('click', () => {
    location.href = "./pizza-html/pizza-menu.html "
})
kicthenBtn.addEventListener('click', () => {
    location.href = './kitchen-html/kitchen-menu.html'
})