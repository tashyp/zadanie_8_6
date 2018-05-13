// scripts.js

//var foo = 'Lorem' + 'Ipsum';
//console.log(foo);

/* var variable = 'test';
console.log(variable);

var variable;
var variable = "I'm a variable with string value";

var variable,
    variable2 = 19,
    variable3;
*/
//var person;
//console.log(person);

//console.log(10 * 'napis');
//console.log(10 * 0);

//var foo = 'lorem' + 'Ipsum';
//console.log(foo);

/*
var foo = 'lorem' + 1 + 2;
console.log(foo);

var foo = 1+2+'lorem';
console.log(foo);

var foo = 'lorem' + ['1', 2, 3.4];
console.log(foo);

var foo = ['1', 2, 3.4] + 'lorem';
console.log(foo);

var foo = 9 + ['1', 2, 3.4];
console.log(foo);

var foo = ['1', 2, 3.4] + 9;
console.log(foo);

var foo = ['1', 2, 3.4] + [1, '2', 3.4];
console.log(foo);

var foo = ['1', 2, 3.4] + {bar: 'lorem'};
console.log(foo);

var foo = {bar: 'lorem'} + [1, '2', 3.4];
console.log(foo);

var foo = ['1', 2, 3.4] + undefined;
console.log(foo);

var points = 1;
points = points + 1;
console.log( 'The current value of points is: ', points );

console.log( 'The current value of points is: ', points++ );
console.log( 'The current value of points is: ', points );
console.log( 'The current value of points is: ', ++points );
console.log( 'The current value of points is: ', ++points );
*/

/*var x = 15,
    foo;
var foo = x % 2;
console.log(foo);
*/
//foo = x % 3;
//foo = x % 5;
/*
var userName = 'Przemek';
// change the above value to check how the 'if' works
if (userName == 'Przemek') {
    document.write('Witaj Przemku!');
} else if (userName.length == 0) {
    document.write('Nie wprowadziłeś imienia!');
} else {
    document.write('Witaj ' + userName);
*/

var a = 3,
	b = 4,
	value;
console.log(value = (a * a) - (2 * a * b) - (b * b));

if (value > 0) {
	console.log('The result is positive')
} else {
console.log('The result is negative')
}

switch (value) {
    case 'value = 0':
        alert('The result is align to 0')
        break;
    default:
    	alert('The result is not align to zero');
}