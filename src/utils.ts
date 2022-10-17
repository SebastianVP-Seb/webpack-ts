interface ICounterVowels {
    a: number;
    e: number;
    i: number;
    o: number;
    u: number;
};

export const countVowels = (cadena: string): ICounterVowels => {

    const vowelsDictionary = [ 'a', 'e', 'i', 'o', 'u' ];
    const stringtToArray = cadena.split('');

    const counter = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    vowelsDictionary.forEach(vowel => Object.assign(counter, {
        [vowel]: stringtToArray.filter(char => char.toLowerCase() === vowel.toLowerCase()).length
    }));
    return counter;
};

// export default countVowels;