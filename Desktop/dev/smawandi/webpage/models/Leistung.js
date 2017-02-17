var keystone = require('keystone');
var Types = keystone.Field.Types;

var Leistung = new keystone.List('Leistung', {
                autokey: {from: 'title', path: 'slug', unique: true}
});

Leistung.add({
    title: {type: String, initial: true, default: '', required: true },
    description: {type: Types.Textarea },
    image: {type: Types.CloudinaryImage}
});

Leistung.defaultColumns = 'image|30%, title|15%, description';

Leistung.schema.virtual('url').get(function(){
    return '/leistung/'+this.slug;
});

Leistung.register();