import {Product} from './06-function-destructuring'
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[]=[
    {
        description: 'Samsung',
        price: 333.44
    },
    {
        description:'Ipad',
        price:33.445
    }
];


const [total,tax] = taxCalculation({
    
    products: shoppingCart,
    tax:0.15
});

console.log(total)
console.log(tax)


