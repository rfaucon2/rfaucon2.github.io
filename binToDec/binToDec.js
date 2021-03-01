function printvalue(){  
    var input = document.getElementById("input").value;
    var output = 0;

    //Check if the input is valid
    for(var i = 0; i < input.length; i++)
    {
        if(input[i] != '0' && input[i] != '1')
        {
            alert("invalid input!");
            return 0;
        }
    }
    
    output = convert(input);
    
    document.getElementById("output").innerHTML = output;
}

function convert(z)
{
    var o = 0;
    var len = z.length;
    
    for(var i = len-1; i >= 0; i--)
    {
        o += (z[i]-'0')* Math.pow(2, ((len-1)-i));
    }    

    return o;
}
