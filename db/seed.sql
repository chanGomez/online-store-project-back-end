\c onlinestore_dev;

INSERT INTO 
    articles (name, size, gender, category, color, discription, condition, price, url)
 VALUES
('Comme Des Garcons', null , 'unisex', 'bag', 'grey', 
'This is a 2014 CDG bag', 'good condition', 250, 'url'),
('Needles Pants', 'Medium', 'men', 'pants', 'black/green', 
'Some old pants I want to get rid of', 'fair condition', 109,'url'),
('Catharrt Jacket', 'Large', 'women', 'jacket', 'red', 
'Vintage carharrt original color was red but now pink', 'good condition', 220, 'url');

INSERT INTO 
    comments (article_id, commenter, content)
VALUES
('1', 'mr.freeze1990', 'A RARE FIND!'),
('2', 'the1andOnly', 'Really bad condition bro'),
('3', 'notABuyer', 'The pink is the best one out of them all'),
('1', 'haggler', 'Whats the lowest you can go?'),
('2', 'noMoneyHere', 'I would pay no more than 10 for it'),
('3', 'vintage_love', 'I had one but I gave it away'),
('1', 'greenHob', 'You sure it came out in 2014?'),
('2', 'thatGuy', 'Wow, what a bad sell'),
('3', 'dr.whoDoneIt', 'Would you do 200?'),
('1', 'NotHim', 'good bag!');