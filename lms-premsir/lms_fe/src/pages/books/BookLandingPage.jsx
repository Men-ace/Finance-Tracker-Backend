import { fetchSinglePublicBookAction } from "@features/book/bookAction";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { Star } from "@components/star/Star";
import { Reviews } from "@components/reviews/Reviews";

const BookLandingPage = () => {
  const { slug } = useParams();
  const { selectedBook } = useSelector((state) => state.bookInfo);
  const [book, setBook] = useState({});
  const dispatch = useDispatch();
  const [showUrl, setShowUrl] = useState(0);

  useEffect(() => {
    // first approach, locally
    // const selectedBook = publicBooks?.find((book) => book.slug === slug);
    // setBook(selectedBook);

    //second approach, fetch from server live

    dispatch(fetchSinglePublicBookAction(slug));
  }, [dispatch, slug]);

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{selectedBook.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      {!selectedBook?._id && (
        <Row>
          <Col>
            <Alert variant="danger">
              This book is not available , pelase contact Admin!
            </Alert>
          </Col>
        </Row>
      )}

      {selectedBook?._id && (
        <>
          <Row>
            <Col md={4}>
              <div className="mb-4" style={{ height: "400px" }}>
                <img
                  src={
                    import.meta.env.VITE_BASE_API_URL +
                    selectedBook?.imageList[showUrl].slice(6)
                  }
                  alt={selectedBook.title}
                  // width={"100%"}
                  className="h-100 w-100 object-fit-contain"
                />
              </div>

              {/* scrollable thumbnails */}

              <div className="d-flex overflow-auto gap-2 py-3">
                {selectedBook.imageList?.map((url, i) => (
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + url.slice(6)}
                    key={url}
                    width={"80px"}
                    className="img-thumbnail"
                    onClick={() => setShowUrl(i)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </Col>

            <Col>
              <div className="d-flex h-100 flex-column justify-content-between">
                <div className="top">
                  <h1>{selectedBook.title}</h1>
                  <div className="fw-bolder">
                    {selectedBook.author} - {selectedBook.year}
                  </div>
                  <div className="my-3 d-flex gap-2">
                    <span>{selectedBook.genre}</span> |{" "}
                    <Star avgRating={2.5} totalReviews={55} />
                  </div>

                  <div>{selectedBook.description.slice(0, 300)}...</div>
                </div>
                <div className="bottom">
                  <hr />
                  <div className="d-grid">
                    <Button variant="dark">Add To Burrowing List </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col className="border p-3 rounded">
              <h3 className="margin-auto mt-5 text-center">More Details</h3>

              <Tabs
                defaultActiveKey="discription"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="discription" title="Discription">
                  <div>{selectedBook.description}</div>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                  <Reviews />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default BookLandingPage;
