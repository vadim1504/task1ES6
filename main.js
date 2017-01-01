import UnitsConverter from './UnitsConverter.js';
let unitsConverter = new UnitsConverter();
let conversion = {
    from: 'cm',
    to: 'mm'
};
let converter = unitsConverter.createConverter(conversion);
console.log(converter.convert("5.1","1"));
console.log(converter.convert(1.5,2,7));

conversion = {
    from: 'mm',
    to: 'cm'
};
converter = unitsConverter.createConverter(conversion);
console.log(converter.convert([20,5,1000]));
console.log(converter.convert("500"));

conversion = {
    from: 'cm',
    to: 'm'
};
converter = unitsConverter.createConverter(conversion);
console.log(converter.convert(2));
console.log(converter.convert(["500","300"]));

conversion = {
    from: 'kg',
    to: 'g'
};
converter = unitsConverter.createConverter(conversion);
console.log(converter.convert(10));
console.log(converter.convert(0.005));

conversion = {
    from: 't',
    to: 'kg'
};
converter = unitsConverter.createConverter(conversion);
console.log(converter.convert(2));

conversion = {
    from: 't',
    to: 'g'
};
converter = unitsConverter.createConverter(conversion);
console.log(converter.convert(2));

conversion = {
    from: 'c',
    to: 'f'
};
converter = unitsConverter.createConverter(conversion);
console.log(converter.convert(45));

conversion = {
    from: 'f',
    to: 'c'
};
converter = unitsConverter.createConverter(conversion);
console.log(converter.convert(113));
