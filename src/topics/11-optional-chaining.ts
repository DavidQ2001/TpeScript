export interface Passenger{
    name:string;
    children?:string[];

}


const passenger1: Passenger={
    name: 'David',
}

const passenger2: Passenger={
    name: 'Nathalia',
    children: ['Valentina','Paulina'],
}

const printChildren = (passenger:Passenger) => {

    const howManyChildren = passenger.children?.length;

    console.log(howManyChildren);

}

printChildren(passenger2)