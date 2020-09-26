const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const administratorSchema = new Schema(
    {
        // the Id of the account to give privileges to
        accountID:
        {
            type: String,
            required: true,
        }
        privileges:
        {
            type: Boolean, 
            default: 'true',
        },
    }
);

const Administrator = mongoose.model('administrator', administratorSchema);

module.exports = Administrator;
