// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    selectAll: function(allCb) {
        orm.selectAll("burgers", allCb);
    },
    insertOne: function(cols, vals, createCb) {
        orm.insertOne("burgers", cols, vals, createCb);
    },
    updateOne: function(objColVals, condition, updateCb) {
        orm.updateOne("burgers", objColVals, condition, updateCb)
    },
    delete: function( condition, deleteCb) {
        orm.delete("burgers", condition, deleteCb)
    },
};

module.exports = burger;














// Export at the end of the burger.js file.