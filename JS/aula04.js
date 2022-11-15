(function main ()
{
    const peso = 63;
    const altura = 1.75;
    
    const imc = imcCalculator(peso,altura);
    console.log(imcClassificação(imc));
}) (); //funcão imediatamente invocada, n precisa chamar o main
       //existe só dentro desse parenteses

function imcCalculator (peso, altura)
{
    return peso / (altura*altura)
}

function imcClassificação (imc)
{
    if (imc < 18.5)
    {
        return('Abaixo do peso');
    }
    else if (imc >=18.5 && imc < 25)
    {
        return('Peso normal');
    }
    else if (imc >= 25 && imc < 30)
    {
        return('Acima do peso');
    }
    else if (imc >= 30 && imc < 40)
    {
        return('Obeso');
    }
    else 
    {
        return('Obesidade Grave');
    }
   
}