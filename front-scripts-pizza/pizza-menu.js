// const { default: axios } = require("axios");

const pizzaList = [
    {
        "name": "Margherita",
        "price": 17,
        "id": "62081803b3b99e50f403f921"
    },
    {
        "name": "Prosciutto",
        "price": 17,
        "id": "62081803b3b99e50f403f922"
    },
    {
        "name": "Funghi",
        "price": 18,
        "id": "62081803b3b99e50f403f923"
    },
    {
        "name": "Prosciutto e Funghi",
        "price": 18,
        "id": "62081803b3b99e50f403f924"
    },
    {
        "name": "Diavola",
        "price": 19,
        "id": "62081803b3b99e50f403f925"
    },
    {
        "name": "Salami",
        "price": 19,
        "id": "62081803b3b99e50f403f926"
    },
    {
        "name": "Tonno",
        "price": 18,
        "id": "62081803b3b99e50f403f927"
    },
    {
        "name": "Tonno e Cipolla",
        "price": 18,
        "id": "62081803b3b99e50f403f928"
    },
    {
        "name": "Capricciosa",
        "price": 18,
        "id": "62081803b3b99e50f403f929"
    },
    {
        "name": "Quattro Stagioni",
        "price": 18,
        "id": "62081803b3b99e50f403f92a"
    },
    {
        "name": "Romana",
        "price": 18,
        "id": "62081803b3b99e50f403f92b"
    },
    {
        "name": "Casei Beiu",
        "price": 22,
        "id": "62081803b3b99e50f403f92c"
    },
    {
        "name": "Pollo",
        "price": 18,
        "id": "62081803b3b99e50f403f92d"
    },
    {
        "name": "Afumigata",
        "price": 21,
        "id": "62081803b3b99e50f403f92e"
    },
    {
        "name": "Ungureasca",
        "price": 22,
        "id": "62081803b3b99e50f403f92f"
    },
    {
        "name": "Yolo",
        "price": 22,
        "id": "62081803b3b99e50f403f930"
    },
    {
        "name": "Vegetariana",
        "price": 18,
        "id": "62081803b3b99e50f403f931"
    },
    {
        "name": "Carbonara",
        "price": 22,
        "id": "62081803b3b99e50f403f932"
    },
    {
        "name": "Philadelphia",
        "price": 25,
        "id": "62081803b3b99e50f403f933"
    },
    {
        "name": "Bresciana",
        "price": 18,
        "id": "62081803b3b99e50f403f934"
    },
    {
        "name": "Americana",
        "price": 21,
        "id": "62081803b3b99e50f403f935"
    },
    {
        "name": "Big Beiu",
        "price": 32,
        "id": "62081803b3b99e50f403f936"
    },
    {
        "name": "Quattro Formaggi",
        "price": 25,
        "id": "62081803b3b99e50f403f937"
    },
    {
        "name": "Placinta X-u",
        "price": 21,
        "id": "62081803b3b99e50f403f938"
    }
]

const pizzaOptionsContainer = document.querySelector('.pizza-options')
const input = document.querySelector('.pizza-input')
const chartsBtn = document.querySelector('.charts-btn')
const infoBtn = document.querySelector('.info-btn')

const token = localStorage.getItem('token')

let today = new Date().toISOString().substr(0, 10);
const dateSplitted = today.split('-')
const year = dateSplitted[0]
const month = dateSplitted[1]
const day = dateSplitted[2]

infoBtn.addEventListener('click', () => {
    location.href = './pizza-info.html'
})

chartsBtn.addEventListener('click', () => {
    location.href = './pizza-chart-generator.html'
})

pizzaList.forEach( (item) => {
    let pizzaOption = document.createElement('button')
    pizzaOption.classList.add('pizza-option')
    pizzaOption.setAttribute('data-id', item.id)
    pizzaOption.innerHTML = item.name

    let fastInput = document.createElement('input');
    fastInput.classList.add('pizza-option-add-input');

    let fastInputBtn = document.createElement('button');
    fastInputBtn.innerHTML = `adauga`;
    fastInputBtn.classList.add('pizza-option-add-btn');

    
    let paragDone = document.createElement('p');
    paragDone.classList.add('parag-done');
    paragDone.classList.add('done-visibility');
    paragDone.innerHTML = "adaugat!";
    
    let container = document.createElement('div');
    container.append(pizzaOption);
    container.append(fastInput);
    container.append(fastInputBtn);
    container.append(paragDone);
    pizzaOptionsContainer.appendChild(container);


    fastInputBtn.addEventListener('click', async () => {
        try {
            const { data } = await axios.patch('https://app-beiu.herokuapp.com/api/v1/pizza/update',
                {
                        "name": item.name,
                        "addQuantity": parseInt(fastInput.value),
                        "date": `${month}-${day}-${year}`
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },  
                })
            paragDone.classList.remove('done-visibility')
            setTimeout(function () {
                paragDone.classList.add('done-visibility');
                fastInput.value = '';
            }, 2000);
        } catch (error) {
            console.log(error)
            
        }
    })
})

input.addEventListener('input', () => {
    const resultList = pizzaList.filter( (item) => item.name.toLowerCase().includes(input.value.toLowerCase()))
    pizzaOptionsContainer.innerHTML = ""
    resultList.forEach( (item) => {
        let pizzaOption = document.createElement('button')
    pizzaOption.classList.add('pizza-option')
    pizzaOption.setAttribute('data-id', item.id)
    pizzaOption.innerHTML = item.name

    let fastInput = document.createElement('input');
    fastInput.classList.add('pizza-option-add-input');

    let fastInputBtn = document.createElement('button');
    fastInputBtn.innerHTML = `adauga`;
    fastInputBtn.classList.add('pizza-option-add-btn');

    
    let paragDone = document.createElement('p');
    paragDone.classList.add('parag-done');
    paragDone.classList.add('done-visibility');
    paragDone.innerHTML = "adaugat!";
    
    let container = document.createElement('div');
    container.append(pizzaOption);
    container.append(fastInput);
    container.append(fastInputBtn);
    container.append(paragDone);
    // pizzaOptionsContainer.appendChild(container);


    fastInputBtn.addEventListener('click', async () => {
        try {
            const { data } = await axios.patch('https://app-beiu.herokuapp.com/api/v1/pizza/update',
                {
                        "name": item.name,
                        "addQuantity": parseInt(fastInput.value),
                        "date": `${month}-${day}-${year}`
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },  
                })
            paragDone.classList.remove('done-visibility')
            setTimeout(function () {
                paragDone.classList.add('done-visibility');
                fastInput.value = '';
            }, 2000);
        } catch (error) {
            console.log(error)
            
        }
    })

        pizzaOption.addEventListener('click', async () => {
            let url = "./pizza-selected.html"
            let string = `?id=${pizzaOption.getAttribute('data-id')}`
            let result = url.concat(string)
            location.href = result        
        })

        pizzaOptionsContainer.appendChild(container);
    })
})


const pizzaBtns = document.querySelectorAll('.pizza-option')
const backBtn = document.querySelector('.back-btn')

pizzaBtns.forEach( (btn) => {
    btn.addEventListener('click', async () => {
        let url = "./pizza-selected.html"
        let string = `?id=${btn.getAttribute('data-id')}`
        let result = url.concat(string)
        location.href = result        
    })
})

backBtn.addEventListener('click', () => {
    location.href = '../selection.html'
})