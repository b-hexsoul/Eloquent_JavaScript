# Secret Life of Objects

## Encapsulation

Different pieces of such a program interact with each other through inter- faces, limited sets of functions or bindings that provide useful functionality at a more abstract level, hiding their precise implementation.
Such program pieces are modeled using objects. Their interface consists of a specific set of methods and properties. Properties that are part of the interface are called public. The others, which outside code should not be touching, are called private.
It is also common to put an underscore (\_) character at the start of property names to indicate that those properties are private.
Separating interface from implementation is a great idea. It is usually called encapsulation.

## Prototype

In addition to their set of properties, most objects also have a prototype. A prototype is another object that is used as a fallback source of properties. When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype’s prototype, and so on up the prototype chain...

You can use Object.create to create an object with a specific prototype.

```
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit); killerRabbit.type = "killer"; killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'
```

## Polymorphism

When you call the String function (which converts a value to a string) on an object, it will call the toString method on that object to try to create a mean- ingful string from it. I mentioned that some of the standard prototypes define their own version of toString so they can create a string that contains more useful information than "[object Object]". You can also do that yourself.

```
Rabbit.prototype.toString = function() {
  return `a ${this.type} rabbit`;
};
console.log(String(blackRabbit)); // → a black rabbit
```

This is a simple instance of a powerful idea. When a piece of code is written to work with objects that have a certain interface—in this case, a toString method—any kind of object that happens to support this interface can be
plugged into the code, and it will just work.
This technique is called polymorphism. Polymorphic code can work with
values of different shapes, as long as they support the interface it expects.
