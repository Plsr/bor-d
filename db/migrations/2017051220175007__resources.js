'use strict';

const Nodal = require('nodal');

class Resources extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017051220175007;
  }

  up() {

    return [
      this.addColumn("resources","tags","string",{"array": true})
    ];

  }

  down() {

    return [
      this.dropColumn("resources","tags")
    ];

  }

}

module.exports = Resources;
