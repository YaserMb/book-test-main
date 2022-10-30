const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4001;

const DB = process.env.DB_CON || "mongodb+srv://admin:admin8899@cluster0.vzhaswu.mongodb.net/book-test?retryWrites=true&w=majority";

mongoose.connect(DB, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => { console.log("connected") }).catch((err) => { console.log(err) });

// ------ ===== 
const routes = require('./routes/routes');
// ------ ===== 



app.use('/public', express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes);
process.on('uncaughtException', (err) => console.log(err));

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});