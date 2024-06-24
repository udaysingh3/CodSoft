
var decimalBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var displayValElement = document.getElementById('calc-display');

var displayVal = '0'; /*Simulates the zero on default*/
var pendingVal; /* Undefined. '5+3' then 3 would be displayed while 5 is pendingVal*/
var evalStringArray = []; /*Holds all values then can use eval()*/

/* Array by class*/
var calcNumBtns = document.getElementsByClassName('calc-num');
var calcOperatorBtns = document.getElementsByClassName('calc-operator');

/* clickObj automatically passes click event to the function*/
var updateDisplayVal = (clickObj) => { 
	/* If '8' is clicked, then btnText = 8 */
	var btnText = clickObj.target.innerText;
	/* Check display if 0, then clear it and add numbers to it*/
	if(displayVal === '0'){
		displayVal = '';
	}

	displayVal += btnText;
	displayValElement.innerText = displayVal;
}
var performOperation = (clickObj) => {
	var operator = clickObj.target.innerText;
	switch(operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '*':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(''));
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];
            break;
    }
    
}

/* Places click event on numbers that triggers updateDisplayVal()*/
for(var i=0; i < calcNumBtns.length; i++) {
	calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}
/* Click event for operators*/
for(let i=0; i < calcOperatorBtns.length; i++) {
	calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
	displayVal = '0'
	evalStringArray = [];
	displayValElement.innerHTML = displayVal;
}
backspaceBtn.onclick = () => {
	/* Take index of last string and remove it */
	let lengthOfDisplayVal = displayVal.length;
	/* Array starts at 0 */
	/* The end slice is not included in returned slice */
	displayVal = displayVal.slice(0,lengthOfDisplayVal - 1);
	/* Check if displayVal is empty*/
	if(displayVal === '') {
		displayVal = '0';
	}
	displayValElement.innerHTML = displayVal;
}
decimalBtn.onclick = () => {
	/* not false is true */
	if(!displayVal.includes('.')){
		displayVal += '.';
	}
	displayValElement.innerHTML = displayVal;
}