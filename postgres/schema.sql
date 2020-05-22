DROP TABLE IF EXISTS products;

CREATE TABLE products (
   product_id SERIAL PRIMARY KEY,
   product_name VARCHAR(100) NOT NULL,
   number_of_images INTEGER NOT NULL,
   views INTEGER NOT NULL,
   date_added INTEGER NOT NULL
);

DROP TABLE IF EXISTS images;

CREATE TABLE images (
   image_id SERIAL PRIMARY KEY,
   image_url VARCHAR(300) NOT NULL,
   views INTEGER NOT NULL,
   height INTEGER NOT NULL,
   width INTEGER NOT NULL,
   quality CHAR NOT NULL,
   date_added INTEGER NOT NULL
);

DROP TABLE IF EXISTS product_images;

CREATE TABLE product_images (
   reference_id SERIAL PRIMARY KEY,
   product_id INTEGER REFERENCES products(product_id),
   image_id INTEGER REFERENCES images(image_id),
   image_number INTEGER NOT NULL
);
