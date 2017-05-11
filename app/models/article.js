'use strict';

const Nodal = require('nodal');
const validUrl = require('valid-url');

class Article extends Nodal.Model {}

Article.setDatabase(Nodal.require('db/main.js'));
Article.setSchema(Nodal.my.Schema.models.Article);

Article.validates("url", "must be a valid url", v => v && validUrl.isWebUri(v));
Article.validates("name", "must not be empty", v => v && v);
Article.validates("name", "must not be longer than 140 character", v => v && v.length <= 140);

module.exports = Article;
