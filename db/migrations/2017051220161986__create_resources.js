'use strict';

const Nodal = require('nodal');

class CreateResources extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017051220161986;
  }

  up() {

    return [
      this.createTable("resources", [{"name":"url","type":"string"},{"name":"name","type":"string"},{"name":"description","type":"string"},{"name":"field","type":"string"},{"name":"type","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("resources")
    ];

  }

}

module.exports = CreateResources;
