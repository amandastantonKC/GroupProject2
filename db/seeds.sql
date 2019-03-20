USE Jello_db;
INSERT INTO todos (task)
VALUES ("Sleep");

INSERT INTO todos (task)
VALUES ("Drink Beer");

INSERT INTO todos (task)
VALUES ("Mail stuff");

INSERT INTO todos (task, status)
VALUES ("Feed the dog", 2);

INSERT INTO todos (task, status)
VALUES ("Trim the trees", 3);

select * from todos;