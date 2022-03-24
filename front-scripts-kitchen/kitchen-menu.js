// const { default: axios } = require("axios");

const kitchenList = [
    {
        "name": "Meniul Zilei",
        "price": 17,
        "id": "622088e2cd805a3d2454fa37"
    },
    {
        "name": "Platou Beiu",
        "price": 24,
        "id": "621756818fe8d737a413038b"
    },
    {
        "name": "Platou Palermo",
        "price": 21,
        "id": "621756818fe8d737a413038c"
    },
    {
        "name": "Platou piept umplut",
        "price": 22,
        "id": "621756818fe8d737a413038d"
    },
    {
        "name": "Platou Escalop",
        "price": 21,
        "id": "621756818fe8d737a413038e"
    },
    {
        "name": "Platou ciolan afumat",
        "price": 22,
        "id": "621756818fe8d737a413038f"
    },
    {
        "name": "Platou Medalion",
        "price": 21,
        "id": "621756818fe8d737a4130390"
    },
    {
        "name": "Platou piept de pui cu usturoi",
        "price": 20,
        "id": "621756818fe8d737a4130391"
    },
    {
        "name": "Platou cascaval pane",
        "price": 18,
        "id": "621756818fe8d737a4130392"
    },
    {
        "name": "Platou carnati prajiti",
        "price": 19,
        "id": "621756818fe8d737a4130393"
    },
    {
        "name": "Platou Gordon Bleu",
        "price": 22,
        "id": "621756818fe8d737a4130394"
    },
    {
        "name": "Platou mititei",
        "price": 22,
        "id": "621756818fe8d737a4130395"
    },
    {
        "name": "Platou kebab",
        "price": 20,
        "id": "621756818fe8d737a4130396"
    },
    {
        "name": "Platou crispy",
        "price": 21,
        "id": "621756818fe8d737a4130397"
    },
    {
        "name": "Platou piept de pui la gratar",
        "price": 22,
        "id": "621756818fe8d737a4130398"
    },
    {
        "name": "Gordon Bleu",
        "price": 15,
        "id": "621756818fe8d737a4130399"
    },
    {
        "name": "Medalion 'Beiu'",
        "price": 15,
        "id": "621756818fe8d737a413039a"
    },
    {
        "name": "Piept patat",
        "price": 16,
        "id": "621756818fe8d737a413039b"
    },
    {
        "name": "Escalop de pui",
        "price": 16,
        "id": "621756818fe8d737a413039c"
    },
    {
        "name": "Snitel vienez",
        "price": 15,
        "id": "621756818fe8d737a413039d"
    },
    {
        "name": "Snitel crocant",
        "price": 15,
        "id": "621756818fe8d737a413039e"
    },
    {
        "name": "Pui crispy",
        "price": 15,
        "id": "621756818fe8d737a413039f"
    },
    {
        "name": "Cotlet de porc",
        "price": 15,
        "id": "621756818fe8d737a41303a0"
    },
    {
        "name": "Ceafa de porc",
        "price": 16,
        "id": "621756818fe8d737a41303a1"
    },
    {
        "name": "Snitel romanesc",
        "price": 15,
        "id": "621756818fe8d737a41303a2"
    },
    {
        "name": "Snitel Palermo",
        "price": 16,
        "id": "621756818fe8d737a41303a3"
    },
    {
        "name": "Ciolan de porc afumat",
        "price": 17,
        "id": "621756818fe8d737a41303a4"
    },
    {
        "name": "Meniu burger vita",
        "price": 18,
        "id": "621756818fe8d737a41303a5"
    },
    {
        "name": "Meniu Big Burger",
        "price": 23,
        "id": "621756818fe8d737a41303a6"
    },
    {
        "name": "Mici",
        "price": 4,
        "id": "621756818fe8d737a41303a7"
    },
    {
        "name": "Cascaval pane",
        "price": 13,
        "id": "621756818fe8d737a41303a8"
    },
    {
        "name": "Ciorba de burta",
        "price": 11,
        "id": "621756818fe8d737a41303a9"
    },
    {
        "name": "Ciorba taraneasca de pui",
        "price": 9,
        "id": "621756818fe8d737a41303aa"
    },
    {
        "name": "Ciorba taraneasca de porc",
        "price": 9,
        "id": "621756818fe8d737a41303ab"
    },
    {
        "name": "Ciorba radauteana",
        "price": 9,
        "id": "621756818fe8d737a41303ac"
    },
    {
        "name": "Penne Carbonara",
        "price": 18,
        "id": "621756818fe8d737a41303ad"
    },
    {
        "name": "Spaghetti Amatriciana",
        "price": 18,
        "id": "621756818fe8d737a41303ae"
    },
    {
        "name": "Pennette Funghi e Pollo",
        "price": 18,
        "id": "621756818fe8d737a41303af"
    },
    {
        "name": "Pennette al Tonno",
        "price": 20,
        "id": "621756818fe8d737a41303b0"
    },
    {
        "name": "Spaghetti Arrabbiata",
        "price": 14,
        "id": "621756818fe8d737a41303b1"
    },
    {
        "name": "Cartofi pai",
        "price": 6,
        "id": "621756818fe8d737a41303b2"
    },
    {
        "name": "Cartofi piure",
        "price": 6,
        "id": "621756818fe8d737a41303b3"
    },
    {
        "name": "Cartofi aurii",
        "price": 6,
        "id": "621756818fe8d737a41303b4"
    },
    {
        "name": "Orez",
        "price": 6,
        "id": "621756818fe8d737a41303b5"
    },
    {
        "name": "Legume mexicane",
        "price": 8,
        "id": "621756818fe8d737a41303b6"
    },
    {
        "name": "Clatite cu crema de ciocolata",
        "price": 11,
        "id": "621756818fe8d737a41303b7"
    },
    {
        "name": "Clatite cu gem",
        "price": 11,
        "id": "621756818fe8d737a41303b8"
    },
    {
        "name": "Clatite cu branza dulce",
        "price": 13,
        "id": "621756818fe8d737a41303b9"
    },
    {
        "name": "Papanasi",
        "price": 14,
        "id": "621756818fe8d737a41303ba"
    },
    {
        "name": "Clatita cu crema de cocos...",
        "price": 10,
        "id": "621756818fe8d737a41303bb"
    },
]

