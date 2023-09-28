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
    name VARCHAR(150) NOT NULL UNIQUE,
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

CREATE TABLE lisabeaute.role(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE lisabeaute.user(
    id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    role_id SMALLINT UNSIGNED NOT NULL,
    FOREIGN KEY(role_id) REFERENCES lisabeaute.role(id)
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
    content TEXT NOT NULL,
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
    sujet VARCHAR(150) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    messageContent TEXT NOT NULL
);

-- Insérer des données
INSERT INTO lisabeaute.category
VALUES 
    (NULL,  "Parfum"),
    (NULL,  "Maquillage"),
    (NULL,  "Soin"),
    (NULL,  "Nouveauté"),
    (NULL,  "Bio"),
    (NULL,  "CatTest")
    ;

INSERT INTO lisabeaute.brand
VALUES 
    (NULL,  "Chanel"),
    (NULL,  "Dior"),
    (NULL,  "Lancôme"),
    (NULL,  "The ordinary"),
    (NULL,  "Estée Lauder"),
    (NULL,  "Guerlain"),
    (NULL,  "Madara"),
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
    (NULL, "La Vie est Belle Eau de Parfum Rechargeable", 70, "50ml La Vie Est Belle invite chaque femme à saisir le bonheur, en transformant chaque instant en un moment unique.
    Premier Iris Gourmand par Lancôme, l’eau de parfum La Vie Est Belle est une fragrance au sillage intemporel composé des plus belles matières", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p1.webp", 3),
    (NULL, "Rénergie H.P.N. 300-Peptide Crème Anti-Âge Haute-Performance", 90, "50ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau." , "Prélevez une petite dose de formule à l’aide de la spatule. Réchauffez ensuite la matière entre vos doigts. Appliquez sur votre visage en tapotant et estompez.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p2.webp", 3),
    (NULL, "Priming Serum Base Maquillage Sublimatrice Lissante &Hydratante 24h", 52, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p3.webp", 3),
    (NULL, "Base Maquillage", 62, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p4.webp", 3),
    (NULL, "Priming Serum Base", 62, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p5.webp", 3),
    (NULL, "Rouge à Lèvres Satiné – Hydratation & Confort ", 32, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p6.webp", 3),
    (NULL, "La Nuit Trésor - Fleur de Nuit", 62, "50ML
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p7.webp", 3),
    (NULL, "Idôle Aura Eau de Parfum", 77.9, "Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p8.webp", 3),
    (NULL, "Advanced Génifique Light Pearl Sérum Anti-Âge Yeux & Cils", 73, "15ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p9.webp", 3),
    (NULL, "Advanced Génifique Sérum Anti-Âge Visage - Activateur d'Éclat", 70, "30ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "lancome-p10.webp", 3)
    ;
-- produit de Chanel

INSERT INTO lisabeaute.product
VALUES
    (NULL, "BLEU DE CHANEL EAU DE PARFUM VAPORISATEUR", 102, "50ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "chanel-p1.webp", 1),
    (NULL, "COCO MADEMOISELLE EAU DE PARFUM VAPORISATEUR", 115, "50ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "chanel-p2.webp", 1),
    (NULL, "MASCARA MULTI-DIMENSIONNEL", 48.5, "
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "chanel-p3.webp", 1),
    (NULL, "CHANCE EAU DE PARFUM VAPORISATEUR", 135, "50ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "chanel-p4.webp", 1),
    (NULL, "HYDRA BEAUTY CRÈME HYDRATATION PROTECTION ÉCLAT", 84.5 , "50g
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "chanel-p5.webp", 1),
    (NULL, "VITALUMIÈRE AQUA TEINT PARFAIT EFFET SECONDE PEAU SPF 15", 60, "30ml
    Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme.Sublimez et prenez soin de votre peau avec la base Priming Serum, inspirée du soin Lancôme. Composée d’acide hyaluronique hydratant et de niacinamide au pouvoir lissant, cette base solide se transforme en baume à l’application sur la peau.", "Pour magnifier votre sillage, vaporisez à environ 20 cm de votre peau et privilégiez les points de pulsation - particulièrement chauds.", "KAOLIN, SQUALANE, GLYCERIN, DIMETHYL ISOSORBIDE, SILICA CETYL SILYLATE, SALICYLIC ACID, SODIUM POLYACRYLATE, PENTYLENE GLYCOL.", "chanel-p6.webp", 1)
    ;

INSERT INTO lisabeaute.product
VALUES
    (NULL, "CICABIO SPF 50+ Crème Soin réparateur",34, "CICABIO SPF 50+ Crème 30ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p1.webp", 8  ),
    (NULL, "CRÉALINE Yeux Soin contour yeux", 16, "CRÉALINE Yeux Soin 15ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p2.webp", 8  ),
    (NULL, "CRÉALINE H2O, eau micellaire démaquillante visage et yeux ",14, "CRÉALINE H2O 500ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p3.webp", 8),
    (NULL, "HYDRABIO Sérum Soin hydratant visagex ",23.9, "HYDRABIO Sérum 40ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p4.webp", 8),
    (NULL, "SEBIUM NIGHT PEEL Soin anti-acnée, peau grasse, imperfections",18, "SEBIUM NIGHT PEEL 40ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p5.webp", 8  ),
    (NULL, "SEBIUM Sensitive Soin de jour peau acnéique",18, "SEBIUM Sensitive 30 ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p6.webp", 8  ),
     (NULL, "SÉBIUM H2O Eau micellaire visage peaux grasses à tendence acnéique",15, "SÉBIUM H2O 500ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p7.webp", 8  ),
     (NULL, "SÉBIUM Mat Control 30ml",18, "SÉBIUM Mat Control 30ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p8.webp", 8  ),
     (NULL, "ATODERM Mains & ongles 50 ml",5, "ATODERM Crème mains & ongles - 50 ml
    Le soin 2 en 1 qui répare et protège du soleil la peau abimée pour limiter les marques cicatricielles.
    Cicabio SPF 50+ favorise la réparation cutanée des peaux abîmées exposées au soleil en agissant sur chaque étape du processus biologique de la reconstruction épidermique et en limitant le risque d'hyperpigmentation post-cicatricielle (tache brune).", "Utilisez Cicabio SPF 50+ sur la zone concernée, appliquez jusqu'à une réparation complète.
    Si il y a exposition au soleil, renouvelez régulièrement l'application en évitant le contour des yeux. Si les irritations persistent, nous vous recommandons de demander conseil à un professionnel de la santé.", "AQUA/WATER/EAU, GLYCERIN, CYCLOPENTASILOXANE, DIMETHICONE, OCTOCRYLENE, TITANIUM DIOXIDE (CI 77891), HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, TITANIUM DIOXIDE [NANO], DIPROPYLENE GLYCOL,", "bioderma-p9.webp", 8  )
    ;

INSERT INTO lisabeaute.product
VALUES
    (   NULL, "SKINONYM Fond de teint semi-mat aux peptides", 36.5, "35 TRUE BEIGE 30ml

    Certifié naturel, fond de teint infusé de peptides, rendu invisible semi-mat

    Développé par des experts en soins de la peau, ce fond de teint minéral offre une couvrance légère et imperceptible. Disponible en 6 teintes semi-mates, il s'adapte à la texture unique de votre peau et garantit un teint frais, lisse et unifié durant de longues heures.", "Préparez votre peau avec votre soin hydratant et votre protection solaire MÁDARA préférés. Appliquez votre fond de teint sur l'ensemble du visage à l'aide d'un pinceau, d'un blender ou avec les doigts. Répétez l'opération pour plus de couvrance.", "ALOE BARBADENSIS (ALOE) LEAF JUICE*; DICAPRYLYL CARBONATE; ISOAMYL LAURATE; POLYGLYCERYL-3 RICINOLEATE; BUTYLENE GLYCOL; SORBITAN OLIVATE; KAOLIN; GLYCERIN; ", "madara-1.webp", 7 ),
    (   NULL, "PEEL Intense
    Sèrum Effet Peeling", 36.5, "30ml

    Certifié naturel, fond de teint infusé de peptides, rendu invisible semi-mat

    Développé par des experts en soins de la peau, ce fond de teint minéral offre une couvrance légère et imperceptible. Disponible en 6 teintes semi-mates, il s'adapte à la texture unique de votre peau et garantit un teint frais, lisse et unifié durant de longues heures.", "Préparez votre peau avec votre soin hydratant et votre protection solaire MÁDARA préférés. Appliquez votre fond de teint sur l'ensemble du visage à l'aide d'un pinceau, d'un blender ou avec les doigts. Répétez l'opération pour plus de couvrance.", "ALOE BARBADENSIS (ALOE) LEAF JUICE*; DICAPRYLYL CARBONATE; ISOAMYL LAURATE; POLYGLYCERYL-3 RICINOLEATE; BUTYLENE GLYCOL; SORBITAN OLIVATE; KAOLIN; GLYCERIN; ", "madara-2.webp", 7 ),
    (   NULL, "Time Miracle Hydra Firm Gel Concentré D'Acide Hyaluronique", 36.5, "35 TRUE BEIGE 30ml

    Certifié naturel, fond de teint infusé de peptides, rendu invisible semi-mat

    Développé par des experts en soins de la peau, ce fond de teint minéral offre une couvrance légère et imperceptible. Disponible en 6 teintes semi-mates, il s'adapte à la texture unique de votre peau et garantit un teint frais, lisse et unifié durant de longues heures.", "Préparez votre peau avec votre soin hydratant et votre protection solaire MÁDARA préférés. Appliquez votre fond de teint sur l'ensemble du visage à l'aide d'un pinceau, d'un blender ou avec les doigts. Répétez l'opération pour plus de couvrance.", "ALOE BARBADENSIS (ALOE) LEAF JUICE*; DICAPRYLYL CARBONATE; ISOAMYL LAURATE; POLYGLYCERYL-3 RICINOLEATE; BUTYLENE GLYCOL; SORBITAN OLIVATE; KAOLIN; GLYCERIN; ", "madara-3.webp", 7 ),
    (   NULL, "Citycc Hyaluronic Anti-Pollution CC Cream Spf 15", 36.5, "35 TRUE BEIGE 30ml

    Certifié naturel, fond de teint infusé de peptides, rendu invisible semi-mat

    Développé par des experts en soins de la peau, ce fond de teint minéral offre une couvrance légère et imperceptible. Disponible en 6 teintes semi-mates, il s'adapte à la texture unique de votre peau et garantit un teint frais, lisse et unifié durant de longues heures.", "Préparez votre peau avec votre soin hydratant et votre protection solaire MÁDARA préférés. Appliquez votre fond de teint sur l'ensemble du visage à l'aide d'un pinceau, d'un blender ou avec les doigts. Répétez l'opération pour plus de couvrance.", "ALOE BARBADENSIS (ALOE) LEAF JUICE*; DICAPRYLYL CARBONATE; ISOAMYL LAURATE; POLYGLYCERYL-3 RICINOLEATE; BUTYLENE GLYCOL; SORBITAN OLIVATE; KAOLIN; GLYCERIN; ", "madara-4.webp", 7 ),
    (   NULL, "SKINONYM Fond de teint ", 36.5, "35 TRUE BEIGE 30ml

    Certifié naturel, fond de teint infusé de peptides, rendu invisible semi-mat

    Développé par des experts en soins de la peau, ce fond de teint minéral offre une couvrance légère et imperceptible. Disponible en 6 teintes semi-mates, il s'adapte à la texture unique de votre peau et garantit un teint frais, lisse et unifié durant de longues heures.", "Préparez votre peau avec votre soin hydratant et votre protection solaire MÁDARA préférés. Appliquez votre fond de teint sur l'ensemble du visage à l'aide d'un pinceau, d'un blender ou avec les doigts. Répétez l'opération pour plus de couvrance.", "ALOE BARBADENSIS (ALOE) LEAF JUICE*; DICAPRYLYL CARBONATE; ISOAMYL LAURATE; POLYGLYCERYL-3 RICINOLEATE; BUTYLENE GLYCOL; SORBITAN OLIVATE; KAOLIN; GLYCERIN; ", "madara-5.webp", 7 ),
    (   NULL, "SKINONYM Fond de teint semi-mat", 36.5, "35 TRUE BEIGE 30ml

    Certifié naturel, fond de teint infusé de peptides, rendu invisible semi-mat

    Développé par des experts en soins de la peau, ce fond de teint minéral offre une couvrance légère et imperceptible. Disponible en 6 teintes semi-mates, il s'adapte à la texture unique de votre peau et garantit un teint frais, lisse et unifié durant de longues heures.", "Préparez votre peau avec votre soin hydratant et votre protection solaire MÁDARA préférés. Appliquez votre fond de teint sur l'ensemble du visage à l'aide d'un pinceau, d'un blender ou avec les doigts. Répétez l'opération pour plus de couvrance.", "ALOE BARBADENSIS (ALOE) LEAF JUICE*; DICAPRYLYL CARBONATE; ISOAMYL LAURATE; POLYGLYCERYL-3 RICINOLEATE; BUTYLENE GLYCOL; SORBITAN OLIVATE; KAOLIN; GLYCERIN; ", "madara-6.webp", 7 )
    ;
-- Insérer table de jointure product_category
INSERT INTO lisabeaute.product_category
VALUES
    (1,3), (2,3), (2,4), (3,3), (4,3), (5,3), (6,3), (7,4), (8,3), (9,3),
    (10,3),(11,1),(12,3),(13,2),(14,2),(15,2),(16,2),(17,1),(18,1),(19,3),(20,3),
    (21, 1),(22, 1),(23,2),(24,1),(25,3),(26,2),(27,3),(28,3),(29,3),(30,3),(31,3),(32,3),(33,3),(34,3),(35,3),(36,5),(36,2),(37,5),(37,4),(37,3),(38,5),(39,5), (39,2),(40,5),(40,2),(41,5),(41,2)
    ;

-- Insérer des users
INSERT INTO lisabeaute.role
VALUES
    (NULL, "admin"),
    (NULL, "user")
;
-- CHANGER TABLE USER===============
INSERT INTO lisabeaute.user
VALUES 
    (NULL, "My", "Admin", "admin@admin.com", "$argon2i$v=19$m=16,t=2,p=1$R3VjZE5scGh4OG5Bd3F6cg$FDv6bP5bzcnLUmjw7I0aCw", 1),
    (NULL, "Jean", "Doe", "user@user.com", "$argon2i$v=19$m=16,t=2,p=1$YkR4bEtwSXdsZzk4N0RsNQ$N3U2ml4QF0ZdWnmQ8pyIrg", 2),
    (NULL, "Test", "Test", "test@test.com", "$argon2i$v=19$m=16,t=2,p=1$NkNDOWVLMDBmdkJwUHEydw$F/lE3MN83QwQArixATvwIw", 2)
    ;

-- Insérer table de jointure User_produit pour définir la liste des produits préférés d'un utilisateur
INSERT INTO lisabeaute.user_product
VALUES
    (2,5),
    (2,9),
    (2,19),
    (2,8),
    (2,12)
;

-- Insérer des commentaires d'exemple
INSERT INTO lisabeaute.comment
VALUES
    (NULL, "J'achète régulièrement le parfum, c'est top!", "2023-07-12 10:20:05", 1, 21 ),
    (NULL, "J'adore le sérum à l'huile de noisette. Sa texture est douce et légère ce qui rend la peau plus lumineuse. ", "2023-08-01 13:10:05", 2, 8 ),
    (NULL, "Très bon produit", "2023-07-02 18:20:05", 2, 21 ),
    (NULL, "J ai acheté ce produit pour la 1 ère fois, il est très bien", "2023-09-01 09:20:05", 3, 10 )
;

INSERT INTO lisabeaute.note
VALUES
    (1,5,4),
    (1,9,5),
    (1,19,4),
    (2,8,5),
    (2,1,2),
    (3,21,5),
    (3,4,4),
    (3,9,2)
;

  INSERT INTO lisabeaute.message
    VALUES (NULL, "publicité", "ha", "ha", "ha@gmail.com", "message"
    )
    ;