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
    number.classList.add('exp')

    display.appendChild(number);
    
    })
});

const operators=document.querySelectorAll(".op");
operators.forEach((button) =>{
    button.addEventListener('click', ()=>{
    operator=button.textContent;
    const operatordiv=document.createElement('div');
    operatordiv.textContent=button.textContent;
    operatordiv.classList.add('exp')
    display.appendChild(operatordiv);
    })
});

const equal =document.querySelector('#equal');
equal.addEventListener('click', ()=>{
    if(Array.isArray(num)){
        num=parseInt(num.join(""));
    }
    num1=parseInt(num1.join(""));
    //removing the expression to show the result 
    const expression=document.querySelectorAll('.exp');
    expression.forEach(element => element.remove() );


   num=(operate(operator,num,num1)); 
   const result=document.createElement('div');
   result.textContent=num;
   result.classList.add('exp')
   display.appendChild(result);
   num1=[];

})