const kitchenOptionsContainer = document.querySelector('.pizza-options')
const input = document.querySelector('.pizza-input')
const chartsBtn = document.querySelector('.charts-btn')
const infoBtn = document.querySelector('.info-btn')


const token = localStorage.getItem('token')

let today = new Date().toISOString().substr(0, 10);
const dateSplitted = today.split('-')
const year = dateSplitted[0]
const month = dateSplitted[1]
const day = dateSplitted[2]

// input.innerHTML = ''

infoBtn.addEventListener('click', () => {
    location.href = './kitchen-info.html'
})

chartsBtn.addEventListener('click', () => {
    location.href = './kitchen-chart-generator.html'
})

kitchenList.forEach( (item) => {
    let kitchenOption = document.createElement('button')
    kitchenOption.classList.add('pizza-option')
    kitchenOption.setAttribute('data-id', item.id)
    kitchenOption.innerHTML = item.name

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
    container.append(kitchenOption);
    container.append(fastInput);
    container.append(fastInputBtn);
    container.append(paragDone);
    kitchenOptionsContainer.appendChild(container);


    fastInputBtn.addEventListener('click', async () => {
        try {
            const { data } = await axios.patch('https://app-beiu.herokuapp.com/api/v1/kitchen/update',
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
    const resultList = kitchenList.filter( (item) => item.name.toLowerCase().includes(input.value.toLowerCase()))
    kitchenOptionsContainer.innerHTML = ""
    resultList.forEach( (item) => {
        let kitchenOption = document.createElement('button')
    kitchenOption.classList.add('pizza-option')
    kitchenOption.setAttribute('data-id', item.id)
    kitchenOption.innerHTML = item.name

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
    container.append(kitchenOption);
    container.append(fastInput);
    container.append(fastInputBtn);
    container.append(paragDone);
    kitchenOptionsContainer.appendChild(container);


    fastInputBtn.addEventListener('click', async () => {
        try {
            const { data } = await axios.patch('https://app-beiu.herokuapp.com/api/v1/kitchen/update',
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

        kitchenOption.addEventListener('click', async () => {
            let url = "./kitchen-selected.html"
            let string = `?id=${kitchenOption.getAttribute('data-id')}`
            let result = url.concat(string)
            location.href = result        
        })

        kitchenOptionsContainer.appendChild(kitchenOption);
    })
})


const kitchenBtns = document.querySelectorAll('.pizza-option')
const backBtn = document.querySelector('.back-btn')

kitchenBtns.forEach( (btn) => {
    btn.addEventListener('click', async () => {
        let url = "./kitchen-selected.html"
        let string = `?id=${btn.getAttribute('data-id')}`
        let result = url.concat(string)
        location.href = result        
    })
})

backBtn.addEventListener('click', () => {
    location.href = '../selection.html'
})