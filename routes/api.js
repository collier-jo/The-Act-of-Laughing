const express = require ('express');
const router = express.Router();
const Todo = require('../models/todo');
const HomeController = require('../controller/todo');

// router.get('/todos', HomeController.Index);

// router.post('/todos', (req, res, next) => {
//   if(req.body.action){
//     Todo.create(req.body)
//       .then(data => res.json(data))
//       .catch(next)
//   }else {
//     res.json({
//       error: "The input field is empty"
//     })
//   }
// });
// // var newPost = new Post({userID: user._id, name: userName, body: request.body.body, datePosted: Date.now()});

// router.get('/todos/tes', (req,res, next) =>{
//   var newTodo = new Todo({action: "Testing the todo api"})

//   newTodo.save(function(err){
//     res.send('saved')
//   });
// })

// router.delete('/todos/:id', (req, res, next) => {
//   Todo.findOneAndDelete({"_id": req.params.id})
//     .then(data => res.json(data))
//     .catch(next)
// })

module.exports = router;