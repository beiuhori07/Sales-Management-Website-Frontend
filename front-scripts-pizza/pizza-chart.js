const token = localStorage.getItem('token')
let namesArray = []
let noSoldArray = []
let moneyArray = []
let length
let colors = []
const fetchData = async () => {
    try {
        const { data } = await axios.get('https://app-beiu.herokuapp.com/api/v1/pizza/get/all', {
        headers: {
            Authorization: `Bearer ${token}`,
        },   
    })
    console.log(data)
    data.pizzas.forEach( (item) => {
        namesArray.push(item.name)
        noSoldArray.push(item.numberSold)
        moneyArray.push(item.price * item.numberSold)
    })
    length = data.length
    const colorsSet = ['#03045e', '#023e8a', '#0077b6', '#0096c7', "#00b4d8", '#48cae4', '#90e0ef']
    for(i = 0; i < length; i++) {
        colors[i] = colorsSet[i%colorsSet.length]
    }

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    let finalDataArray1 = []
    let finalDataArray2 = []

    finalDataArray2 = [['Nume', '# Bani', { role: 'style' }]]
    for(i = 0; i < length; i++) {
        let tempArray = []
        tempArray.push(namesArray[i])
        tempArray.push(moneyArray[i])
        tempArray.push(colors[i])
        finalDataArray2.push(tempArray)
    }

    finalDataArray1 = [['Nume', '# Bucati vandute', { role: 'style' }]]
    for(i = 0; i < length; i++) {
        let tempArray = []
        tempArray.push(namesArray[i])
        tempArray.push(noSoldArray[i])
        tempArray.push(colors[i])
        finalDataArray1.push(tempArray)
    }

    
    function drawChart() {

        // Create the data table.
        var data = new google.visualization.arrayToDataTable(finalDataArray1)
        var data2 = new google.visualization.arrayToDataTable(finalDataArray2)

        // Set chart options
        var options = {'title':'Bucati vandute',
                    'width': 60 * length,
                    'height': 500,
                    'colors': colors,
                    chartArea:{left:100, top:70, width: 67 * length},
                    bar: {groupWidth: "75%"},
                    legend: { position: 'none' },
                };
        var options2 = {'title':'Bani',
                    'width': 60 * length,
                    'height': 500,
                    'colors': colors,
                    chartArea:{left:100, top:70, width: 67 * length},
                    bar: {groupWidth: "75%"},
                    legend: { position: 'none' },
                };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('first-chart'));
        chart.draw(data, options);
        var chart2 = new google.visualization.ColumnChart(document.getElementById('second-chart'));
        chart2.draw(data2, options2);
    }
    } catch (error) {
        if(error.response.status == 401) {
            location.href = '../index.html';
        }
    }
}


fetchData();



