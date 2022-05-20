const express = require('express');
const userRoutes = require('./routes/user_rt');
const postRoutes = require('./routes/post');
const commentsRoutes = require('./routes/com');
// const itemRoutes = require('./routes/item_rt');

const db = require("./middleware/db-config");
const dbassoc = require("./models/db_association");



db.authenticate()
    .then(() => {
        console.log('Connection à la BDD réussie !');
    })
    .catch((error) => {
        console.error('Impossible de se connecter à la BDD', error);
        console.error('impossible')
    });

db.sync({ alter: true });
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());
app.use('/api/post', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api', function(req, res) { res.send("coucou") });
module.exports = app;


app.use(express.json());
app.use('/images', express.static('images'));
app.use("/api/auth", userRoutes);
