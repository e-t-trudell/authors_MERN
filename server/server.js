const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());                           
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost/author", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log("Established a connection to the author database"))
.catch(err => console.log("Something went wrong when connecting to the author database", err));



require('./config/mongoose.config');    
require('./routes/author.routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );