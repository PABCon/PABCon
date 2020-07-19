# Javascrip Cheat Sheet

This document will be updated with useful Javascrip syntax that i learn throught out my learning (working hopefully) journey!
Feel free to consult it and propose your recommendations as well.


## Variable Types

### Var

```var```variables can be *redifined* and *updated*.
They are *function scope*, which means that they are only available inside the function that they are created in.
However, if they are not declared in a function, then they are *globally scoped*, and they're available in the whole window.

### Let and const

These are used inside the block scope and do not pass to the global scope like var in a scenario like below:

<pre>
var age = 100;
if(age > 12) {
  let dogYears = age * 7; *<-- ```let``` instead of ```var```*
  console.log(`You are ${dogYears} dog years old!`);
}
console.log(dogYears); // error because it's scoped only to the above block

</pre>

## Form

1. Reset Form

Create a function to handle reset
<pre>
function reset() {
    document.getElementById("form").reset();
}
</pre>

On submit handles add:
```reset();```

## Objects & Object Constructors

### Object Constructor definition

To define a constructor you need to use below structure:

<pre>
function Book(title,author,pages,read){

this.title= title,
this.author = author,
this.pages = pages,
this.read = read,
this.info = function(){

    return `${title} by ${author}, ${pages} pages, Read:${read}`
}}
</pre>

## Scopes

### Global Scope

Global scope is when you declare a variable in the parent scope of your JS.

<pre>
// global scope
var name = 'Todd';
</pre>

### Local Scope

Each functions has a local scope.
Local items are note visible in the global scope unless exposed.

<pre>
var myFunction = function () {
  var name = 'Todd'; <-- variable name on defined locally
  console.log(name); // Todd <-- exposed
};
// Uncaught ReferenceError: name is not defined
console.log(name);
</pre>


### Lexical Scope or Closure

Its when the function within other function has access to the outer functions scope.

*It does not work backwards*

<pre>
// Scope A
var myFunction = function () {
  // Scope B
  var name = 'Todd'; // defined in Scope B
  var myOtherFunction = function () {
    // Scope C: `name` is accessible here!
  };
};
</pre>

### Scope Chain

Is the relation between inner function with its outer function.
When resolving a variable, JavaScript starts at the innermost scope and searches outwards until it finds the variable/object/function it was looking for.


## Private Variables & Functions

### Defining Function Factories

We cant access for example ```jimmi.die()``` or ```jimmie.health= 1000``` because they are inside the functions which can only be accessed by others functions inside the Function Factory.

<pre>
const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName  = () => name;
  const die = () => {
    // uh oh
  };
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName}
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);
</pre>

### Inheritance with factories

<pre>
const Person = (name) => {
  const sayName = () => console.log(`my name is ${name}`)
  return {sayName}
}

const Nerd = (name) => {
  // simply create a person and pull out the sayName function!
  const {sayName} = Person(name)
  const doSomethingNerdy = () => console.log('nerd stuff')
  return {sayName, doSomethingNerdy}
}

const jeff = Nerd('jeff')

jeff.sayName() //my name is jeff
jeff.doSomethingNerdy() // nerd stuff
</pre>

## Module

