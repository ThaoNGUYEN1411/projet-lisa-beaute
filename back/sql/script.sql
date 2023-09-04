DROP DATABASE IF EXISTS lisabeaute;

CREATE DATABASE lisabeaute;

CREATE TABLE lisabeaute.brand(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE lisabeaute.category(
    id TINYINT(2) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE lisabeaute.product(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    price DECIMAL(5.2) NOT NULL,
    description TEXT NOT NULL,
    usage_tips TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    image VARCHAR(50) NOT NULL,
    brand_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY(brand_id) REFERENCES lisabeaute.brand(id)
);

CREATE TABLE lisabeaute.product_category(
    product_id SMALLINT UNSIGNED NOT NULL,
    category_id TINYINT(2) UNSIGNED NOT NULL,
    FOREIGN KEY(product_id) REFERENCES lisabeaute.product(id),
    FOREIGN KEY(category_id) REFERENCES lisabeaute.category(id),
    PRIMARY KEY(product_id, category_id)
);

CREATE TABLE lisabeaute.user(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
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
    value TINYINT(1) UNSIGNED NOT NULL
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
    email VARCHAR(50) NOT NULL,
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

INSERT INTO lisabeaute.product
VALUES
    (NULL, "50ml
    La Vie est Belle Eau de Parfum Rechargeable", 70, "La Vie Est Belle invite chaque femme à saisir le bonheur, en transformant chaque instant en un moment unique.
    Premier Iris Gourmand par Lancôme, l’eau de parfum La Vie Est Belle est une fragrance au sillage intemporel composé des plus belles matières", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p1.webp", 3),
    (NULL, "Rénergie H.P.N. 300-Peptide Crème Anti-Âge Haute-Performance", 90, "50ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau." , "Prélevez une petite dose de formule à l’aide de la spatule. Réchauffez ensuite la matière entre vos doigts. Appliquez sur votre visage en tapotant et estompez.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p2.webp", 3),
    (NULL, "Priming Serum Base Maquillage Sublimatrice Lissante &Hydratante 24h", 52, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p3.webp", 3),
    (NULL, "Priming Serum Base Maquillage Sublimatrice Lissante &Hydratante 24h", 62, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p4.webp", 3),
    (NULL, "Priming Serum Base", 62, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p5.webp", 3),
    (NULL, "Rouge à Lèvres Satiné – Hydratation & Confort ", 32, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p6.webp", 3),
    (NULL, "La Nuit Trésor - Fleur de Nuit", 62, "50ML
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p7.webp", 3),
    (NULL, "Idôle Aura Eau de Parfum", 77.9, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-8.webp", 3),
    (NULL, "Advanced Génifique Light Pearl Sérum Anti-Âge Yeux & Cils", 73, "15ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-8.webp", 3),
    (NULL, "Advanced Génifique Sérum Anti-Âge Visage - Activateur d'Éclat", 70, "30ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-8.webp", 3)
    ;