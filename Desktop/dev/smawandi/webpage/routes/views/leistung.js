var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;
    
    locals.section = 'leistung';
    
    locals.data = {
        leistungen: []
        };
    
    // Load the current services
    view.on('init', function(next){
        var q = keystone.list('Leistung').model.find();
        
        q.exec(function(err, results) {
            locals.data.leistungen = results;
            next(err);
        });
    });
    view.render('leistung');
    
};

