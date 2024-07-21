var express = require('express');
const { default: mongoose } = require('mongoose');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AND103' });
});

router.post('/add_user', function(req, res, next) {
  
})

router.get('/home', function(req, res, next) {
  res.render('home', { data: 'AND103', point: 10 });
});

router.get('/chitietsp', function(req, res, next) {

  let jsonData = `{
  "title": "The Basics - Networking",
  "description": "Your app fetched this from a remote endpoint!",
  "movies": [
    { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
    { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
    { "id": "3", "title": "The Matrix", "releaseYear": "1999" },
    { "id": "4", "title": "Inception", "releaseYear": "2010" },
    { "id": "5", "title": "Interstellar", "releaseYear": "2014" }
  ]
}`
  res.send(jsonData)
  //res.render('chitietsp');
});

// ket noi mongoDB
const uri = 'mongodb+srv://root:Nhutren123@cluster0.9rgefph.mongodb.net/'

const carModel = require('../carModel')

router.get('/car', async function(req, res, next) {
  await mongoose.connect(uri)

  let cars = await carModel.find()

  res.send(cars)
});

router.post('/add_car', async function(req, res, next) {
  await mongoose.connect(uri)

  let car = req.body
  console.log(car) 

  let kq = await carModel.create(car)

  let cars = await carModel.find()

  res.send(kq)
});



module.exports = router;