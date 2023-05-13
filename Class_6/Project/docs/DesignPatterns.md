# Design Patterns

## Builder

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

## Factory

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

## Singleton

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

## Adapter

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
