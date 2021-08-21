

 let finalSum = 0;
 let screen = "0";
 let currentNumber = "";
 let isFirst = true;
let lastIndex;
 function handleMath(index) 
 {
    if(currentNumber == "" && !isFirst )
    {
          
        return;
    } 
    if(index == '-')
     {
        finalSum -= parseInt(currentNumber);

     }
     else if (index == '+')
     {
        finalSum += parseInt(currentNumber);
     }
     else if (index == '/')
     {
        finalSum /= parseInt(currentNumber);
     }
     else if (index == '*')
     {
        finalSum *= parseInt(currentNumber);
     }
     currentNumber = "";         
 }             
 function buttonHandler(event)
 {
     if(event == 'C')
     {
        finalSum = 0;
        isFirst = true;
        lastIndex = ""; 
        currentNumber = "";
         screen = "0";
         renderScreen(0);
     }
     else if(event == decodeURIComponent("%E2%86%90")) // LEFT ARROW SYMBOL
     {
         if(screen.length <= 1)
            {
                screen = "0";
                renderScreen(0);
            }
            else
            {
                screen = screen.substring(0,screen.length-1);
                currentNumber = currentNumber.substring(0,currentNumber.length-1);
                renderScreen(screen);
            }
     }
     else if(event == '=')
     {
        
            handleMath(lastIndex); 
            
            renderScreen(finalSum);
            currentNumber = "";
            lastIndex = "";
            screen = "0";
     }
     else if( (event == '-') || (event == '+') || (event == '/') || (event == '*') )
     {
        if(isFirst) 
        {    
            handleMath('+');
            isFirst = false;
            lastIndex = event;
            screen = "0";
            renderScreen(0);
        }
        else
        {
            screen = "0";
            renderScreen(0);
            handleMath(lastIndex);
            lastIndex = event;
        }
     }
     else 
     {
        if(screen == '0')
            {
                screen = "";
            } 
        currentNumber += event;
         screen += event;
         renderScreen(screen);
     }
    
 }
 function renderScreen(sum) {
       
    document.querySelector(".screen").innerText = sum;
 }
 function init()
  {
    document.querySelector(".rows").addEventListener('click',function(event){if(event.target.innerText.length===1){buttonHandler(event.target.innerText)}});  
  } 
  init(); 
                 