var input=document.getElementById("input");
var output=document.getElementById("output")

function calculate(data){
    switch(data){
        case 'AC':
            input.innerHTML="";
            break;
        case 'C':
            input.innerHTML=input.innerHTML.substr(0, input.innerHTML.length-1);
            break;
        case '=':
            output.innerHTML=math.eval(input.innerHTML);
            break;
    default:
        input.innerHTML+=data;

    }
}