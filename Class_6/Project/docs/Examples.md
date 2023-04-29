## SQL with Postgresql Examples

### How to Create a new Schema (New Table)

    CREATE TABLE products(
    	id SERIAL PRIMARY KEY,
      	name VARCHAR(100) NOT NULL,
      	description VARCHAR(100) NOT NULL,
      	price DECIMAL(10, 2) NOT NULL,
      	available_units INTEGER(100)
    );

---

### How To Insert a Register into the table

**Query #1**

    INSERT INTO products (id,name,description,price,available_units) VALUES(1,'Pokemon Sapphire Version - Game Boy Advance (Renewed)', 'Pokemon Sapphire takes you into an immersive and more', 34.5,4);

---

**Query #2**

    INSERT INTO products (id,name,description,price,available_units) VALUES(2,'Pokemon Sapphire Version - Game Boy Advance (Renewed)', 'Pokemon Sapphire takes you into an immersive and more', 34.5,4);

---

### How to show all of the registers inside the table

**Query #3**

    SELECT *
    FROM products;

| id  | name                                                  | description                                           | price | available_units |
| --- | ----------------------------------------------------- | ----------------------------------------------------- | ----- | --------------- |
| 1   | Pokemon Sapphire Version - Game Boy Advance (Renewed) | Pokemon Sapphire takes you into an immersive and more | 34.50 | 4               |
| 2   | Pokemon Sapphire Version - Game Boy Advance (Renewed) | Pokemon Sapphire takes you into an immersive and more | 34.50 | 4               |

---

### How to show one register from the table (search where a fieldname meets the WHERE criteria)

**Query #4**

    SELECT *
    FROM products
    WHERE id = 1;

| id  | name                                                  | description                                           | price | available_units |
| --- | ----------------------------------------------------- | ----------------------------------------------------- | ----- | --------------- |
| 1   | Pokemon Sapphire Version - Game Boy Advance (Renewed) | Pokemon Sapphire takes you into an immersive and more | 34.50 | 4               |

---

### How to Update a field from the table where the WHERE criteria meets the require condition.

**Query #5**

    UPDATE products
    SET name = 'Pokemon Yellow Version - Special Pikachu Edition (Renewed)',
    price = 45.78, available_units = 15
    WHERE id=2;

---

### How to Delete a register that meets the WHERE criteria.

**Query #6**

    DELETE
    FROM products
    WHERE id = 2;

---

**Query #7**

    SELECT *
    FROM products;

| id  | name                                                  | description                                           | price | available_units |
| --- | ----------------------------------------------------- | ----------------------------------------------------- | ----- | --------------- |
| 1   | Pokemon Sapphire Version - Game Boy Advance (Renewed) | Pokemon Sapphire takes you into an immersive and more | 34.50 | 4               |

---
