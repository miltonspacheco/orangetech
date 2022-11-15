class Person{
    name;
    weight;
    height;
    
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    imcCalculator(){
        return this.weight / (this.height * this.height)
    }

    rankImc(){
        const imc = this.imcCalculator();

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
}

const milton = new Person('Milton', 70 , 1.75);
console.log(milton);
console.log(milton.imcCalculator());
console.log(milton.rankImc());

const julia = new Person('Julia', 63 , 1.69);
console.log(julia);
console.log(julia.imcCalculator());
console.log(julia.rankImc());
