class Car {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularCustoDaViagem (distancia, precoCombustivel){
        return distancia * this.gastoMedioPorKm * precoCombustivel;
    }
}

const hb20 = new Car('Hyundai', 'branco', 1/8);
console.log(hb20);
console.log(hb20.calcularCustoDaViagem(70, 5));

const palio = new Car('Fiat', 'vermelho', 1/16);
console.log(palio);
console.log(palio.calcularCustoDaViagem(70, 5));

