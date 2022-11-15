const priceEtanol = 5.49;
const priceGasoline = 4.90;
const fuelType = 'Gasoline';
const carConsumption = 10; // l/km
const tripDistance = 300;

if (fuelType === 'Gasoline')
{
   const tripExpense = (tripDistance/carConsumption)*priceGasoline;
}
else 
{
   const tripExpense = (tripDistance/carConsumption)*priceEtanol;
} 

console.log(tripExpense);