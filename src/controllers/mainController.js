let mainController = {
    index: (req,res) => {
        res.render('index', {
            title: 'Movies'
        });
    },
};

module.exports = mainController;