'use strict';

const Nodal = require('nodal');
const Resource = Nodal.require('app/models/resource.js');

class RandomController extends Nodal.Controller {

  index() {
    // TODO: Query params will probably be sent in the body, not as strong parameters in the future.
    
    var query = {} // empty by default, selects any resource
    var type = this.params.query.type;
    var field = this.params.query.field;

    // Fill fields for query specified by request
    if(type) {
      query.type = type
    }
    if(field) {
      query.field = field
    }

    Resource.query()
      .where(query)
      .end((err, models) => {
        // From the returned models, select and return one at random
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
