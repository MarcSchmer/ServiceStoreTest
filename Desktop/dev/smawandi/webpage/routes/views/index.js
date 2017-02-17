var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
 
    //Welche Datamodells sollen im Vew verwendet werden?
    locals.data = {
        leistungen: [],
        heroes: []
    };
    
    //Stellt die unterschiedlichen HeroImages zur Verfügung
    view.on('init', function(next){
        var q = keystone.list('Hero').model.find();
        
        q.exec(function(err, results) {
            locals.data.heroes = results;
            next(err);
        });
    });
    
    //Stellt die unterschiedlichen Leistungen zur Verfügung
    view.on('init', function(next){
        var q = keystone.list('Leistung').model.find();
        
        q.exec(function(err, results) {
            locals.data.leistungen = results;
            next(err);
        });
    });
    
	// Render the view
	view.render('index');
};

