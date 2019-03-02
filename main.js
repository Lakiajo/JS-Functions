console.log('supercalifragilisticexpialidocious');
// Lakia Jones
// Kash Doll
// City Girls
// Tokyo Jetz
// Cardi BBBB
var firstName = 'Lakia';
var lastName = 'Jones';
console.log(firstName + ' '  + lastName)
console.log(`${firstName} ${lastName}`)

const firstName1 = 'Kash';
const lastName1 = 'Doll';
console.log(firstName1 + ' ' + lastName1)

const firstName2 = 'City';
const lastName2 = 'Girls';
console.log(firstName2 + ' ' + lastName2)

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`)
    alert(`${firstName} ${lastName}`);
}
namePrinter('Tokyo', 'Jetz');
namePrinter('Cardi', 'B!');

const test = num => console.log(num);

const nuggetizer = (animal) => {
     return `processed ${animal}`;

}
console.log(nuggetizer('pig'));


const dogBreed = (dogBreed) => {
    return `My favorite dog breed is ${dogBreed}`;
}

console.log(dogBreed('none'))