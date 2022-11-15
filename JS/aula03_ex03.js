const carro = 90000;

const formaDePagamento = 1; //1-debito 2-dinheiro/pix 3-2x 4-mais de 2x

if (formaDePagamento === 1)
{
    console.log(carro*0.9);
}
else if (formaDePagamento === 2)
{
    console.log(carro*0.85);
}
else if (formaDePagamento === 3)
{
    console.log(carro);
}
else
{
    console.log(carro + carro*0.1);
}