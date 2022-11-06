const AuthorController = require('../controllers/author.controller');  
module.exports = (app) => {
    app.get('/api', AuthorController.index);
    app.get('/api/author', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.put('/api/author/edit/:id', AuthorController.updateAuthor);
    app.post('/api/author/', AuthorController.createAuthor);
    app.delete('/api/author/delete/:id', AuthorController.deleteAuthor);
    
}