import React,{Component} from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Table from "react-bootstrap/esm/Table";

class TitleTextTableCenter extends Component{
    render(){
        return(        
            <Container fluid className={" align-items-center py-5 d-flex minh-100vh "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5">
                    <Col xs={12} md={7} className="mx-auto minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-shadow">
                            <h2 className="dispaly-6 fw-bold text-warning">
                                Menu and pricing
                            </h2>
                            <p className="text-white">
                                This business is founded by strong and tight family roots, where our 
                                Italian background is part of the experience.  
                            </p>
                            <p className="text-white">
                                The food is prepared fresh daily, and everything is homemade: breads, 
                                pizza dough, and sauces, from recipes handed down by our grandparents, 
                                Antonio and Antonina Vitale, and family.
                            </p>
                            <Table hover striped className="text-start">
                                <thead>
                                    <tr className="text-warning">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default TitleTextTableCenter;