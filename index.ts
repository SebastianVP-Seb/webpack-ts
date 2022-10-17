import { countVowels } from './src/utils';

interface IPerson {
    name: string;
    colour: string;
};

const person: IPerson = {
    name: 'Seb',
    colour: 'purple'
};

console.log(person);

console.log(countVowels('Sebastian'));