import { NewBookForm } from "@components/forms";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewBookPage = () => {
  return (
    <div className="p-2">
      <div className="p-3">New Book Page</div>

      <hr />
      <Link to="/user/books">
        <Button variant="secondary">&lt; Back</Button>{" "}
      </Link>

      <NewBookForm />
    </div>
  );
};

export default NewBookPage;
