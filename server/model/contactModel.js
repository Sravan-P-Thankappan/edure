
const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,

    },

    contacts: [
        {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },

            phone: {
                type: Number,
                required: true
            }
        }
    ]

})


module.exports = mongoose.model('contact',contactSchema)