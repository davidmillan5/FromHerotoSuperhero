# Performing CRUD Operations With MongoDB

In this archive I'll register each one of the commands that I used to perfom the following CRUD operations READ, UPDATE and DELETE.

Before doing any CRUD operations you need to enter a MongoDB connection string.

This string you get it from your [Atlas MongoDB Account](https://cloud.mongodb.com/v2/644304166b0e7806d4ecdfa5#/clusters)

After that it will show you in the console that the connection was a success and you can start to make your operations work.

### Connection Support

![image](https://firebasestorage.googleapis.com/v0/b/musicianscdm.appspot.com/o/connection.png?alt=media&token=149452a3-3c9e-4045-a0bd-2ea86d819f6a)

## READ OPERATION

To query a document we use the [db.collection.find()](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/#mongodb-method-db.collection.find)
method.

### Read Operation in the Products database

[db.products.find()]()

**Response Example:**

```json
[
     {
    _id: ObjectId("644892f4136ba90606b42b4a"),
    title: 'Pokemon - Diamond Version (Renewed)',
    description: 'More elaborate Pokemon Contests. Players can use the accessories and dress up their Pokemon.',
    price: 180,
    Available_Units: 20,
    category: 'Video Games',
    __v: 0
  },
  {
    _id: ObjectId("64489440df62849f507f999d"),
    title: 'Pokemon Crystal Version - New Save Battery (Renewed)',
    description: 'Pokémon Crystal Version is the third and final Generation II core series game for Game Boy Color.',
    price: 269,
    Available_Units: 10,
    category: 'Video Games',
    __v: 0
  },
  {
    _id: ObjectId("64489a5f8475e617ba3a0779"),
    title: 'Pokemon HeartGold Version - Limited Edition - Nintendo DS',
    description: 'Prepare for thrilling new adventures as Legendary Pokémon awaken!.',
    price: 200,
    Available_Units: 15,
    category: 'Video Games',
    __v: 0
  }
]
```

### Read Support

![image](<https://firebasestorage.googleapis.com/v0/b/musicianscdm.appspot.com/o/find().png?alt=media&token=6c2733c8-9338-455a-86a3-641e38420ac4>)

## UPDATE OPERATION

To update one document we use the [db.collection.updateOne()
](https://www.mongodb.com/docs/manual/reference/method/db.collection.updateOne/#mongodb-method-db.collection.updateOne)
method.

### Update Operation in the Products database

[db.products.updateOne(\_id: ObjectId("idnumber"))]()

**Request example:**

```json
[
db.products.updateOne( { _id: ObjectId("644892f4136ba90606b42b4a") },
... {
...   $set: {
...     title: 'Pokemon - Red Version',
...     description: 'Welcome to the world of Pokemon,one filled with wild Pokemon and humans.',
...     price: 99,
...     Available_Units: 10,
...     category: 'Video Games'
...   }
... })
{
]
```

**Response Example:**

```json
[
  {
    "acknowledged": true,
    "insertedId": null,
    "matchedCount": 1,
    "modifiedCount": 1,
    "upsertedCount": 0
  }
]
```

### Update Support

![image](<https://firebasestorage.googleapis.com/v0/b/musicianscdm.appspot.com/o/updateone().png?alt=media&token=87aa5315-603f-4cc6-9315-b6940155af46>)

## DELETE OPERATION

To delete one document we use the [db.collection.deleteOne()
](https://www.mongodb.com/docs/manual/reference/method/db.collection.deleteOne/#mongodb-method-db.collection.deleteOne)
method.

### Delete Operation in the Products database

[db.products.deleteOne(\_id: ObjectId("idnumber"))]()

**Request example:**

```json
[
db.products.deleteOne( { _id: ObjectId("644892f4136ba90606b42b4a") } )
{ acknowledged: true, deletedCount: 1 }
]
```

## Delete Support

![image](<https://firebasestorage.googleapis.com/v0/b/musicianscdm.appspot.com/o/deleteOne().png?alt=media&token=876848c5-ee21-483b-82dd-4a0f2aa7d860>)
