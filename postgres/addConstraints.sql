ALTER TABLE product_images
  ADD CONSTRAINT product_ref FOREIGN KEY (product_id) REFERENCES products (product_id);

ALTER TABLE product_images
  ADD CONSTRAINT image_ref FOREIGN KEY (image_id) REFERENCES images (image_id);