var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("Burgers", function(res) {
      cb(res)
    }
    )},

    insertOne: function(burgName, cb) {
      orm.insertOne("Burgers", burgName, cb)
    },

    updateOne: function(id, cb) {
      orm.updateOne("Burgers", id, cb)
    }
  }

  module.exports = burger;