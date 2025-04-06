import { CustomCarousel } from "@components/customCarousel/CustomCarousel";
import { BestRead } from "@components/pageSection/BestRead";
import { JustInSection } from "@components/pageSection/JustInSection";
import { Recommendation } from "@components/pageSection/Recommendation";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="mb-4">
      <Row>
        <Col>
          {/* Hero section  */}
          <CustomCarousel />

          {/* Just in Section  */}
          <JustInSection />

          {/* Best read Section  */}
          <BestRead />

          {/* Recc. Section  */}
          <Recommendation />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
