'use strict';

const Nodal = require('nodal');
const validUrl = require('valid-url');

class Resource extends Nodal.Model {}

Resource.setDatabase(Nodal.require('db/main.js'));
Resource.setSchema(Nodal.my.Schema.models.Resource);

Resource.validates("url", "must be a valid url", v => v && validUrl.isWebUri(v));
Resource.validates("name", "must not be empty", v => v && v);
Resource.validates("name", "must not be longer than 140 character", v => v && v.length <= 140);
Resource.validates("type", "must not be empty", v => v && v);
Resource.validates("tags", "must have at least one tag", v => v && v.length >= 1)

module.exports = Resource;
