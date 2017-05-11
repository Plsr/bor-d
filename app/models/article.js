'use strict';

const Nodal = require('nodal');

class Article extends Nodal.Model {}

Article.setDatabase(Nodal.require('db/main.js'));
Article.setSchema(Nodal.my.Schema.models.Article);

module.exports = Article;
