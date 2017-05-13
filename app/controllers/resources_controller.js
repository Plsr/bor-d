'use strict';

const Nodal = require('nodal');
const nunjucks = require('nunjucks');
const Resource = Nodal.require('app/models/resource.js');

nunjucks.configure('views', { autoescape: true });

class ResourcesController extends Nodal.Controller {

  index() {

    Resource.query()
      .where(this.params.query)
      .end((err, models) => {
        console.log(models[0]._data);
        this.render(nunjucks.render('resources.html', { resources: models }));

      });

  }

  show() {

    Resource.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Resource.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Resource.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Resource.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = ResourcesController;
