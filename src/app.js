let express = require('express');
let app = express();
let path = require('path');

let viewsPath = path.join(__dirname + '/views');
app.set('view engine', 'ejs');
app.set('views', viewsPath)

app.use(express.static('public'));

let mainRouter = require('./routes/main');

app.use('/', mainRouter);

app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));