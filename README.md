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

### Products

 ### **Create a new product**
→ app.post(‘/api/product’)

**Request Body:** Expects JSON with the following keys
   ```
   {
      "name": "String"
   }
   ```

  Success Status Code: 201

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
   "views": "Integer",
   "date_added": "Date"
   "images": "Array"
}
```

### **Delete a product**
  → app.delete(‘/api/product/:productid’)

  **Path Parameters**
   - *productid* : Unique ID of product

   **Success Status Code:** 204

### Images

### **Create a new image**

→ app.post(‘/api/product/:productid/images/')
  Success Status Code: 201

  **Path Parameters**
   - *productid* : Unique ID of product

  **Request Body:** Expects JSON with the following keys
  ```
   {
      "image_url": "String"
      "height": "Integer",
      "width": "Integer",
   }
  ```

### **Get an image for product**
→ app.get('/api/product/:productid/images/:imageid')

**Path Parameters**
   - *productid* : Unique ID of product
   - *imageid* : Image ID for given product

**Success Status Code:** 200

**Returns:** JSON with the following keys
```
{
   "image_id": "Integer",
   "image_url": "String",
   "views": "Integer",
   "height": "Integer",
   "width": "Integer",
   "date_added": "Date"
}
```

### **Change an image for a certain product**
  → app.put(‘/api/product/:productid/images/:imageid’)

  **Path Parameters**
   - *productid* : Unique ID of product
   - *imageid* : Image ID for given product

   **Success Status Code :** 202

   **Request Body:** Expects JSON with the following keys
   ```
   {
      "image_url": "String",
      "height": "Integer",
      "width": "Integer"
   }
   ```

### **Delete an image from a product**
→ app.delete(‘/api/product/:productid/images/:imageid’)

  **Path Parameters**
  - productid : Unique ID of product
  - imageid : Image ID for given product

  **Success Status Code:** 204
