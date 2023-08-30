interface SuperHero{
    name:string;
    age:number;
    address:direccion
    showAddress():string
}

interface direccion{
    street:string,
    country:string,
    city:string
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address:{
        street:'Main St',
        country:'USA',
        city: 'NY'

    },
    showAddress(){
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}