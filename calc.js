var answer = document.calc.output.value    
    
    
    function run1()
    {document.calc.output.value += "1";}
    function run2()
    {document.calc.output.value += "2";}
    function run3()
    {document.calc.output.value += "3";}
    function runplus()
    {document.calc.output.value += "+";}
    
    
    function run4()
    {document.calc.output.value += "4";}
    function run5()
    {document.calc.output.value += "5";}
    function run6()
    {document.calc.output.value += "6";}
    function runminus()
    {document.calc.output.value += "-";}
    
    
    function run7()
    {document.calc.output.value += "7";}
    function run8()
    {document.calc.output.value += "8";}
    function run9()
    {document.calc.output.value += "9";}
    function rundivide()
    {document.calc.output.value += "/";}
    
    
    function runclear()
    {document.calc.output.value = "";}
    function run0()
    {document.calc.output.value += "0";}
    function runpoint()
    {document.calc.output.value += ".";}
    function runmultiply()
    {document.calc.output.value += "*";}
    function runpercent()
    {document.calc.output.value += "%";}
    
    //Special functions-- COULD NOT FIGURE THESE DAMN THINGS OUT!!!!! >_<
    
   
    
    
  


    
    
  //Eval function  
function evalop()
    {
        var evalo=eval(document.calc.output.value)
        
        document.calc.output.value = evalo;
    }
