function printvalue(){  
    var input = document.getElementById("input").value;
    var output = '';

    input = removeSpaces(input);

    if((input.length % 8) != 0)
    {
        alert("Invalid input!");
        return 0;
    }

    var outputlength = input.length / 8;

    for(var i = 0; i < outputlength ; i++)
    {
        var byte = input.substring(i*8, (i*8)+8);
        output +=  convert(byte)
    }


    
    document.getElementById("output").innerHTML = output;
}

function removeSpaces(a)
{
    str = a.split('');

    a = '';

    for(i in str)
    {
        if(str[i] != ' ')
        {
            a += str[i];
        }        
    }

    return a
}

function convert(z)
{
    var c;
    var o = 0;
    var len = z.length;
    
    for(var i = len-1; i >= 0; i--)
    {
        o += (z[i]-'0')* Math.pow(2, ((len-1)-i));
    } 
    c = String.fromCharCode(o);
    return c
}