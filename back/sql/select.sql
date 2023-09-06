-- selectionner tous les parfums
-- SELECT product.name, category.name
-- FROM lisabeaute.product
-- JOIN lisabeaute.category
-- JOIN lisabeaute.product_category
-- ON product_category.category_id = category.id
-- AND product_category.product_id = product.id 
-- WHERE category.name = "parfum";

-- selectionner tous les produits de la même marque, par exemple Lancôme
-- SELECT product.name, brand.name
-- FROM lisabeaute.product
-- JOIN lisabeaute.brand
-- ON product.brand_id = brand.id 
-- WHERE brand.name ="the ordinary"
-- ;

-- selectionner les produits préféré d'un utilisateur
-- SELECT user.firstname, user.lastname, 
-- GROUP_CONCAT(product.name) AS favorite_products
-- FROM lisabeaute.user
-- JOIN lisabeaute.product
-- JOIN lisabeaute.user_product
-- ON user_product.product_id = product.id
-- AND user_product.user_id = user.id 
-- GROUP BY 
-- user.firstname, user.lastname
-- ;

-- Sélectionner les commentaires qu'un utilisateur a laissés sur un produit.
-- SELECT product.name, user.lastname, comment.content, comment.time
-- FROM lisabeaute.product
-- JOIN lisabeaute.user
-- JOIN lisabeaute.comment
-- ON comment.product_id = product.id
-- AND comment.user_id = user.id
-- WHERE product.id = 21
-- ;

-- selectionner le note moyen sur un produit 
-- SELECT AVG(note.value) AS  average_notes
-- FROM lisabeaute.note
-- WHERE note.product_id = 9
-- ????????

-- Sélectionner les produits qui contiennent le texte de recherche, puis affichez 8 résultats
SELECT product.name, brand.name
FROM lisabeaute.product
JOIN lisabeaute.brand
ON product.brand_id = brand.id 
WHERE product.name 
LIKE "%cha%"
OR brand.name
LIKE "%cha%"
LIMIT 8;


-- SELECT product.name
-- FROM lisabeaute.product
-- WHERE product.name 
-- LIKE "%parfum%"
-- LIMIT 8;

-- SELECT brand.name, 
-- product.name
-- FROM lisabeaute.product
-- JOIN lisabeaute.brand
-- ON product.brand_id = brand.id 
-- ;

-- GROUP_CONCAT(brand.name)
-- WHERE brand.name OR product.name
-- LIKE "%the ordinary%"
-- LIMIT 8;