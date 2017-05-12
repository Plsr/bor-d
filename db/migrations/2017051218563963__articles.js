'use strict';

const Nodal = require('nodal');

class Articles extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017051218563963;
  }

  up() {

    return [
      this.addColumn("articles","tags","string",{"array":true}),
      this.addColumn("articles","field","string")
    ];

  }

  down() {

    return [
      this.dropColumn("articles","tags"),
      this.dropColumn("articles","field")
    ];

  }

}

module.exports = Articles;
