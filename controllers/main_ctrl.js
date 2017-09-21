const user = require('../user.js');
//access to user.js from main_ctrl




const getName = (req, res, next)=> {
return res.json({name: user.name});
}

const getLocation = (req, res, next) => {
  return res.json({location: user.location});
}

const getOccupations = (req, res, next) => {
if (req.query.order== "asc") {
  return res.json({ occupations: user.occupations.sort().reverse() });
}
if (req.query.order== "desc") {
  return res.json({occupations: user.occupations.sort() });
}
//if there is a query for order, return after...

  return res.json({occupations: user.occupations});

}



const getOcc = (req, res, next) => {
  if (req.query.order === "asc") {
    return res.json({ occupations: user.occupations.sort().reverse() });
  }
  if ((req.query.order = "desc")) {
    return res.json({ occupations: user.occupations.sort() });
  }
  return res.json({ occupations: user.occupations });
};



const getLatest = (req, res, next) => {
  return res.json({latestOccupation: user.occupations[user.occupations.length-1]});
}

const getHobbies = (req, res, next) => {
  return res.json({hobbies: user.hobbies})
}

const getHobbiesType = (req, res, next) => {
    res.json(user.hobbies.filter(hobby => hobby.type === req.params.type));
}

const getFamily = (req, res, next) => {
  if (req.query.relation) {
    res.json(user.family.filter(family => family.relation === req.query.relation));
  } else {
  //if there is a query, return ///
  //if there is no query, just return below//
  res.json({family: user.family});
  }
}

// const getFamilyGender = (req, res, next) => {
//
// }

const getRestaurants = (req, res, next) => {
  if (req.query.rating=="gte:2") {
    res.json({restaurants: user.restaurants.filter(x=>x.rating>2)});
  } else {
  //if there is a rating query, return ///
  //if there is no query, just return below
  return res.json({restaurants: user.restaurants});
  }
}

const getRestaurantsName = (req, res, next)=> {
  res.json(user.restaurants.filter(x=>x.name==req.params.name));
}


//PUT METHODS
// const changeName = (req, res, next) => {
//   res.status(200).json({user: user.name = req.params.id});
// }

const changeName = (req, res, next) => {
  user.name =req.body.name
  res.status(200).json(user); // // could also be user.name
}









module.exports = {
//put osmething here to export  a const
getName,
getLocation,
getOccupations,
getLatest,
getHobbies,
getHobbiesType,
getFamily,
getRestaurants,
getRestaurantsName,
changeName
}
