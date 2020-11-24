INSERT INTO tb_user (name, email, password) VALUES ('Alex Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Action');
INSERT INTO tb_genre (name) VALUES ('Fiction');
INSERT INTO tb_genre (name) VALUES ('Romance');

INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Dracula', 'O maior', 1990, 'http://edsd', 'E coisa e tal e domina isto e aquilo', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Intersteller', 'Os planetas', 2018, 'http://edsddd', 'ui planetas', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Amor de Perdição', 'Love is in the air', 1980, 'http://edddsd', 'O amor e tal', 3);

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('bom dimais', 1, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('incriveu', 2, 2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('ulala', 3, 2);