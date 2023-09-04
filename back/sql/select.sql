-- selectionner tous les parfum
SELECT product.name, category.name
FROM lisabeaute.product
JOIN lisabeaute.category
JOIN lisabeaute.product_category
ON product_category.category_id = category.id
AND product_category.product_id = product.id 
WHERE category.name = "parfum";

