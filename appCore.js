var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/client'));

app.use(bodyparser.json());

Gbutton = require('./model/buttonCore');

//  connect to mangoose

mongoose.connect('mongodb://localhost/styleguide');
var db = mongoose.connection;

app.get('/', function(req, res) {
    res.send('Please use api/button');
});

app.get('/api/button', function(req, res) {
    Gbutton.getButtons(function(err, data) {
        if (err) {
            throw err;
        }

        res.json(data);

    });
});

app.get('/api/button/:_id', function(req, res) {
    Gbutton.getButtonById(req.params._id, function(err, data) {
        if (err) {
            throw err;
        }

        res.json(data);

    });
});

app.post('/api/button', function(req, res) {
    var button = req.body;
    Gbutton.addButton(button, function(err, button) {
        if (err) {
            throw err;
        }

        res.json(button);

    });
});

app.put('/api/button/:_id', function(req, res) {
    var id = req.params._id,
        button = req.body;
    Gbutton.updateButton(id, button, {}, function(err, button) {
        if (err) {
            throw err;
        }

        res.json(button);

    });
});

app.delete('/api/button/:_id', function(req, res) {
    var id = req.params._id

    Gbutton.deleteButton(id, function(err, button) {
        if (err) {
            throw err;
        }

        res.json(button);

    });
});



app.listen(3000);
console.log('Running on 3000 port')
