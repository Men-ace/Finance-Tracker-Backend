import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import a from "@assets/img/a.jpg";
import { Link } from "react-router-dom";

export const CustomCard = ({
  imgUrl = a,
  title = "Book Title",
  year = 2020,
  author = "Author name",
  slug = "book-title",
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="m-2">
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
          className="rounded"
        />
      </div>

      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
        <Link to={"/book/" + slug}>
          <Button variant="dark">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
