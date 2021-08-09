import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class HomeTop extends Component{
    render(){
        return(
            <Container fluid className="h-100vh maxh-600 bg-home d-flex align-items-center px-0 py-2 border-bottom border-black">
                <Row className="mx-0 w-100 bg-warning py-3 border-top border-bottom border-dark opacity-9">
                    <Col xs={10} md={8} lg={6} className="mx-auto text-center text-lg-end text-shadow text-uppercase">
                        <h1 className="display-2 fw-bold">
                            Grand
                        </h1>
                        <h2 className="display-3">
                            Opening
                        </h2>
                    </Col>
                    <Col xs={10} md={8} lg={6} className="mx-auto d-flex align-items-end py-3">
                        <Link to={this.props.backLink.path} className="btn btn-outline-light btn-lg mx-auto ms-lg-0 shadow">
                            Read more
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomeTop;