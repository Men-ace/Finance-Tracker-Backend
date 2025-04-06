import { CustomInpute } from "@components/customInpute/CustomInpute";

import { Button, Form } from "react-bootstrap";
import { editBookInputes } from "@assets/customInputes/bookInputes";
import useForm from "@hooks/useForm";
import { postNewBookAction } from "@features/book/bookAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateBookApi } from "@features/book/bookAPI";

const initialState = {};
const EditBookForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [imgToDelete, setImgToDelete] = useState([]);

  const { form, setForm, handleOnChange } = useForm(initialState);

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);
      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");
    }
  }, [setForm]);

  const handleOnImageSelect = (e) => {
    console.log(e.target.files);
    const files = [...e.target.files];

    if (files.length > 2) {
      e.target.value = "";
      return alert("Max 2 images are allowed");
    }
    setImages([...e.target.files]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (imgToDelete.includes(form.imgUrl)) {
      return alert("You can not delet the selected thumbnail");
    }

    const {
      addedBy,
      createdAt,
      lastUpdateBy,
      slug,
      updatedAt,
      __v,
      isbn,
      available,
      averageRating,
      ...rest
    } = form;

    const formData = new FormData();

    for (const key in rest) {
      formData.append(key, rest[key]);
    }

    images.map((img) => formData.append("images", img));
    // formData.append("imgToDelete", imgToDelete);
    imgToDelete.map((img) => formData.append("imgToDelete", img));

    const result = await updateBookApi(formData);
  };

  const handleOnImageToDelete = (e) => {
    const { checked, value } = e.target;

    checked
      ? setImgToDelete([...imgToDelete, value])
      : setImgToDelete(imgToDelete.filter((img) => img !== value));
  };

  return (
    <div className="p-4">
      <h3>Insert new book details below</h3>
      <hr />
      <Form className=" m-2 " onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            name="status"
            type="switch"
            id="custom-switch"
            label={form.status?.toUpperCase()}
            onChange={handleOnChange}
            checked={form.status === "active"}
          />
        </Form.Group>

        {editBookInputes.map((inpute) => (
          <CustomInpute
            key={inpute.name}
            {...inpute}
            onChange={handleOnChange}
            value={form[inpute.name]}
          />
        ))}

        <div className="m-3 d-flex">
          {form.imageList?.map((img) => (
            <div key={img} className="m-1">
              <Form.Check
                type="radio"
                name="imgUrl"
                value={img}
                checked={form.imgUrl === img}
                onChange={handleOnChange}
                label={"Thumbnail"}
              />

              <Form.Check
                type="checkbox"
                label="Delete"
                value={img}
                onChange={handleOnImageToDelete}
              />
              <img
                src={import.meta.env.VITE_BASE_API_URL + img.slice(6)}
                alt="some img"
                width="200px"
                className="img-thumbnail"
              />
            </div>
          ))}
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Upload More Images (Max 2 Images):</Form.Label>
          <Form.Control
            onChange={handleOnImageSelect}
            type="file"
            name="image"
            multiple
            accept="image/*"
          />
        </Form.Group>

        <div className="mb-3">
          <hr />
          <h4>Additional Info</h4>
          <div className="mb-2">
            Added By: {form.addedBy?.name} <br />
            Date: {form.createdAt}
          </div>
          <div>
            Last Updated By: {form.lastUpdateBy?.name} <br />
            Date: {form.updatedAt}
          </div>
        </div>

        <div className="d-grid">
          <Button type="submit" variant="warning">
            Update book{" "}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookForm;
