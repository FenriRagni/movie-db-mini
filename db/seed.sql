USE movies_db;

INSERT INTO movies (name)
VALUES 
("The Fast and the Furious"), --1
("The Matrix"), --2
("Big Mama's House"), --3
("The Trap"), --4
("Escape Room"), --5
("Barbie"), --6
("Lord of the Rings: The Fellowship of the Ring"), --7
("Harry Potter and the Sorcerer's Stone"), --8
("Scott Pilgrim vs The World"), --9
("Your Name"), --10
("My Neighbor Totoro"), --11
("Kiki's Delivery Service"), --12
("Akira"), --13
("Ghost in the Shell"), --14
("Die Hard"); --15

INSERT INTO reviews (movie_id, review)
VALUES (1, `Classic`),
(1, `The sequels will never live up to this!`),
(1, `That final race was INSANE!!!`),
(2, `Mind. Blown.`),
(2, `Are WE living in The Matrix?`),
(4, `Shiiiit, like people ain't gonna realize they high on some chicken`),
(6, `Did not expect to cry during this movie`),
(6, `Mojo Dojo Casa House!!!`),
(6, `Hi Barbie! Hi Barbie!`),
(6, `I AM KENOUGH!!!`),
(5, `These people are too stupid, I'd make it out of those rooms with no problem.`),
(15, `A classic Christmas movie for the family to watch :)`),
(10, `Makoto Shinkai does it again. There hasn't been one of his films that I have not openly wept`),
(12, `The best Miyazaki film.`),
(14, `Please don't watch the live action version of this. This is incredible`),
(7, `What a great start to the franchise. I just hope it can hold up!`),
(8, `Where's MY Hogwarts Letter`),
(11, `A classic Miyazaki movie, great watch with your kids. Just watch out for them playing the tall grass after this`),
(13, `Must watch film`);