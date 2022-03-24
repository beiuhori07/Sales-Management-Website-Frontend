// const { default: axios } = require("axios");

const input = document.querySelector('.input')
const btn = document.querySelector('.btn')
const logsContainer = document.querySelector('.logs')

const token = localStorage.getItem('token')

let today = new Date().toISOString().substr(0, 10);
input.value = today;

let pMoney = document.createElement('p')


btn.addEventListener('click', async () => {
    const date = input.value
    const dateSplitted = date.split('-')
    const year = dateSplitted[0]
    const month = dateSplitted[1]
    const day = dateSplitted[2]
    try {
        logsContainer.innerHTML = ''
        const { data } = await axios.get(`https://app-beiu.herokuapp.com/api/v1/pizzaLogs/get/${month}-${day}-${year}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },   
            })
        if(data.length == 0) {
            let parag = document.createElement('p')
            parag.innerHTML = 'Nu ai intrari pe acea zi!'
            let container = document.createElement('div')
            container.classList.add('logContainer-nonflex')
            container.appendChild(parag)
            logsContainer.appendChild(container)
        }
        else {
            let sum = 0
            data.forEach( (item) => {
                let container = document.createElement('div')
                let outerContainer = document.createElement('div')
                let parag = document.createElement('p')
                parag.classList.add('log')
                parag.innerHTML = `Ai adaugat ${item.numberSold} ${item.name} in valoare de ${item.price} lei`
                parag.setAttribute('data-id', item._id)
                // console.log(parag.getAttribute('data-id'));
                
                let removeBtn = document.createElement('button')
                removeBtn.classList.add('remove-btn')
                removeBtn.innerHTML = 'Sterge';

                
                container.classList.add('logContainer')
                outerContainer.classList.add('logContainer-nonflex')
                container.appendChild(parag)
                container.appendChild(removeBtn)
                outerContainer.appendChild(container)
                logsContainer.appendChild(outerContainer)

                let sureBtn = document.createElement('button')
                let innerSeconContainer = document.createElement('div')
                let areYouSureParag = document.createElement('p')
                areYouSureParag.innerHTML = 'Esti sigur?'
                innerSeconContainer.classList.add('innerSecondContainer')
                sureBtn.classList.add('remove-btn')

                sureBtn.addEventListener('click', async () => {
                    try {
                        const { data } = await axios.get(`https://app-beiu.herokuapp.com/api/v1/pizzaLogs/remove/${parag.getAttribute('data-id')}`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },   
                        })
                        logsContainer.removeChild(outerContainer);
                        sum = sum - item.price;
                        pMoney.innerHTML = `Vandut in valoare de ${sum} lei`
                    } catch (error) {
                        console.log(error);
                    }
                })

                removeBtn.addEventListener('click', () => {
                    if(innerSeconContainer.hasChildNodes()) {
                        innerSeconContainer.removeChild(areYouSureParag)
                        innerSeconContainer.removeChild(sureBtn);
                        outerContainer.removeChild(innerSeconContainer)
                    } else {
                        sureBtn.innerHTML = 'da'
                        innerSeconContainer.appendChild(areYouSureParag)
                        innerSeconContainer.appendChild(sureBtn)
                        outerContainer.appendChild(innerSeconContainer)
                    }
                })

                sum = sum + item.price
            })
            // logsContainer.appendChild(document.createElement('br'))
            let containerTotal = document.createElement('div')
            containerTotal.classList.add('logContainer-nonflex')

            let heading = document.createElement('h4')
            heading.innerHTML = 'Total'

            logsContainer.appendChild(heading)
            // let pMoney = document.createElement('p')
            pMoney.classList.add('total')
            pMoney.innerHTML = `Vandut in valoare de ${sum} lei`
            containerTotal.appendChild(pMoney)
            logsContainer.appendChild(containerTotal)
        }
        } catch (error) {
            if(error.response.status == 401) {
                location.href = '../index.html';
            }
    }
})