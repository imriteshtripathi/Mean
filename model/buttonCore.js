var myMongoose = require('mongoose');

//  Button Schema
var buttonschema = myMongoose.Schema({
    title: {
        type: String

    },
    subtitle: {
        type: String
    },
    html: {
        type: String
    },
    css: {
        type: String
    },
    scss: {
        type: String
    },
    js: {
        type: String

    },
    common: {
        type: String

    },
    comment: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});


var myButton = module.exports = myMongoose.model('Button Modal', buttonschema, 'button');

// Get buttons
module.exports.getButtons = function(callback, limit) {
    myButton.find(callback).limit(limit);
}

// Get buttons by Id
module.exports.getButtonById = function(id, callback) {
    myButton.findById(id, callback);
}

//  Add Button
module.exports.addButton = function(button, callback) {
    myButton.create(button, callback);
}

// Update Button
module.exports.updateButton = function(id, button, options, callback) {
    var query = { _id: id },
        update = {
            title: button.title,
            subtitle: button.subtitle,
            subtitle: button.subtitle,
            html: button.html,
            css: button.css,
            scss: button.scss,
            js: button.js,
            common: button.common,
            comment: button.comment

        }
    myButton.findOneAndUpdate(query, update, options, callback);
}

// Delete Button
module.exports.deleteButton = function(id, callback) {
    var query = { _id: id };

    myButton.remove(query, callback);
}
