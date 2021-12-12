const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = 'SELECT * FROM genres ORDER BY "id" ASC;';
  pool.query(query)
  .then(result => {
    console.log('in genre.router get query', result.rows);
    res.send(result.rows);
  }).catch(err => {
    console.log('in genre.router and there is an ERROR', err);
    res.sendStatus(500)
  })
});

module.exports = router;