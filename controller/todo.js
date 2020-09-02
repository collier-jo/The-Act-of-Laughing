const Todo = require('../models/todo');

var HomeController = {

    Index: function(req, res, next) {
        Todo.find({}, 'action')
            .then(data => 
                res.json(data),
            )
            .catch(next)
    },
}
  
module.exports = HomeController;
  