# Design patterns

**Design patterns** are typical solutions to common problems in software design. Each pattern is like a blueprint that you can customize to solve a particular
design problem in your code.

You can’t just find a pattern and copy it into your program, the way you can with off-the-shelf functions or libraries. The pattern is not a specific piece of code, but a general concept for solving a particular problem. You can follow the pattern details and implement a solution that suits the realities of your own program.

Patterns are often confused with algorithms, because both concepts describe typical solutions to some known problems. While an algorithm always defines a clear set of actions that can achieve some goal, a pattern is a more high-level description of a solution. The code of the same pattern applied to two different programs may be different.

An analogy to an algorithm is a cooking recipe: both have clear steps to achieve a goal. On the other hand, a pattern is more like a blueprint: you can see what the result and its features are, but the exact order of implementation is up to you.

## What does the pattern consist of?

Most patterns are described very formally so people can reproduce them in many contexts. Here are the sections that are usually present in a pattern description:

- **Intent** of the pattern briefly describes both the problem and the solution.

- **Motivation** further explains the problem and the solution the pattern makes possible.

- **Structure of classes** shows each part of the pattern and how they are related.

- **Code example** in one of the popular programming languages makes it easier to grasp the idea behind the pattern.

Some pattern catalogs list other useful details, such as applicability of the pattern, implementation steps and relations with other patterns.

## Benefits of patterns

Patterns are a toolkit of solutions to common
problems in software design. They define
a common language that helps your team
communicate more efficiently.

## Classification of patterns

Design patterns differ by their complexity, level of detail and scale of applicability to the entire system being designed. I like the analogy to road construction: you can make an intersection safer by either installing some traffic lights or building an entire multi-level interchange with underground passages for pedestrians.

The most basic and low-level patterns are often called idioms. They usually apply only to a single programming language.

The most universal and high-level patterns are architectural patterns. Developers can implement these patterns in virtually any language. Unlike other patterns, they can be used to design the architecture of an entire application.

In addition, all patterns can be categorized by their intent, or purpose. This book covers three main groups of patterns:

- **Creational patterns** provide object creation mechanisms that increase flexibility and reuse of existing code.

- **Structural patterns** explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.

- **Behavioral patterns** take care of effective communication and the assignment of responsibilities between objects.

## The Catalog of Design Patterns

### Creational patterns

These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

The most commons are:

#### Factory Method

Also known as **Virtual Constructor**

**Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

```javascript
class AuthenticationFactory {
  static create(provider) {
    return new Authentication().setProvider('firebase').build();
  }

  static create(provider) {
    return new Authentication().setProvider(provider).build();
  }
}

const obj = AuthenticationFactory.create('firebase');
```

#### Builder

**Builder** is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

```JavaScript
class Authentication(){
  constructor(){}

  setProvider(provider){
    this.provider = provider;

    return this;
  }

  sethOAuthUrl(){
    this.url = url;
  }

  build(){
    //process setting
    return this;
  }

}


const obj = new Authentication()
                .setProvider('firebase')
                .build();

console.log('New Instance', instanceof obj); // undefined


```

#### Singleton

**Singleton** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

```javascript
class Authentication {
  static _instance;

  static build() {
    if (!Authentication._instance) {
      //_instance is used to tell that it is private
      Authentication._instance = new Authentication()
        .setProvider('Google')
        .build();
    }
    return Authentication._instance;
  }
}
```

#### Adapter

**Adapter** is a structural design pattern that allows objects with incompatible interfaces to collaborate.

```javascript

class UserAdapter{
  static factoryAll(users){
    return users.map({username, id, email}=>{
      return {id,name: name.toUppercase(), username, email, isActive: email.contains('@')}
    })
  };
}


class User(){
  constructor(username, password){
    this.username  = username;
    this._password = encrypt(password);
  }

 setPassword (newPass){
  this._password = encrypt(password);
 }

 getPassword(){
  return '********';
 }



}

const user = new User('hmanzur','12345');



```

```javascript
function authenticate(req, res, next) {
  if (!req.headers.Authentication) {
    res.send('User Authenticated');
  } else {
    next();
  }
}

function joiUserValidation(req, res, next) {
  if (joi.isValid(req.body)) {
    next();
  } else {
    res.send(joi.errors);
  }
}

function isCached(req,res)

function createUser(req,res)

```

### Structural patterns

These patterns explain how to assemble objects and classes into larger structures while keeping these structures flexible and efficient.

### Behavioral patterns

These patterns are concerned with algorithms and the assignment of responsibilities between objects.

## Resources

- [Refactoring Guru](https://refactoring.guru/)
