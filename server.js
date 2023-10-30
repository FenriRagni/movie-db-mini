const express = require('express');
//const fs = require('fs');
const movie_db = require('mysql2');
const db = movie_db.createConnection(
    {
        host: "127.0.0.1", 
        user: "root",
        password: "1350Southh90!",
        database: "movies_db"
    }
)

const PORT = 3001;
const app = express()

app.use(express.json());

//app.use(express.urlencoded({ extended: true}));
//app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
     console.info(`${req.method} request received to get movies`);  
    db.query('SELECT movie_name FROM movies', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedMovies = (data);  
        res.status(200).json(parsedMovies);
      }
    });
  });
  
  app.get('/api/movies-reviews', (req, res) => {
    console.info(`${req.method} request received to get movies`);  
   db.query('SELECT movie_name, reviews.review FROM reviews INNER JOIN movies ON movies.id = reviews.movie_id', 'utf8', (err, data) => {
     if (err) {
       console.error(err);
     } else {
       const parsedReviews = (data);  
       res.status(200).json(parsedReviews);
     }
   });
 });

 app.post('/api/add-movies', (req, res) => {
    console.info(`${req.method} request received to add a movie`);
    const { movies } = req.body; 
    console.log(movies) 
    if (movies) {  
      db.query('INSERT INTO movies(movie_name) VALUES(?)', movies, (err, data) => {
        if (err) {
          console.error(err);
        } else {
        res.status(201).json('Successfully added movie')
        }
      })}});
  
 app.put('api/review/:id', (req,res) => {
    console.info(`${req.method} request received to add a movie`);
 })
 
  app.delete('/api/movie/:id', (req, res) => {
    const newDb = db.filter((movie) =>
        movie.id !== req.params.id)

    fs.writeFileSync('./movie.json', JSON.stringify(newDb))

    readFile.json(newDb)
})



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}` ));
