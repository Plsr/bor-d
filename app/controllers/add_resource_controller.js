'use strict';

const Nodal = require('nodal');
const nunjucks = require('nunjucks');

class AddResourceController extends Nodal.Controller {

  get() {

    this.render(nunjucks.render('new.html'));

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

module.exports = AddResourceController;
