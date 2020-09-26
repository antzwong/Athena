const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema(
    {
        username: 
        {
            type: String,
            required: true,
        },
        password:
        {
            type: String,
            required: true,
        },
        name:
        {
            type: String,
            required: false,
        },
        email:
        {
            type: String,
            required: true,
        }
    }
);

const Account = mongoose.model('account', accountSchema);

module.exports = Account;
