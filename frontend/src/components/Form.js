import React, { useEffect, useState } from "react";
// import sendData from "./SendFile";
import Header from "./header/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  addMyForm,
  getSingleFormData,
  updateMyForm,
} from "../features/FormData/formSlice";
import { useNavigate, useParams } from "react-router-dom";

const MyForm = () => {
  const id = useParams();
  const dispatch = useDispatch();
  const myNavigate = useNavigate();
  const { editData } = useSelector((state) => state.userForm);
  const [formData, setFormData] = useState({
    userName: "",
    gmail: "",
    phoneNumber: "",
    fileName: "",
    fileSize: "",
    fileURL: "",
  });

  useEffect(() => {
    if (window.location.pathname === `/${id.id}`) {
      dispatch(getSingleFormData(id));
    }
  }, []);

  useEffect(() => {
    setFormData({
      ...formData,
      ...editData,
    });
  }, [editData]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onChangeFileHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
      setFormData({
        ...formData,
        fileName: file.name,
        fileSize: file.size,
        fileURL: event.target.result,
      });
    };

    reader.readAsDataURL(file);

  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (id.id) {
      dispatch(updateMyForm(formData));
    } else {
      dispatch(addMyForm(formData));
    }
    myNavigate("/tabledata");
  };

  return (
    <>
      <div>
        <Header header={id.id ? "Update Form" : "Form"} />
        <div className="container">
          <Form onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="UserName"
                name="userName"
                required
                onChange={onChangeHandler}
                value={formData.userName}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="gmail"
                value={formData.gmail}
                required
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                required
                onChange={onChangeHandler}
              />
             
            </Form.Group>

            <Form.Label>File</Form.Label>
              <br /> <br />
              <Form.Control
                type="file"
                hidden
                id="filee"
                onChange={onChangeFileHandler}
              />
              
              <label htmlFor="filee">
              {formData.fileName ? formData.fileName : "no file here" }</label> <br /> <br /> <br />
              <img src={formData.fileURL} width="100px" alt="" /> <br /> <br />
              {/* <video src={formData.fileURL} controls width="1000px"  muted></video> */}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default MyForm;
