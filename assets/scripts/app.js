let subs=0;
let divs=1;
let muls=1;
let adder=0;
let previousvalue=0;
let equation="";
function add()
{let takingValue=parseInt(userInput.value);
   
   adder=takingValue+adder;
   outputResult(adder, equations());
   previousvalue=adder;
   
}
function equations(){
        let takingValue=parseInt(userInput.value);
    return equation=`${previousvalue} + ${takingValue}`;
}
function sub(){
        let takingValue=parseInt(userInput.value);
        subs=previousvalue-takingValue;
        outputResult(subs, equations());
        previousvalue=subs;
        
   
        
   
}
function mul(){
        let takingValue=parseInt(userInput.value);
        muls=muls*takingValue;
        outputResult(muls, equations());
        previousvalue=muls;
       

}
function div(){
        let takingValue=parseInt(userInput.value);
        divs=previousvalue/takingValue;
        outputResult(divs, equations());
        previousvalue=divs;
        

}
addBtn.addEventListener("click",add);
subtractBtn.addEventListener("click",sub);
multiplyBtn.addEventListener("click",mul);
divideBtn.addEventListener("click",div);
