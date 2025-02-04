const mongoose = require('mongoose')

mongoose.connect("{mongoDB URL}");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = {
    User
}