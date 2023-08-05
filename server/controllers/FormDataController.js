const { default: mongoose } = require("mongoose");
const formSchema = require("../models/FormModel");

const addFormData = async (req, res) => {
  let result = await mongoose.model("user", formSchema);
  let data = await result.create(req.body);
  res.status(200).send("Succesfull");
};
const getFormData = async (req, res) => {
  let result = await mongoose.model("user", formSchema);
  let data = await result.find();
  res.status(200).json(data);
};
const getSingleFormData = async (req, res) => {
  let result = await mongoose.model("user", formSchema);
  let myId = req.params.id;
  let data = await result.findOne({ _id: myId });
  res.status(200).json(data);
};
const deleteformdata = async (req, res) => {
  let result = await mongoose.model("user", formSchema);
  let myId = req.params.id;
  let data = await result.deleteOne({ _id: myId });
  res.status(200).json({ message: "Successful" });
};
const updateformdata = async (req, res) => {
  let result = await mongoose.model("user", formSchema);
  let myId = req.params.id;
  let data = await result.findByIdAndUpdate(myId, req.body);
  res.status(200).json({ message: "Successful" });
};

module.exports = { addFormData, getFormData, deleteformdata, updateformdata, getSingleFormData };
