-- selectionner tous les parfums
-- SELECT product.name, category.name AS category_name
-- FROM lisabeaute.product
-- JOIN lisabeaute.category
-- JOIN lisabeaute.product_category
-- ON product_category.category_id = category.id
-- AND product_category.product_id = product.id 
-- WHERE category.name = "parfum";

-- selectionner tous les produits de la même marque, par exemple the ordinary
-- SELECT product.*, brand.name
-- FROM lisabeaute.product
-- JOIN lisabeaute.brand
-- ON product.brand_id = brand.id 
-- WHERE brand.name ="the ordinary"
-- ;

-- 1 selectionner les produits préféré d'un utilisateur
-- SELECT user.firstName, user.lastName, 
-- GROUP_CONCAT(product.name) AS favorite_products
-- FROM lisabeaute.user
-- JOIN lisabeaute.product
-- JOIN lisabeaute.user_product
-- ON user_product.product_id = product.id
-- AND user_product.user_id = user.id 
-- GROUP BY 
-- user.firstName, user.lastName
-- ;

-- Sélectionner les commentaires qu'un utilisateur a laissés sur un produit.
-- SELECT product.name, user.lastName, comment.content, comment.time
-- FROM lisabeaute.product
-- JOIN lisabeaute.user
-- JOIN lisabeaute.comment
-- ON comment.product_id = product.id
-- AND comment.user_id = user.id
-- WHERE product.id = 21
-- ;

-- 2. selectionner le note moyen sur un produit 
-- SELECT AVG(note.value) AS  average_notes
-- FROM lisabeaute.note
-- WHERE note.product_id = 9;
-- ????????

-- 3 Sélectionner les produits qui contiennent le texte de recherche, puis affichez 8 résultats
-- SELECT product.name, brand.name
-- FROM lisabeaute.product
-- JOIN lisabeaute.brand
-- ON product.brand_id = brand.id 
-- WHERE product.name 
-- LIKE "%cha%"
-- OR brand.name
-- LIKE "%cha%"
-- LIMIT 8;


-- selectionner tous les produits avec leurs marques
-- SELECT product.name, brand.name
-- FROM lisabeaute.product
-- JOIN lisabeaute.brand
-- ON product.brand_id = brand.id 
-- ;

-- selectionner un produit
-- SELECT product.*
-- FROM lisabeaute.product
-- WHERE id = 1;


-- selectionner tous les produits avec leurs marques et leurs catégories
-- SELECT product.name, brand.name AS brand_name, category.name AS category_name
-- FROM lisabeaute.product
-- JOIN lisabeaute.brand
-- ON product.brand_id = brand.id 
-- JOIN lisabeaute.category
-- JOIN lisabeaute.product_category
-- ON product_category.category_id = category.id
-- AND product_category.product_id = product.id 
-- WHERE product.id = 2
-- ;

--   SELECT product.name, brand.name AS brand_name, category.name AS category_name
--     FROM lisabeaute.product
--     JOIN lisabeaute.brand
--     ON product.brand_id = brand.id
-- 	JOIN lisabeaute.category
--     JOIN lisabeaute.product_category
--     ON product_category.category_id = category.id
--     AND product_category.product_id = product.id
--     WHERE brand.name = "Madara"
--     ;

-- Sélectionner les produits trier selon le prix croissant ou  décroissant
SELECT product.name, product.price,
		brand.name AS brand_name
	FROM lisabeaute.product
	JOIN lisabeaute.brand
	ON product.brand_id = brand.id 
    ORDER BY product.price DESC;
    -- ASC 