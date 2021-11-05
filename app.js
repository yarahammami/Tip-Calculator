const form = document.getElementById('calculator');

form.onsubmit = function(event){
    event.preventDefault();
    
    let howMuch = document.getElementById('bill');
    let tipAmount = document.getElementById('percentage');
    let customerNum = document.getElementById('custom-num');

    let totalBill = document.getElementById('total-bill');
    let totalPercentage = document.getElementById('total-percentage');
    let totalPerCustomer = document.getElementById('total-per-customer');

    let cost = parseFloat(howMuch.value);

    let percentage = 0;
    if(tipAmount.value!== ''){
        percentage = parseInt(tipAmount.value);
    }

    let customers = parseInt(customerNum.value);


    totalPercentage.value = calculatePercentageIncrease(cost,percentage);
    totalBill.value = calculateTotalValue(cost,percentage);
    totalPerCustomer.value = calculatePerCusomer(cost,percentage,customers);


    function calculatePerCusomer(cost,percentage,customers){
        return Math.round((cost+percentage)/customers);
    }

    function calculatePercentageIncrease(cost, percentage){
        return (cost/100)*percentage;
    }

    function calculateTotalValue(cost, percentage){
        return cost + percentage;
    }

}