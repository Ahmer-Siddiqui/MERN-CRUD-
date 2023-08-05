import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Header from "./header/Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteMyForm, getMyForm, reset, updateData, updationCheck } from "../features/FormData/formSlice";
import { useNavigate } from "react-router-dom";

const MyTable = () => {
  const dispatch = useDispatch();
  const  navigation = useNavigate();
  const allUsers = useSelector((state) => state.userForm.myForm);

  const deleteHandler = (id) => {
    dispatch(deleteMyForm(id));
    dispatch(getMyForm());
  };

  const editHandler = (id) => {
    navigation(`/${id}`);
    // dispatch(updateData(elem))
    // dispatch(updationCheck())
  };
  useEffect(() => {
    dispatch(reset());
    dispatch(getMyForm());
  }, []);

  return (
    <>
      <Header header={"Table"} />
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Gmail</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((elem, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{elem.userName}</td>
                  <td>{elem.gmail}</td>
                  <td>{elem.phoneNumber}</td>
                  <td>
                    <i
                      className="fa-solid fa-pen-to-square mx-3"
                      onClick={() => editHandler(elem._id)}
                    ></i>
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={() => deleteHandler(elem._id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default MyTable;
