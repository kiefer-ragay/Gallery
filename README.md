# FEC Project
## Gallery Component

Instructions to get the component up and running
> Some usage instructions

```bash
npm install
npm run reset-db
npm run seed-db
npm run server
```
## API Patterns
 ### **Create a new product**
→ app.post(‘/api/product’)

**Request Body:** Expects JSON with the following keys
   ```
   {
      "name": "String"
   }
   ```

  Success Status Code: 201

### **Create a new image**

→ app.post(‘/api/images/:productid’)
  Success Status Code: 201

  **Path Parameters**
   - *productid* : Unique ID of product

  **Request Body:** Expects JSON with the following keys
  ```
   {
      "image": "String"
   }
  ```
### **Get an images for product**
→ app.get('/api/images/:productid/:imageid')

**Path Parameters**
   - *productid* : Unique ID of product
   - *imageid* : Image ID for given product

**Success Status Code:** 200

**Returns:** JSON with the following keys
```
{
   "images": "Array"
}
```

### **Get all images for product id**
→ app.get('/api/images/:productid')

**Path Parameters**
   - productid : Unique ID of product

**Success Status Code:** 200

**Returns:** JSON with the following keys
```
{
   "images": "Array"
}
```

### **Get product**
→ app.get('/api/product/:productid')

**Path Parameters**
   - productid : Unique ID of product

**Success Status Code:** 200

**Returns:** JSON with the following keys
```
{
   "product_id": "Integer",
   "product_name": "String",
   "number_of_images": "Integer",
   "views": "Integer",
   "date_added": "Integer"
}
```

### **Change an image for a certain product**
  → app.put(‘/api/images/:productid/:imageid’)

  **Path Parameters**
   - *productid* : Unique ID of product
   - *imageid* : Image ID for given product

   **Success Status Code :** 202

   **Request Body:** Expects JSON with the following keys
   ```
   {
      "image_url": "String",
      "height": "Integer",
      "width": "Integer",
      "quality": "Char"
   }
   ```

### **Delete a product**
  → app.delete(‘/api/product/:productid’)

  **Path Parameters**
   - *productid* : Unique ID of product

   **Success Status Code:** 204

### **Delete an image from a product**
→ app.delete(‘/api/images/:productid/:imageid’)

  **Path Parameters**
  - productid : Unique ID of product
  - imageid : Image ID for given product

  **Success Status Code:** 204


## Schema

### PRODUCT DOCUMENT

```
{
  "product_id": "Integer",
  "product_name": "String",
  "number_of_images": "Integer",
  "views": "Integer",
  "date_added": "Integer",
  "images": "Array"
}
```

### IMAGE DOCUMENT
```
{
   "image_id": "Integer",
   "image_url": "String",
   "views": "Integer",
   "height": "Integer",
   "width": "Integer",
   "quality": "Char",
   "date_added": "Integer"
}
```


