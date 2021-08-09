import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class MenuShort extends Component{
    render(){
        return(
            <Container fluid className="bg-menu minh-50vh d-flex align-items-start">
                <Row className="mx-0 p-4 w-100">
                    <Col xs="12" className="py-3 text-center">
                        <h2 className="display-5 fw-bold text-warning text-uppercase text-shadow">
                            Our new menu
                        </h2>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MenuShort; 