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
   - productid : Unique ID of product

  **Request Body:** Expects JSON with the following keys
  ```
   {
      "image": "String"
   }
  ```


**Get all images for product id**
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

### **Change an image for a certain product**
  → app.put(‘/api/images/:productid/:imageid’)

  **Path Parameters**
   - *productid* : Unique ID of product
   - *imageid* : Image ID for given product

   **Success Status Code :** 202

   **Request Body:** Expects JSON with the following keys
   ```
   {
      "image": "String"
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




