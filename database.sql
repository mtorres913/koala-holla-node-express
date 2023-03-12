CREATE TABLE "koalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(128) NOT NULL,
	"age" VARCHAR(3) NOT NULL,
	"gender"  VARCHAR(3) NOT NULL,
	"transfer?" VARCHAR(1) NOT NULL,
	"notes" VARCHAR(128)
	);
INSERT INTO "koalas" ("name", "age", "gender", "transfer?", "notes")
VALUES ('Scotty' , '4', 'M', 'Y', 'Born in Guatemala'),
('Jean' , '5', 'F', 'Y', 'Allergic to lots of lava'),
('Ororo' , '7', 'F', 'N', 'Loves listening to Paula (Abdul)'),
('Logan' , '15', 'M', 'N', 'Loves the sauna'),
('Charlie' , '9', 'M', 'Y', 'Favorite band is Nirvana'),
('Betsy' , '4', 'F', 'Y', 'Has a pet iguana');