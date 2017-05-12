'use strict';

const Nodal = require('nodal');
const Article = Nodal.require('app/models/article.js');

class ArticlesController extends Nodal.Controller {

  index() {

    Article.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Article.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    console.log(this.params.body.tags);

    Article.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Article.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Article.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = ArticlesController;
