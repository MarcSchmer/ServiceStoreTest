var keystone = require('keystone');
var Types = keystone.Field.Types;

var Hero = new keystone.List('Hero', {
    autokey: { path: 'slug', from: 'title', unique: true }
});

Hero.add({
    title: {type: String, required: false},
    image: {type: Types.CloudinaryImage},
    headline: {type: String, required: false},
    tagline: {type: String, required: false}
});

Hero.defaultColumns = 'image|40%, title|35%, headline';

Hero.register();