const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeModel = require("./model/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/emp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.post('/Create', (req, res) => {
  EmployeModel.create(req.body)
    .then((data) => {res.json({ message: "successfully", data: data }); })
    .catch((err) => {res.json({ message: "Failed", data: data }); });
});

app.get('/allDetails', (req, res) => {
  EmployeModel.find({})
    .then((data) => { res.json(data); })
    .catch((err) => { res.json(err); });
});
app.get('/filter/:id', (req, res) => {
  const id = req.params.id;
  EmployeModel.findOne({ id: id })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.json({ message: "Employee not found" });
      }
    })
    .catch((err) => { res.json(err); });
});


app.delete('/Delete/:id', (req, res) => {
  const id = req.params.id;
  EmployeModel.findOneAndDelete({ id: id })
    .then((data) => {
      if (data) {
        res.json({ message: "successfully", data: data });
      } else {
        res.json({ message: "not found" });
      }
    })
    .catch((err) => { res.json(err); });
});


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
