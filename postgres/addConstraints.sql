ALTER TABLE product_images
  ADD CONSTRAINT product_id REFERENCES products (product_id)