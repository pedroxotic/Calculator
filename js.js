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
    
    displaySelectedButon(numb);
    
    })
});

const operators=document.querySelectorAll(".op");
operators.forEach((button) =>{
    button.addEventListener('click', (e)=>{
    if(operator!==""){
        resultOfTwoNums(e);

    }

    operator=button.textContent;
    displaySelectedButon(operator)
    })
});

const equal =document.querySelector('#equal');
equal.addEventListener('click', (e)=>{
    resultOfTwoNums (e);

})

// making the AC button functional 
const AC = document.querySelector('#AC');
AC.addEventListener('click', ()=>{
    const expression=document.querySelectorAll('.exp');
    expression.forEach(element => element.remove() );
    num=[], num1=[], operator="";
})

function resultOfTwoNums (e){
    if(Array.isArray(num)){
        num=parseFloat(num.join(""));
    }
    num1=parseFloat(num1.join(""));
    //removing the expression to show the result 
    const expression=document.querySelectorAll('.exp');
    expression.forEach(element => element.remove() );
    num=(operate(operator,num,num1)); 
   const result=num;
   displaySelectedButon(result);
   num1=[];
    console.log(e);
   if(e.target.textContent=='='){
    operator="";
   } 
}

// making the delete button functional

// making the dot button functional

const dotButton = document.querySelector("#dot");

dotButton.addEventListener('click', () => {
  const lastNum = operator ? num1 : num; // get the current operand
  if (!lastNum.includes('.')) { // check if it already contains a dot
    lastNum.push('.'); // if not, add the dot to the operand
   // create a variable with . 
    const dotDiv = '.'; 
   displaySelectedButon(dotDiv)
  }
});
function displaySelectedButon(buttonTextContent){
    const newDisplayChild = document.createElement('div'); // create a new div for the dot
    newDisplayChild.textContent = buttonTextContent; // set the text content of the div to the dot
    newDisplayChild.classList.add('exp'); // add the 'exp' class to the div
    display.appendChild(newDisplayChild); // append the div to the display
}

