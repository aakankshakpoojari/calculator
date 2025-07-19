let buffer='0'
const screen=document.querySelector('.screen')
let runningTotal=0;
let previousOperator;
function buttonClick(value){
    if (isNaN(parseInt(value))){
        handleSymbol(value);
    } else{
        handleNumber(value);
    }
    rerender();
}
function handleMath(value){
    if (buffer==='0'){
        return;
    } 
    const intBuffer=parseInt(buffer);
    if (runningTotal===0){
        runningTotal=intBuffer;
    } else{
        flushOperation(intBuffer);
    }
    previousOperator=value;
    buffer='0';
    console.log(runningTotal);
}
function flushOperation(value){
    if (previousOperator === '+'){
        runningTotal+=value;
    } else if (previousOperator === '-'){
        runningTotal-=value;
    } else if (previousOperator === '/'){
        runningTotal/=value;
    } else if (previousOperator === '*'){
        runningTotal*=value;
    }

}

function handleSymbol(symbol){
    switch (symbol){
        case 'C': 
            buffer='0';
            break;
        case '<-':
            if (buffer.length===1){
                buffer='0';
            } else{
                buffer=buffer.substring(0,buffer.length-1);
            }
            break;
        case '=':
            if (previousOperator=== null){
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator=null;
            buffer=""+runningTotal;
            runningTotal=0;
            break;
        case '+':
        case '-':    
        case '=':
        case '*': 
        case '/':
            handleMath(symbol);   
        
            break;
    }}

function handleNumber(number){
    if (buffer === '0'){
        buffer=number;
    } else{
        buffer+=number
    }
    console.log(buffer);
}

function init(){
    document.
    querySelector('.calc-buttons')
    .addEventListener("click", function(event){
        buttonClick(event.target.innerText);
    });
}
function rerender(){
    screen.innerText=buffer;
}
init();