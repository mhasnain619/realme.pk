import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import cardImg from '../../assets/realmePiece.png';
import C65 from '../../assets/C65.png';
import G5 from '../../assets/135g.png';
import c53 from '../../assets/c53.png';
import c63 from '../../assets/c63.png';
import c67 from '../../assets/c67.png';
import c75 from '../../assets/c75.png';
import gt6 from '../../assets/gt6.png';
import note60 from '../../assets/Note60.png';
import r12 from '../../assets/realme1212.png';
import r12fg from '../../assets/12fg.png';
import './PCard.css'

const cardsData = [
    {
        title: "realme C75",
        description: "Dhulai Horai Hai",
        price: null,
        image: c75,
        badge: "NEW",
    },
    {
        title: "realme C53",
        description: "Champion Gold, 33W Champion Charge",
        price: "Rs.39,999",
        image: c53,
        badge: "NEW",
    },
    {
        title: "realme 13+ 5G",
        description: "Speed to Victory",
        price: "Rs.89,999",
        image: G5,
        badge: "NEW",
    },
    {
        title: "realme C65",
        description: "Unbreakable Champion",
        price: "Rs.49,999",
        image: C65,
        badge: "NEW",
    },
    {
        title: "realme C63",
        description: "3 min Charge, 60 min T20 Match",
        price: "Rs.39,999",
        image: c63,
        badge: "NEW",
    },
    {
        title: "realme C67",
        description: "108MP 3x In-sensor Zoom Camera, Snapdragon 685",
        price: "Rs.39,999",
        image: c67,
        badge: "NEW",
    },
    {
        title: "realme 13+ 5G",
        description: "Speed to Victory",
        price: "Rs.89,999",
        image: c75,
        badge: "NEW",
    },
    {
        title: "realme GT 6",
        description: "Power meets AI",
        price: "Rs.149,999",
        image: gt6,
        badge: "NEW",
    },
    {
        title: "realme Note 60",
        description: "Champion Quality",
        price: "Rs.26,999",
        image: note60,
        badge: "NEW",
    },
    {
        title: "realme 12",
        description: "Power in Every Shot",
        price: "Rs.59,999",
        image: r12,
        badge: "NEW",
    },
    {
        title: "realme 12+ 5G",
        description: "Power in Every Shot",
        price: "Rs.74,999",
        image: r12fg,
        badge: "NEW",
    },
    {
        title: "realme 13+ 5G",
        description: "Speed to Victory",
        price: "Rs.89,999",
        image: cardImg,
        badge: "NEW",
    },
];

function ProductCards() {
    return (
        <Container fluid style={{ backgroundColor: '#F5F5F5' }} className="mt-4">

            <Row className="g-4">
                <h1 style={{ fontWeight: "bold" }}>SmartPhones</h1>
                {cardsData.map((card, index) => (
                    <Col xs={12} md={6} key={index}>
                        <Card className="p-4 shadow-sm border-0" style={{ cursor: 'pointer', borderRadius: '20px' }}>
                            <Row className="align-items-center">
                                {/* Text Column */}
                                <Col xs={12} md={6} className="text-center text-md-start">
                                    <Badge bg="info" className="mb-2" style={{ fontSize: '0.8rem', borderRadius: '8px' }}>
                                        {card.badge}
                                    </Badge>
                                    <h4 style={{ fontWeight: 'bold' }}>{card.title}</h4>
                                    <p style={{ color: 'gray', fontSize: '1rem' }}>{card.description}</p>
                                    {card.price && (
                                        <p
                                            className="price-margin-lg"
                                            style={{ fontWeight: 'bold', fontSize: '1.2rem' }}
                                        >
                                            {card.price}
                                        </p>
                                    )}

                                </Col>
                                {/* Image Column */}
                                <Col xs={12} md={6} className="text-center mb-3 mb-md-0">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="img-fluid product-image"
                                        style={{ borderRadius: '10px' }}
                                    />
                                </Col>

                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductCards;
