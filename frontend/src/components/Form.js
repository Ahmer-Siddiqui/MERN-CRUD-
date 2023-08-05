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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      {/* {checkUpdate ? (
        <div>
          <Header header={"Updated Form"} />
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
                  value={newEditData.userName}
                />
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="gmail"
                  value={newEditData.gmail}
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
                  value={newEditData.phoneNumber}
                  required
                  onChange={onChangeHandler}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      ) : ( */}

      {/* )} */}
    </>
  );
};

export default MyForm;
