import axios from "axios";

const sendData = async (formData) => {
  const response = await axios.post("form/addformdata", formData);
  return response.data;
};

const getData = async () => {
  const response = await axios.get("form/getformdata");
  return response.data;
};
const getSingleData = async (data) => {
  const response = await axios.get(`form/getsingleformdata/${data.id}`);
  return response.data;
};
const deleteData = async (data) => {
  const response = await axios.delete(`form/deleteformdata/${data}`);
  return response.data;
};
const updateSingData = async (data) => {
    console.log(data);
  const response = await axios.put(`form/updateformdata/${data._id}`, data);
  return response.data;
};

export { getData, sendData, deleteData, updateSingData, getSingleData };
