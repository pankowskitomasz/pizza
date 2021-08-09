import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class SocialMedia extends Component{
    render(){
        return(
            <Container fluid className="bg-dark align-items-start border-top border-black">
                <Row className="mx-0 w-100 px-4">
                    <Col md={2} className="d-none d-md-block bg-warning minh-25vh opacity-9"></Col>
                    <Col xs={12} md={5} className="text-white py-2 p-md-4 text-shadow text-center text-md-start">
                        <h2 className="#display-4 fw-bold mt-3 text-warning text-shadow">
                            #pizzeria
                        </h2>
                        <p className="initialism mt-3">
                            Want to know more? Curious about new things? 
                            Find us on social media!
                        </p>
                    </Col>
                    <Col xs={12} md={5} className="text-white py-2 py-md-4 text-shadow d-flex align-items-end">
                        <ul className="list-inline text-center text-md-end w-100">
                            <li className="list-inline-item px-2">
                                <Link to="https://www.facebook.com">
                                    <span className="fa fa-facebook text-white"></span>
                                </Link>
                            </li>
                            <li className="list-inline-item px-2">
                                <Link to="https://www.twitter.com">
                                    <span className="fa fa-twitter text-white"></span>
                                </Link>
                            </li>
                            <li className="list-inline-item px-2">
                                <Link to="https://www.instagram.com">
                                    <span className="fa fa-instagram text-white"></span>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SocialMedia;