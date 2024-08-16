const mongooes = require("mongoose");

const EmployeSchema = new mongooes.Schema(
    {
        id : String,
        name : String,
        age : String,
        phone : String,
    }
);


const EmployeModel = mongooes.model("Employee", EmployeSchema);

module.exports = EmployeModel;

