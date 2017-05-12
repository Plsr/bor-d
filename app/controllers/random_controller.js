'use strict';

const Nodal = require('nodal');
const Resource = Nodal.require('app/models/resource.js');

class RandomController extends Nodal.Controller {

  get() {
    var type = this.params.query.type;
    var field = this.params.query.field;

    Resource.query()
      .where({
        type: type,
        field: field
      })
      .end((err, models) => {
        var randPos = Math.floor((Math.random() * models.length));
        var randModel = models[randPos]
        this.respond(err || randModel);

      });

  }

  post() {

    this.badRequest();

  }

  put() {

    this.badRequest();

  }

  del() {

    this.badRequest();

  }

}

module.exports = RandomController;
