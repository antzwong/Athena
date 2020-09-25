const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const actionlogSchema = new Schema(
    {
        // which user borrowed the equipemnts
        username: 
        {
            type: String,
            required: true,
        },
        // which equipment borrowed
        // should store the object id of the equipment
        equipment:
        {
            type: String, 
            required: true,
        },
        // should provide what date the equipment should be returned
        returndate:
        {
            type: Date,
            required: true,
        },
        // the status of rather or not the equipment had been returned
        borrowedstatus:
        {
            type: Boolean, default:'false'
        },
    },
    {
        timestamps: true,
    }
);

const Actionlog = mongoose.model('actionlog', actionlogSchema);

module.exports = Actionlog;
