import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebook, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#191919",
                color: "white",
                padding: "30px 0",
                fontSize: "14px",
            }}
        >
            <Container>
                <Row>
                    <Col md={3}>
                        <h6>Recommended</h6>
                        <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}>
                            <li>realme C75</li>
                            <li>realme 13+ 5G</li>
                            <li>realme Note 60</li>
                            <li>realme C61</li>
                            <li>realme C65</li>
                            <li>realme 12</li>
                            <li>realme 12+ 5G</li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h6>Support</h6>
                        <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}>
                            <li>FAQ</li>
                            <li>Troubleshooting</li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h6>About realme</h6>
                        <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}>
                            <li>Our Brand</li>
                            <li>Newsroom</li>
                        </ul>
                    </Col>

                    <Col md={3}>
                        <h6>Contact realme</h6>
                        <ul style={{ listStyleType: "none", padding: 0, lineHeight: "2" }}>
                            <li>Whatsapp</li>
                            <li>service.pk@realme.com</li>
                        </ul>
                        <h4 style={{ marginTop: "10px" }}>04238048018</h4>
                        <p style={{ marginBottom: "5px" }}>09:30 - 18:00, MON - SAT</p>
                        <p>Exclude Holidays</p>
                        {/* <div>
                            <FaFacebook
                                style={{ marginRight: "15px", fontSize: "20px", cursor: "pointer" }}
                            />
                            <FaXTwitter
                                style={{ marginRight: "15px", fontSize: "20px", cursor: "pointer" }}
                            />
                            <FaYoutube
                                style={{ marginRight: "15px", fontSize: "20px", cursor: "pointer" }}
                            />
                            <FaInstagram
                                style={{ fontSize: "20px", cursor: "pointer" }}
                            />
                        </div> */}
                    </Col>
                </Row>
                <hr style={{ backgroundColor: "#444", height: "1px" }} />
                <Row className="text-center">
                    <Col>
                        <p style={{ margin: "0" }}>
                            Pakistan ( English / PKR ) © 2019-2024 realme. All Rights Reserved.
                        </p>
                    </Col>
                </Row>
                <Row className="text-center mt-2">
                    <Col>
                        <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                            User Agreement
                        </a>{" "}
                        |{" "}
                        <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                            Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                            Terms of Sales
                        </a>{" "}
                        |{" "}
                        <a href="/" style={{ color: "#ccc", textDecoration: "none" }}>
                            Warranty Terms
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
