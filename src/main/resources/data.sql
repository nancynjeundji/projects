
INSERT INTO categorie VALUES (1,'Livres');
INSERT INTO categorie VALUES (2,'Musique');
INSERT INTO categorie VALUES (3,'Jeux');


INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo) VALUES(null,'Bushcraft', 34.94 , 'Guide de survie en foret', 1, false, 'livre.png');
INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo)  VALUES(2,'Mon cher velo', 24.94 , 'Comment entretenir et reparer son velo', 1, false, 'livre.png');
INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo)  VALUES(3,'Routard Montreal', 14.94 , 'Guide de visite de la ville de Montreal', 1, false, 'livre.png');

INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo)  VALUES(4,'Ed Sheeran', 14.99 , 'n6 collaoration', 2, false, 'musique.png');
INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo)  VALUES(5,'Black Keys', 14.99 , 'some rock', 2, false, 'musique.png');
INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo)  VALUES(6,'BO Film', 34.94 , 'Yesterday', 2, false, 'musique.png');

INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo)  VALUES(7,'Les choses etranges', 29.99 , 'jeu de table', 3, false, 'jeux.png');
INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo)  VALUES(8,'Labirynth', 14.99 , 'un jeu de table', 3, false, 'jeux.png');
INSERT INTO produit (id, nom, prix, detail, categorie_id, selected, photo)  VALUES(9,'GoT', 34.94 , 'un jeu de casse-tete', 3, false, 'jeux.png');
