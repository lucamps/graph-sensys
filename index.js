const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/',(req,res) => {
    res.sendFile( path.join( __dirname + '/index.html' ) );
});


app.use('/',router);

app.use(express.static(__dirname + '/scss'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/scripts'));

app.listen(process.env.port || 3000);