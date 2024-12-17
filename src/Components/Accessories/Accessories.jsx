import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BudImg from '../../assets/bud.png';
import bud from '../../assets/budQ.png';
import BudImgQ from '../../assets/watch.png';
import watch2 from '../../assets/watchS.png';
import './Accessories.css';

const allCardsData = {
    home: [
        {
            title: "realme Buds T110",
            description: "Listen in Full Color",
            price: 'Rs.4,999',
            image: BudImg,
            badge: "NEW",
        },
        {
            title: "realme Buds Q",
            description: "Music Never Ends",
            price: "Rs.7,999",
            image: bud,
        },
    ],
    profile: [
        {
            title: "realme Watch S",
            description: "Smarter Round the Clock",
            price: "Rs.21,999",
            image: BudImgQ,
        },
        {
            title: "realme band 2",
            description: "Big on Fitness and More",
            price: "Rs.69,999",
            image: watch2,

        },
    ],
};

function Accessories() {
    const [activeTab, setActiveTab] = useState('home'); // State for the active tab

    return (
        <Container fluid style={{ backgroundColor: '#F5F5F5' }} className="mt-4 pb-5">
            <Row className="g-4">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h1 style={{ fontWeight: "bold" }}>Accessories</h1>
                    <div>

                        <Tabs
                            activeKey={activeTab}
                            onSelect={(k) => setActiveTab(k)}
                            id="controlled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Audio"></Tab>
                            <Tab eventKey="profile" title="Smart Wearable"></Tab>
                        </Tabs>
                    </div>
                </div>

                {allCardsData[activeTab]?.map((card, index) => (
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
                                        className="img-fluid"
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

export default Accessories;
