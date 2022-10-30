const route = require('express').Router();

// --- === Middleware 
const Authentication = require('../middlewares/authMiddleware');
// --- === Controller
const userController = require('../controllers/userController');
const booksController = require('../controllers/bookController');

let TokenAuthentication = Authentication.checkAuthentication;

route.post('/login', userController.Login);

route.get('/books', TokenAuthentication, booksController.Books);
route.post('/create-books', TokenAuthentication, booksController.createBooks);
route.post('/delete-books', TokenAuthentication, booksController.deleteBooks);

module.exports = route;