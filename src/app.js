let express = require('express');
let app = express();
let path = require('path');

let viewsPath = path.join(__dirname + '/views');
app.set('view engine', 'ejs');
app.set('views', viewsPath)

app.use(express.static('public'));
app.use(express.urlencoded ( { extended: false } ));
app.use(express.json());

let mainRouter = require('./routes/main');
let moviesRouter = require('./routes/movies');

app.use('/', mainRouter);
app.use('/movies', moviesRouter);

app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));