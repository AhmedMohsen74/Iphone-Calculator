const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const comma = document.querySelector('.comma');


let firstValue = "";
let isFirstValue = false;
let secandValue = "";
let isSecandValue = false;
let sign = "";
let resultValue = 0;

for(let i = 0 ; i < numbers.length; i++)
{
    numbers[i].addEventListener('click',(e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false)
        {
            getFirstValue(atr);
        }
        if(isSecandValue === false)
        {
            getSecandValue(atr);
        }
    })
}

function getFirstValue(el)
{
    result.innerHTML = "";
    firstValue += el;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}


function getSecandValue(el)
{
    if(firstValue != "" && sign != "")
    {
        secandValue += el;
        result.innerHTML = secandValue;
        secandValue = +secandValue;
    }
}

function getSign()
{
    for(let i = 0 ; i< signs.length ; i++)
    {
        signs[i].addEventListener('click',(e) => {
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}
getSign();


equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+"){
        resultValue = firstValue + secandValue;
    } else if(sign === "-"){
        resultValue = firstValue - secandValue;
    } else if(sign === "x"){
        resultValue = firstValue * secandValue;
    } else if(sign === "/"){
        resultValue = firstValue / secandValue;
    }
    result.innerHTML = resultValue;
    firstValue=resultValue;
    secandValue = "";
   
})


function checlResultLength(){
    resultValue = JSON.stringify(resultValue);

    if(resultValue.length >= 8)
    {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue= -firstValue
        firstValue = resultValue;
    }
    if(firstValue != "" && secandValue != "" && sign != "")
    {
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
})


percent.addEventListener('click',() =>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != "" && secandValue != "" && sign != "")
    {
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;

})

clear.addEventListener("click", () => {
    result.innerHTML = 0;
    firstValue = "";
    secandValue = "";
    isFirstValue = false;
    isSecandValue = false;
    sign = "";
    resultValue = 0;
})

comma.addEventListener("click",() =>{
    if(firstValue!= "")
    {
        firstValue +","+secandValue;
    }

})