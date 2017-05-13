'use strict';

const Nodal = require('nodal');
const validUrl = require('valid-url');

class Resource extends Nodal.Model {}

Resource.setDatabase(Nodal.require('db/main.js'));
Resource.setSchema(Nodal.my.Schema.models.Resource);

const PERMITTED_TYPES = [
  "article",
  "video",
  "website",
  "blog",
  "song",
  "podcast"
]

const PERMITTED_TAGS = [
  "funny",
  "informative",
  "productive",
  "sad",
  "deep",
  "serious",
  "banal"
]

var validateTags = function(tagsArray) {
  var errors = false
  tagsArray.map(function(tag) {
    if(PERMITTED_TAGS.indexOf(tag) === -1)
      errors = true
  })

  return errors ? false : true
}

/* Validations: */
Resource.validates("url", "must be a valid url", v => v && validUrl.isWebUri(v));
Resource.validates("name", "must not be empty", v => v && v);
Resource.validates("name", "must not be longer than 140 character", v => v && v.length <= 140);
Resource.validates("type", "must not be empty", v => v && v);
Resource.validates("type", "must be of a permitted type", v => v && (PERMITTED_TYPES.indexOf(v) > -1))
Resource.validates("tags", "must have at least one tag", v => v && v.length >= 1)
Resource.validates("tags", "must be premitted tags", v => v && validateTags(v))

module.exports = Resource;
