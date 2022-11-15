
const entradas = [5, 50, 10, 98, 23];
let i=0;

function gets ()
{
    const indice = entradas[i];
    i++;
    return indice;
}

function print (text)
{
    console.log(text);
}

module.exports = {gets, print}