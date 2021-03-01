function printvalue(){  
    var input = document.getElementById("input").value;
    var output = '';

    for(var i = 0; i < input.length ; i++)
    {
        output += convert(input[i].charCodeAt(0));
        if(document.getElementById("doSpace").checked === true)
        {
            output += ' ';
        }
    }
    document.getElementById("output").innerHTML = output;
}

function convert(z)
{
    var o = '';
    var b;
    for(var a = 7; a >= 0; a--)
    {
        b = z;
        if(z >= Math.pow(2, a))
        {
            z -= Math.pow(2, a);
            o += '1'
        }
        else
        {
            o += '0'
        }
    }    
    return o;
}
