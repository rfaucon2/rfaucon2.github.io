function printvalue(){  
    var input = document.getElementById("input").value;
    var output = '';

    input=parseInt(input, 10);
    if(isNaN(input))
    {
        alert("You must enter a number");
        return 0;
    }
    
    output = convert(input);
    
    document.getElementById("output").innerHTML = output;
}

function convert(z)
{
    var o = '';
    var b, len = 0;

    while(z >= (Math.pow(2, len)))
    {
        len++;
    }
    if(z < (Math.pow(2, len)))
    {
        len--;
    }

    for(var a = len; a >= 0; a--){
        b = z;
        if(z >= Math.pow(2, a)){
            z -= Math.pow(2, a);
            o += '1'
        }
        else{
            o += '0'
        }
    }    
    return o;
}
