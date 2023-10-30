const express = require('express');
const fs = require('fs');
const movie_db = require('.***');

const PORT = 3001;
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
     console.info(`${req.method} request received to get movies`);  
    fs.readFile('./db/movies.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedMovies = JSON.parse(data);  
        res.status(200).json(parsedMovies);
      }
    });
  });
  
  app.get('/api/movies-reviews', (req, res) => {
    console.info(`${req.method} request received to get movies`);  
   fs.readFile('./db/movies.json', 'utf8', (err, data) => {
     if (err) {
       console.error(err);
     } else {
       const parsedReviews = JSON.parse(data);  
       res.status(200).json(parsedReviews);
     }
   });
 });

 app.post('/api/add-movies', (req, res) => {
    console.info(`${req.method} request received to add a movie`);
    const { movies, reviews } = req.body;
  
    if (movies && reviews) {
      const newEntry = {
        movies,
        reviews,
        movie_id,
        review_id,
      };
  
      fs.readFile('movies.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
        } else {
          const parsedMovies = JSON.parse(data);
          parsedMovies.push(newEntry);
  
          db.push(newEntry)
          fs.writeFile( '.movies.json',
            JSON.stringify(parsedNotes, null, 4),
            (writeErr) =>
              writeErr
                ? console.error(writeErr)
                : console.info('Successfully added movie')
          );
        }
      });
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      console.log(response);
      res.status(201).json(response);
    } else {
      res.status(500).json('Error in posting review');
    }
  });
 



app.listen(PORT, () =>
console.log(`App listening at http://localhost:${PORT}` ));
