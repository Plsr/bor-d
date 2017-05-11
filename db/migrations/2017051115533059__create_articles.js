'use strict';

const Nodal = require('nodal');

class CreateArticles extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017051115533059;
  }

  up() {

    return [
      this.createTable("articles", [{"name":"url","type":"string"},{"name":"name","type":"string"},{"name":"description","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("articles")
    ];

  }

}

module.exports = CreateArticles;
