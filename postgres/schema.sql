DROP TABLE IF EXISTS products;

CREATE TABLE products (
   product_id SERIAL PRIMARY KEY,
   product_name VARCHAR(100) NOT NULL,
   views INTEGER NOT NULL,
   date_added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TABLE IF EXISTS images;

CREATE TABLE images (
   image_id SERIAL PRIMARY KEY,
   image_url VARCHAR(300) NOT NULL,
   views SMALLINT NOT NULL,
   height SMALLINT NOT NULL,
   width SMALLINT NOT NULL,
   date_added TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DROP TABLE IF EXISTS product_images;

CREATE TABLE product_images (
   reference_id SERIAL PRIMARY KEY,
   product_id INTEGER NOT NULL,
   image_id INTEGER NOT NULL
);
