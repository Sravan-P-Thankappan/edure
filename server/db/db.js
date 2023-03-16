
const mongoose = require('mongoose')

const connection = function () {

    mongoose.connect(process.env.CONNECTION_URL)
        .then(() => {
            console.log('MongoDB connected')
        })
        .catch((er) => {
            console.log(er.message)
        })
}




module.exports = connection