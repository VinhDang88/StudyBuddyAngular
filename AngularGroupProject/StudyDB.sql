--CREATE TABLE Study (
--	Id INT PRIMARY KEY IDENTITY(1,1),
--	Category NVARCHAR(255),
--	Question NVARCHAR(255),
--	Answer NVARCHAR(255)
--);

--INSERT INTO Study (Category, Question, Answer)
--VALUES ('Programming', 'Test1', 'Answer1'),
--('Programming', 'Test2', 'Answer2'),
--('Programming', 'Test3', 'Answer3'),
--('Programming', 'Test4', 'Answer4')

SELECT * FROM Study;

--CREATE TABLE Favorite (
--	Id INT PRIMARY KEY IDENTITY(1,1),
--	Study_Id INT FOREIGN KEY REFERENCES Study(Id),
--  UserId INT
--);

SELECT * FROM Favorite;

--ALTER TABLE Favorite
--ADD UserId INT;

--UPDATE Favorite
--SET UserId = 1;

