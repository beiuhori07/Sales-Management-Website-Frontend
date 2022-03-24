const token = localStorage.getItem('token')
const container = document.querySelector('.main-container')
const secondContainer = document.querySelector('.second-container')

let idsToQuery = []
let namesArray = []
let noSoldArray = []
let moneyArray = []
let colors = []
let lengthArray = 0

let inputMoney = document.createElement('input')
inputMoney.type = 'checkbox'
inputMoney.id = 'money'
inputMoney.name = 'money'

let labelMoney = document.createElement('label')
labelMoney.for = 'money'
labelMoney.innerHTML = 'bani'

let btn
btn = document.createElement('input')
btn.type = 'button'
btn.value = 'generate'
btn.classList.add('btn')

const generateDOM = async () => {
    try {
        const { data } = await axios.get(`https://app-beiu.herokuapp.com/api/v1/pizza/get/all`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },   
                })
        data.pizzas.forEach( (item) => {
            let input = document.createElement('input')
            input.type = 'checkbox'
            input.id = item._id
            input.name = item._id

            let label = document.createElement('label')
            label.for = item._id
            label.innerHTML = item.name

            let breakItem = document.createElement('br')

            container.appendChild(input)
            container.appendChild(label)
            container.appendChild(breakItem)


            input.addEventListener('input', () => {
                if(input.checked) {
                    idsToQuery.push(input.id)
                }
                else {
                    idsToQuery = idsToQuery.filter(e => e !== input.id)
                }
            })
        })

        container.appendChild(document.createElement('br'))
        container.appendChild(document.createElement('br'))


        let breakItem = document.createElement('br')

        container.appendChild(inputMoney)
        container.appendChild(labelMoney)
        container.appendChild(breakItem)

        container.appendChild(document.createElement('br'))

        container.appendChild(btn)
    } catch (error) {
        if(error.response.status == 401) {
            location.href = '../index.html';
        }
    }
}

generateDOM()

btn.addEventListener('click',async () => {
    namesArray = []
    moneyArray = []
    noSoldArray = []

    try {
        const { data } = await axios.post(`https://app-beiu.herokuapp.com/api/v1/pizza/get/more`,
            {
                ids: idsToQuery,
                length: idsToQuery.length
            },
            {
            headers: {
                Authorization: `Bearer ${token}`,
            },   
        })
        data.pizzas.forEach( (item) => {
            namesArray.push(item.name)
            noSoldArray.push(item.numberSold)
            moneyArray.push(item.price * item.numberSold)
        })
        
        // namesArray.push(data.name)
        // console.log(namesArray)
        // if(inputMoney.checked) {
        //     moneyArray.push(data.price * data.numberSold)
         // }
        // else {
        //     noSoldArray.push(data.numberSold)
        // }
        } catch (error) {
            if(error.response.status == 401) {
                location.href = '../index.html';
            }
        }

    // console.log(namesArray)
    lengthArray = namesArray.length
    const colorsSet = ['#03045e', '#023e8a', '#0077b6', '#0096c7', "#00b4d8", '#48cae4', '#90e0ef']
    for(i = 0; i < lengthArray; i++) {
        colors[i] = colorsSet[i%colorsSet.length]
    }

    
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    let finalDataArray = []
    if(inputMoney.checked) {
        finalDataArray = [['Nume', '# Bani', { role: 'style' }]]
        for(i = 0; i < lengthArray; i++) {
            let tempArray = []
            tempArray.push(namesArray[i])
            tempArray.push(moneyArray[i])
            tempArray.push(colors[i])
            finalDataArray.push(tempArray)
        }
    }
    else {
        finalDataArray = [['Nume', '# Bucati vandute', { role: 'style' }]]
        for(i = 0; i < lengthArray; i++) {
            let tempArray = []
            tempArray.push(namesArray[i])
            tempArray.push(noSoldArray[i])
            tempArray.push(colors[i])
            finalDataArray.push(tempArray)
        }
    }

    
    function drawChart() {

        // Create the data table.
        var data = new google.visualization.arrayToDataTable(finalDataArray)

        // Set chart options
        var options = {'title':'Grafic specific pizza',
                    'width': 1100,
                    'height': 80 * lengthArray,
                    'colors': colors
                };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
        chart.draw(data, options);

    }
})