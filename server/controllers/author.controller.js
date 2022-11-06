
const Author = require('../models/author.model');    
module.exports.index = (request, response) => {
    response.json({
        message: "Hello Authors"
    });
}
// module.exports.createAuthor = (request, response) => {
//     Author.create(request.body) 
//         .then(author => response.json(author))
//         .catch(err => response.status(400).json(err));
// }
module.exports = {
    create: (request, response) => {
        const {firstName, lastName} = request.body;
        Author.create({firstName, lastName})
        .then(author => response.json(author))
        .catch(err => response.status(400).json(err));
    }
}
module.exports.getAllAuthors = (request, response) => {
    Author.find({})
        .then(authors => {
            console.log(authors); 
            response.json(authors);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}
module.exports.getAuthor = (request, response) => {
    Author.findOne({_id:request.params.id})
        .then(author => response.json(author))
        .catch(err => response.json(err));
}
module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}