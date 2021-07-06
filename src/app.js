let express = require('express');
let app = express();
let path = require('path');

let viewsPath = path.join(__dirname + '/views');
app.set('view engine', 'ejs');
app.set('views', viewsPath)

let methodOverride = require('method-override');

app.use(express.static('public'));
app.use(express.urlencoded ( { extended: false } ));
app.use(express.json());
app.use(methodOverride('_method'));

let mainRouter = require('./routes/main');
let moviesRouter = require('./routes/movies');
let genresRouter = require('./routes/genres');
let actorsRouter = require('./routes/actors');

app.use('/', mainRouter);
app.use('/movies', moviesRouter);
app.use('/genres', genresRouter);
app.use('/actors', actorsRouter);

app.listen(process.env.PORT || 3001, () => console.log('Server running: 3001'));