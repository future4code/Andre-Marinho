# Aula 46

### Exercício 1
a) A query deleta a coluna salary
b) Troca o nome da key de "gender" para "sex"
c) Muda o tamanho das entradas aceitas na coluna "gender"
d) Query usada:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```
## Exercício 2
a) Query:
```
UPDATE Actor
SET name = "FernandAH Montenegro", birth_date = "1982-03-26"
WHERE id = "003";
```
b) Query:
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```
c) Query:
```
UPDATE Actor
SET name = "Moacyr Franco",
birth_date = "1960-05-05",
salary = 80000,
gender = "male" 
WHERE id = "005";
```
d) Query
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "100";
```
Mensagem: 16:43:52	UPDATE Actor SET name = "JULIANA PAES" WHERE id = "100"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.203 sec

A query foi lida, o MySQL procurou a coluna de id = "100" mas não o encontrou, logo, não fez nenhuma mudança

## Exercício 3
a) Query: 
```
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
```

b) Query: 
```
DELETE FROM Actor 
WHERE gender = "male" AND
salary > 1000000;
```

## Exercício 4
a) Query:
```
SELECT MAX(salary) FROM Actor
```

b) Query:
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) Query:
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) Query:
```
SELECT SUM(salary) FROM Actor;
```

## Exercício 5
a) A query devolve o número de atores de cada gênero (male e female)
b) Query:
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```
c) Query:
```
SELECT * FROM Actor
ORDER BY salary;
```
d) Query: 
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
e) Query:
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

## Exercício 6
a) Query: 
```
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b) Query:
```
 ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c) Queries: 
```
 UPDATE Movie
 SET playing_limit_date = "2021-05-25"
 WHERE id = "001";
 
 UPDATE Movie
 SET playing_limit_date = "2018-05-25"
 WHERE id = "002";
```
d) Queries:
```
DELETE FROM Movie WHERE id="003";
```
17:48:06	ALTER TABLE Movie CHANGE rating rating FLOAT	0 row(s) affected Records: 0  Duplicates: 0  Warnings: 0	0.219 sec

A query foi lida, o MySQL procurou a coluna de id = "003" mas não o encontrou, logo, não fez nenhuma mudança

## Exercício 7
a) 
```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```
b) 
```
SELECT AVG(rating) FROM Movie;
```
c)
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```
d)
```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```
e)
```
SELECT MAX(rating) FROM Movie;
```
f)
```
SELECT MIN(rating) FROM Movie;
```

## Exercício 8
a)
```
SELECT * FROM Movie ORDER BY title;
``` 
b)
```
SELECT * FROM Movie ORDER BY title LIMIT 5;
```
c)
d)
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```
