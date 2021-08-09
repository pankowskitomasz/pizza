import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class WhatsNew extends Component{
    render(){
        return(
            <Container fluid className="h-50 maxh-400 bg-whats-new d-flex align-items-center bg-dark py-4 border-bottom border-black">
                <Row className="mx-4 w-100">
                    <Col xs={12} sm={8} md={6} className="text-white text-shadow opacity-9">
                        <h3 className="display-5">
                            Whats new?
                        </h3>
                        <div className="bg-warning p-3">
                            <div className="border-start border-light px-2 my-2">
                                New capriciosa pizza!
                            </div>
                            <div className="border-start border-light px-2 my-2">
                                New double meat pizza!
                            </div>
                        </div>
                        <div className="border-start border-light ms-3 px-2 my-2">
                            Vega pizza!
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default WhatsNew;