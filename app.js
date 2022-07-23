// https://calculator.swiftutors.com/gross-profit-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const grossProfitRatioRadio = document.getElementById('grossProfitRatioRadio');
const grossProfitRadio = document.getElementById('grossProfitRadio');
const netSalesRadio = document.getElementById('netSalesRadio');

let grossProfitRatio;
let grossProfit = v1;
let netSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

grossProfitRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Profit';
  variable2.textContent = 'Net Sales';
  grossProfit = v1;
  netSales = v2;
});

grossProfitRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Profit Ratio';
  variable2.textContent = 'Net Sales';
  grossProfitRatio = v1;
  netSales = v2;
});

netSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross Profit Ratio';
  variable2.textContent = 'Gross Profit';
  grossProfitRatio = v1;
  grossProfit = v2;
});

btn.addEventListener('click', function() {
  
  if(grossProfitRatioRadio.checked)
    result.textContent = `Gross Profit Ratio = ${computeGrossProfitRatio().toFixed(2)}`;

  else if(grossProfitRadio.checked)
    result.textContent = `Gross Profit = ${computeGrossProfit().toFixed(2)}`;

  else if(netSalesRadio.checked)
    result.textContent = `Net Sales = ${computeNetSales().toFixed(2)}`;
})

// calculation

function computeGrossProfitRatio() {
  return (Number(grossProfit.value) / Number(netSales.value)) * 100;
}

function computeGrossProfit() {
  return (Number(grossProfitRatio.value) / 100) * Number(netSales.value);
}

function computeNetSales() {
  return Number(grossProfit.value) / (Number(grossProfitRatio.value) / 100);
}