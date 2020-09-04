import React from "react";
import { Link } from "react-router-dom";
import face from "./image/face1.png";
import "./css/style.css";
import Particles from "react-particles-js";
import { particlesParams } from "../../Configuration/particle.config";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

const Welcome = () => {
  return (
    <div className="position-relative">
      <Particles
        className="position-absolute w-100 h-100 d-flex flex-column particles-js"
        params={particlesParams}
      />
      <Container>
        <Row className="justify-content-center align-items-center text-white py-5">
          <Col sm={12} md={6}>
            {/* example approach */}
            {/* <Card border="white" className="bg-transparent">
                <Card body className="bg-transparent">
                  <Card title className="bg-transparent">
                    Welcome to our analysis world !!
                  </Card>
                  <Card subtitle className="bg-transparent">
                    Why we are here ?
                  </Card>
                  <Card text className="bg-transparent">
                    This site was created for joying and demonstration many
                    services for multiple domains.
                  </Card>
                  <Card link className="bg-transparent">
                    <Link to="/services" className="bg-transparent">
                      GO TO SERVICES
                    </Link>
                  </Card>
                </Card>
              </Card> */}
            <div className="p-5 border border-white rounded-lg d-flex flex-column">
              <p className="text-center h1">Welcome to our analysis world !!</p>
              <p className="second-title h4 pb-2">Why we are here ?</p>
              <p className="pb-2 ">
                This site was created for joying and demonstration many services
                for multiple domains.
              </p>
              <p>
                Let us save our words and go dirctly to enter in the actions :-
                ...
              </p>
              <Link
                to="/services"
                className="Mbutton text-white text-uppercase text-decoration-none align-self-center"
              >
                GO TO SERVICES
              </Link>
            </div>
          </Col>
          <Col sm={12} md={6}>
            <Image src={face} fluid alt="." />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Welcome;
