var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;
    
    locals.section = 'tickets';
    
    locals.data = {
        tickets: [],
        };
    // Load the current ticketlist
    view.on('init', function(next){
        var q = keystone.list('Ticket').model.find();
        
        q.exec(function(err, results) {
            locals.data.tickets = results;
            next(err);
        });
    });
    view.render('tickets/ticketlist');
};


/*
[ { _id: 5885f63200b8283fa3b057d5,
    slug: 'firsttestticket',
    __v: 0,
    assignedTo: 58824f8add47628539f33fc7,
    description: 'Dieses Ticket ist das erste Testticket.',
    updatedAt: 2017-01-23T12:24:45.000Z,
    createdAt: 2017-01-23T12:24:45.000Z,
    status: 'New',
    category: 'Enhancement',
    priority: 'Low',
    title: 'FirstTestTicket' } ]
    
    */