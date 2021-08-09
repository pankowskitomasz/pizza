import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class InfoPoint extends Component{
    render(){
        return(
            <Container fluid className="bg-white py-5 minh-25vh border-bottom border-dark">
                <Row className="p-4 w-100">
                    <Col xs={12} sm={6} md={4} className="mx-auto">
                        <h4 className="fw-bold text-warning my-3 fw-bold text-shadow-light">
                            <span className="bg-warning px-1 me-2"></span>
                            New Format
                        </h4>
                        <p className="text-dark px-2">
                            Check our new restaurant! New design, new menu, but still
                            the same good old quality! 
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mx-auto">
                        <h4 className="fw-bold text-warning my-3 fw-bold text-shadow-light">                                                        
                            <span className="bg-warning px-1 me-2"></span>
                            Brand new menu
                        </h4>
                        <p className="text-dark px-2">
                            Check the taste of our pizzas with new cheese and spices 
                            from Italy and Spain.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} className="mx-auto">
                        <h4 className="fw-bold text-warning my-3 fw-bold text-shadow-light">                                                        
                            <span className="bg-warning px-1 me-2"></span>
                            Home delivery
                        </h4>
                        <p className="text-dark px-2">
                            Yes! Now you can order your favourite pizza with
                            delivery straight into your home!  
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default InfoPoint;