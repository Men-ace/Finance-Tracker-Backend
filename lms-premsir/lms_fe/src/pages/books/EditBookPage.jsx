import { EditBookForm } from "@components/forms";
import { deleteBookApi } from "@features/book/bookAPI";
import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditBookPage = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const handleOnDelete = async () => {
    if (
      confirm("Are you sure you want to delete this book. This can't be undo.")
    ) {
      const result = await deleteBookApi(_id);

      result.status === "success" && navigate("/user/books");
    }
  };
  return (
    <div className="p-3">
      <h3>Edit Book</h3>
      <hr />
      <Link to="/user/books">
        <Button variant="secondary">&lt; Back</Button>{" "}
      </Link>

      <div>
        <EditBookForm />
      </div>
      <div className="d-grid p-4">
        <Button onClick={handleOnDelete} variant="danger">
          Delete This Book
        </Button>
      </div>
    </div>
  );
};

export default EditBookPage;
