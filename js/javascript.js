
document.querySelector('#answer').innerHTML = 0.00;

function calculate(){
    var Num1 = Number(document.querySelector('#num1').value);
    var Num2 = Number(document.querySelector('#num2').value);
    var Select = document.querySelector('select');
    var Operator = Select.options[Select.selectedIndex].value;
    var Answer = document.querySelector('#answer');
    var theCalculatedAnswer;
  
    if(Operator == 'add'){
        theCalculatedAnswer = Num1 + Num2;
    } else if(Operator == 'minus'){
        theCalculatedAnswer = Num1 - Num2;
    } else if(Operator == 'divide'){
        theCalculatedAnswer = Num1 / Num2;
    } else if(Operator == 'multiply'){
        theCalculatedAnswer = Num1 * Num2;
    } else {
        //alert('Please select an operator!')
        theCalculatedAnswer = 'Oops! Invalid Operation.'
    }
    Answer.innerHTML = theCalculatedAnswer.toFixed(2);
}

