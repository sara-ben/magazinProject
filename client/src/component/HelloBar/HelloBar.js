import React, { useState } from 'react';
import './HelloBar.css';
import { Container, Row, Col, Button } from "react-bootstrap";


export default function HelloBar(props) {
    const [IsShow, setIsShow]= useState(false);
    return (
        <div >
            <Container className="advertisingDiv d-flex justify-content-center div1">
                <Row className="advertisingRow div1 d-flex justify-content-center">
                    <div className="div1" style={{display:IsShow ? 'none':'flex'}}>
                    <Col ><p className="advertisingP div1">want to get a 20% discount right now?</p></Col>
                    <Col>  <button className="advertisingButton" onClick={() => {
                        setIsShow(true);
                    }}>cleeck here!</button></Col>
                    </div>
                    <div style={{display:IsShow ? 'flex':'none'}}>
                    <Col className="d-flex justify-content-center">
                        <input  type="input" placeholder="name" className="inpt"></input>
                        <input type="input" placeholder="email" className="inpt"></input>
                        <button className="sendMeButton" >send me!</button>
                    </Col>
                    </div>
                </Row>

            </Container>
        </div>
    )
}



