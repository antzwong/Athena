const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const administratorSchema = new Schema(
    {
        privileges:
        {
            type: Boolean, 
            default: 'true',
        },
    }
);

const Administrator = mongoose.model('administrator', administratorSchema);

module.exports = Administrator;