const title = document.querySelector('.name')
const numberSold = document.querySelector('.numberSold')
const price = document.querySelector('.price')
const backBtn = document.querySelector('.back-btn')
const addBtn = document.querySelector('.add-btn')
const input = document.querySelector('.quantity-input')
const dateInput = document.querySelector('.date-input')
const addedText = document.querySelector('.add-text')
const container = document.querySelector('.container')
const loadingGif = document.querySelector('.loading')

let dbData;
const token = localStorage.getItem('token')

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')
console.log(id);

let today = new Date().toISOString().substr(0, 10);
console.log(today);
dateInput.value = today;

const fetchData = async () => {
        try {
            container.classList.add('hidden');
            loadingGif.classList.remove('hidden-loading')
            const { data } = await axios.get(`https://app-beiu.herokuapp.com/api/v1/kitchen/get/single/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },   
            })
            console.log(data);
            dbData = data;
            addedText.classList.add('hidden')
            title.innerHTML = data.name
            numberSold.innerHTML = `Vandute: ${data.numberSold}`;
            price.innerHTML = `Pret: ${data.price}`
            
            container.classList.remove('hidden');
            loadingGif.classList.add('hidden-loading')
        } catch (error) {
            if(error.response.status == 401) {
                location.href = '../index.html';
            }
        }
}

fetchData()


backBtn.addEventListener('click', () => {
    location.href = './kitchen-menu.html'
})

addBtn.addEventListener('click', async () => {
    try {
        const dateSplitted = dateInput.value.split('-')
        const year = dateSplitted[0]
        const month = dateSplitted[1]
        const day = dateSplitted[2]
        console.log(parseInt(input.value), dbData.name)
        const { data } = await axios.patch('https://app-beiu.herokuapp.com/api/v1/kitchen/update',
            {
                    "name": dbData.name,
                    "addQuantity": parseInt(input.value),
                    "date": `${month}-${day}-${year}`
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },  
            })
        console.log(data)
        await fetchData()
        addedText.innerHTML = `Ai adaugat ${input.value} bucati`
        addedText.classList.remove('hidden')
    } catch (error) {
        console.log(error)

    }
})

