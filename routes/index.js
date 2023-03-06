var express = require('express');
var router = express.Router();

const data = [{
  image:"",
  name:"sweift",
  company:"maruthi"
}
]



/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  const password = 123
const email = "admin@gmail.com"
console.log(req.body.email)
if(email ==  req.body.email&& password==req.body.password){
  res.render("home",{data})
}else{
  res.render('index', { title: 'Express' });
}
  // res.render('index', { title: 'Express' });
});


module.exports = router;
