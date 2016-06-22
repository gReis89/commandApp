var express = require('express');
var router = express.Router();

/* Define users variable */
var users = [{codigo: 1, nome: 'João Marcelo', dataNascimento: '1986-09-10T00:00:00Z'},
{codigo: 2, nome: 'Pedro', dataNascimento: '1986-09-10T00:00:00Z'},
{codigo: 3, nome: 'Guilherme Rodrigues', dataNascimento: '1986-09-10T00:00:00Z'},
{codigo: 4, nome: 'Gustavo Rodrigues', dataNascimento: '1986-09-10T00:00:00Z'}];

router.param('id', function(req, res, next, id){
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

/* Persist users. */
router.post('/', function(req, res, next) {
  var user = req.body;
  user.codigo = getLastId();
  users.push(user);
  res.status(201).send(users);
});

/* delete users. */
router.delete('/:id', function(req, res, next) {
  deleteFromId(req.params.id);
  res.status(200).send(users);
});

function getLastId(){
  return Math.max.apply(Math,users.map(function(o){return o.codigo;})) + 1;
};

function deleteFromId(id){
  if(users.length){
    var indice = 0;
    for(var i = 0; i<users.length ;i++){
      if(users[i].codigo == id){
        indice = i;
      }
    }
    users.splice(indice,1);
  }
}

module.exports = router;
