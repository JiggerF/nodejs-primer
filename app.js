var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bookRouter = express.Router();

// var mongoose = require('mongoose');
// var db = mongoose.connect('mongodb://localhost/bookAPI');
// var Book = require('./models/bookModel');

bookRouter.route('/Books')
    .get(function(req, res){
        // Book.find(function(err, books){
        //     if (err)
        //         console.log(err)
        //     else
        //         res.json(books);
        // });
        res.send({
            message: "Responding to /Books!"
        })
    });

app.use('/api', bookRouter);

app.get('/', function(req, res){
    res.send('Welcome to my API');
})
 
app.listen(port, function(){
    console.log('Running on port', port);
})
