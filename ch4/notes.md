## Properties

Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error.

The two main ways to access properties in JavaScript are with a dot and with square brackets. Both value.x and value[x] access a property on value—but not necessarily the same property. The difference is in how x is interpreted. When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name.

The elements in an array are stored as the array’s properties, using numbers as property names.

Properties that contain functions are generally called methods of the value they belong to, as in “toUpperCase is a method of a string”.

## Objects

Reading a property that does'nt exist will give you a value of undefined

```
console.log(Object.keys({x: 0, y: 0, z: 2})); // → ["x", "y", "z"]
```

There’s an Object.assign function that copies all properties from one object into another.

```
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

Arrays are actually a type of object specialized for storing sequences of things. If you evaluate typeof [], it produces "object".

## Mutability

Object values can be modified. The types of values discussed in earlier chapters, such as numbers, strings, and Booleans, are all immutable—it is impossible to change values of those types.

With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties.

```
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};
console.log(object1 == object2); // → true
console.log(object1 == object3); // → false
object1.value = 15;
console.log(object2.value);// → 15
console.log(object3.value);// → 10
```

The object1 and object2 bindings grasp the same object, which is why changing object1 also changes the value of object2. They are said to have the same identity. The binding object3 points to a different object, which initially contains the same properties as object1 but lives a separate life.

## Rest Parameters

It can be useful for a function to accept any number of arguments. For example, Math.max computes the maximum of all the arguments it is given.
To write such a function, you put three dots before the function’s last pa- rameter, like this:

```
function max(...numbers) {
   let result = -Infinity;
   for (let number of numbers) {
     if (number > result) result = number;
   }
   return result;
 }
console.log(max(4, 1, 9, -2));// → 9
```

When such a function is called, the rest parameter is bound to an array containing all further arguments. If there are other parameters before it, their values aren’t part of that array. When, as in max, it is the only parameter, it will hold all arguments.

You can use a similar three-dot notation to call a function with an array of arguments.

```
let numbers = [5, 1, 7];
console.log(max(...numbers)); // → 7
```

This “spreads” out the array into the function call, passing its elements as separate arguments. It is possible to include an array like that along with other arguments, as in max(9, ...numbers, 2).
Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.

```
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]); // → ["will", "never", "fully", "understand"]
```
