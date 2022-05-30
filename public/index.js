function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161,61, 0.7)'
    }

    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }

    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }

    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');

}

main()