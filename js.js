let num=[], num1=[], operator="";
const add = function(num, num1) {
	return num+num1;
};

const subtract = function(num, num1) {  
	return num-num1
};

const multiply = function(num, num1) { 
    return num*num1;
    };

const divide = function(num, num1){
    return num/num1;
};

function operate (operator,num,num1){
    var result=0;
if (operator=='+'){
  result=  add(num,num1);
}
else if (operator=='-'){
    result=    subtract(num,num1);
}
else if (operator=='*'){
    result=  multiply(num,num1);
}
else if (operator=='÷'){
    result=   divide(num,num1);
}
return result;
}


const display =document.querySelector('#display');
const numbers=document.querySelectorAll(".btn");

numbers.forEach((button) =>{
    button.addEventListener('click', ()=>{
    const numb=button.textContent;
    if(operator==""){
        num.push(numb);
    }
    else{
        num1.push(numb);
    }
    
    const number=document.createElement('div');
    number.textContent=button.textContent;
    display.appendChild(number);
    
    })
});

const operators=document.querySelectorAll(".op");
operators.forEach((button) =>{
    button.addEventListener('click', ()=>{
    operator=button.textContent;
    const operatordiv=document.createElement('div');
    operatordiv.textContent=button.textContent;
    display.appendChild(operatordiv);
    })
});

const equal =document.querySelector('#equal');
equal.addEventListener('click', ()=>{
    num=parseInt(num.join(""));
    console.log(num);
    num1=parseInt(num1.join(""));
    console.log(num1);
   console.log(operate(operator,num,num1)); 
})


