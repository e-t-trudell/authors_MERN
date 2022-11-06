const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [
            true,
            "Title is required"
        ],
        minLength:[3,"First name must be at least 3 characters"] 
     },
    lastName: { 
        type: String,
        required: [
            true,
            "Title is required"
        ],
        minLength:[3,"Last name must be at least 3 characters"] 
    }
}, { timestamps: true });
module.exports = mongoose.model('Author', AuthorSchema);