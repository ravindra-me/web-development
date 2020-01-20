var input=document.getElementById("input");
var output=document.getElementById("output")

function calculate(data){
    switch(data){
        case 'AC':
            input.innerHTML="";
            output.innerHTML="";
            break;
        case '=':
            output.innerHTML=math.eval(input.innerHTML);
            break;
    default:
        input.innerHTML+=data;

    }
}