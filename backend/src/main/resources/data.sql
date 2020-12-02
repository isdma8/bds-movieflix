INSERT INTO tb_user (name, email, password) VALUES ('Bob Brown', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Green', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Nelio Alves', 'nelio@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Daniel Almeida', 'daniel@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 2);

INSERT INTO tb_genre (name) VALUES ('Action');
INSERT INTO tb_genre (name) VALUES ('Fiction');
INSERT INTO tb_genre (name) VALUES ('Romance');
INSERT INTO tb_genre (name) VALUES ('Fantasy');
INSERT INTO tb_genre (name) VALUES ('Drama');
INSERT INTO tb_genre (name) VALUES ('Thriller');

INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('A Guerra dos Tronos', 'Winter Is Coming', 2011, 'https://image.tmdb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg', 'Numa terra onde o verão abrange décadas e o inverno dura uma vida, todos os desafios são esperados. Várias famílias estão empenhadas numa aventura mortal para controlar os Sete Reinos de Westeros… Que comece A Guerra dos Tronos!', 4);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('After - Depois da Verdade', 'Can love overcome the past?', 2020, 'https://image.tmdb.org/t/p/w220_and_h330_face/snLPWn7c9V4KCgKqv0VneOzK7O5.jpg', 'Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.', 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Era uma vez uma menina. . .', 'There once was a little girl...', 2020, 'https://image.tmdb.org/t/p/w220_and_h330_face/xqbQtMffXwa3oprse4jiHBMBvdW.jpg', 'Becky é uma adolescente que vai passar o fim-de-semana a uma casa de férias num lago com o pai, com quem tem uma relação pouco saudável desde que a mãe morreu, a nova namorada dele e o filho dela.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Battlefield 2025', 'Fighting for our survival.', 2020, 'https://image.tmdb.org/t/p/w220_and_h330_face/w6e0XZreiyW4mGlLRHEG8ipff7b.jpg', 'Weekend campers, an escaped convict, young lovers and a police officer experience a night of terror when a hostile visitor from another world descends on a small Arizona town.', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Joker', 'Põe uma cara feliz!', 2020, 'https://image.tmdb.org/t/p/w220_and_h330_face/xLxgVxFWvb9hhUyCDDXxRPPnFck.jpg', 'Arthur Fleck é um homem que enfrenta a crueldade e o desprezo da sociedade, juntamente com a indiferença de um sistema que lhe permite passar da vulnerabilidade para a depravação.', 5);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('One Night in Bangkok', 'Six Hours. Five Hits. Who Will Survive?', 2020, 'https://image.tmdb.org/t/p/w220_and_h330_face/95KNDpdOgvIfIKzLgQbVZSZgba0.jpg', 'O melhor assassino do ramo faz a sua 500ª morte e decide-se reformar. Em vez disso, ele se vê envolvido numa luta feroz de inteligência com o inimigo perfeito.', 6);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Scooby!', 'Mystery loves company.', 2020, 'https://image.tmdb.org/t/p/w220_and_h330_face/p7RjlzDLV4KksrWtyve1Rg40nLv.jpg', 'O primeiro filme completo de animação chega aos grandes ecrãs com histórias nunca contadas das origens de Scooby-Doo e um dos maiores mistérios da carreira de Mystery Inc.. ', 4);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('John Wick 3: Implacável', 'The Grace Period Is Over', 2019, 'https://image.tmdb.org/t/p/w220_and_h330_face/mOoERCQCGrgFHOrco7wLy6CAYfp.jpg', 'John Wick está em maus lençóis. Existe uma recompensa de 14 milhões de dólares pela sua captura, por alegadamente ter assassinado um membro da Alta Cúpula.', 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('A Vida Secreta dos Nossos Bichos 2', 'Eles ainda guardam segredos.', 2019, 'https://image.tmdb.org/t/p/w220_and_h330_face/sPEAwV5u6cwqNMBV6MD4CWFAclu.jpg', 'Max não vê grande apelo na presença de bebés humanos em casa. Porém, quando a sua dona tem um, e após algum tempo de adaptação, o cão não resiste e apega-se à criança, tornando-se receoso e super-protector.', 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Logan', 'O fim de uma lenda', 2017, 'https://image.tmdb.org/t/p/w220_and_h330_face/f0CtZbae9cXj8bkWdCHzUHx5lsR.jpg', 'No futuro, um exausto Logan, escondido na fronteira Mexicana, cuida do adoentado Professor X', 3);

