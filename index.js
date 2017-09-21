const express = require('express');

const bodyParser = require('body-parser');

const port = 3000;

const cors = require('cors');

const main_ctrl = require('./controllers/main_ctrl.js');

const app = express();






app.use(bodyParser.json());

app.use(cors());

//end points//
app.get('/api/name', main_ctrl.getName);
app.get('/api/location', main_ctrl.getLocation);
app.get('/api/occupations', main_ctrl.getOccupations);
app.get('/api/occupations/latest', main_ctrl.getLatest);
app.get('/api/hobbies', main_ctrl.getHobbies);
app.get('/api/hobbies/:type', main_ctrl.getHobbiesType);
app.get('/api/family', main_ctrl.getFamily);
// app.get('/api/family/:gender', main_ctrl.getFamilyGender);
app.get('/api/restaurants', main_ctrl.getRestaurants);
app.get('/api/restaurants/:name', main_ctrl.getRestaurantsName);


//put METHODS
app.put('/api/name', main_ctrl.changeName);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})
