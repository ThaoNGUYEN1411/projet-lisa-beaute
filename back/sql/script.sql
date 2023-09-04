DROP DATABASE IF EXISTS lisabeaute;

CREATE DATABASE lisabeaute;

CREATE TABLE lisabeaute.brand(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE lisabeaute.category(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE lisabeaute.product(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    price DECIMAL(6.2) NOT NULL,
    description TEXT NOT NULL,
    usage_tips TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    image VARCHAR(50) NOT NULL,
    brand_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY(brand_id) REFERENCES lisabeaute.brand(id)
);

CREATE TABLE lisabeaute.product_category(
    product_id SMALLINT UNSIGNED NOT NULL,
    category_id TINYINT UNSIGNED NOT NULL,
    FOREIGN KEY(product_id) REFERENCES lisabeaute.product(id),
    FOREIGN KEY(category_id) REFERENCES lisabeaute.category(id),
    PRIMARY KEY(product_id, category_id)
);

CREATE TABLE lisabeaute.user(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE lisabeaute.user_product(
    user_id SMALLINT UNSIGNED NOT NULL,
    product_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY(user_id) REFERENCES lisabeaute.user(id),
    FOREIGN KEY(product_id) REFERENCES lisabeaute.product(id),
    PRIMARY KEY(user_id, product_id)
);

CREATE TABLE lisabeaute.note(
    user_id SMALLINT UNSIGNED NOT NULL,
    product_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY(user_id) REFERENCES lisabeaute.user(id),
    FOREIGN KEY(product_id) REFERENCES lisabeaute.product(id),
    PRIMARY KEY(user_id, product_id),
    value TINYINT UNSIGNED NOT NULL
);

CREATE TABLE lisabeaute.comment(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    contenu TEXT NOT NULL,
    time DATETIME NOT NULL,
    user_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY(user_id) REFERENCES lisabeaute.user(id),
    product_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY(product_id) REFERENCES lisabeaute.product(id)
);

CREATE TABLE lisabeaute.article(
    id TINYINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    image VARCHAR(50) NOT NULL,
    contenu TEXT NOT NULL
);

CREATE TABLE lisabeaute.message(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    sujet VARCHAR(150) NOT NULL,
    contenu TEXT NOT NULL
);

-- Insérer des données
INSERT INTO lisabeaute.category
VALUES 
    (NULL,  "Parfum"),
    (NULL,  "Maquillage"),
    (NULL,  "Soin"),
    (NULL,  "Nouveauté"),
    (NULL,  "Bio")
    ;

INSERT INTO lisabeaute.brand
VALUES 
    (NULL,  "Chanel"),
    (NULL,  "Dior"),
    (NULL,  "Lancome"),
    (NULL,  "The ordinary"),
    (NULL,  "Estée Lauder"),
    (NULL,  "Guerlain"),
    (NULL,  "Ganier"),
    (NULL,  "Bioderma")
    ;

-- changer name, prix, img, category

INSERT INTO lisabeaute.product
VALUES 
    (NULL, "The Ordinary peeling L'AHA 30% + BHA 2% Solution de peeling", 12.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p1.webp", 4 ),
    (NULL, "Masque à l'Acide Salicylique 2% ", 11.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p2.webp", 4 ), 
    (NULL, "Acide mandélique 10% + Ha Solution ", 9.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p3.webp", 4 ),
    (NULL, "Facteurs Naturels d’Hydratation + HA Crème Hydratante ", 19.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p4.webp", 4 ), 
    (NULL, "Poudre 100 % acide L-ascorbique", 14, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p5.webp", 4 ), 
    (NULL, "Masque à l'Acide Salicylique 2%", 24.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p6.webp", 4 ), 
     (NULL, "Solution à la Caféine 5% + EGCG Sérum Contour des Yeux", 10.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p7.webp", 4 ), 
    (NULL, "Mandelic Acid 10 % + HA", 8.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p8.webp", 4 ), 
     (NULL, "Ethylated Ascorbic Acid 15% Solution", 8.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p9.webp", 4 ), 
      (NULL, "Niacinamide,The Ordinary Niacinamide 10% + Zinc 1%", 22.90, "Le Masque à l'Acide Salicylique 2% est formulé pour cibler le teint terne et les irrégularités de texture. La formule est composée d'acide salicylique concentré à 2% mais également de charbon et d'argiles afin de lisser la peau et révéler l'éclat et la fraîcheur du teint.", "Utilisez une à deux fois par semaine sur une peau parfaitement propre et sèche. Ne pas utiliser sur une peau mouillée. Appliquez uniformément du bout des doigts sur le visage en évitant le contour des yeux.", "AQUA (WATER), KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "the-ordinary-p10.webp", 4 )
      ;