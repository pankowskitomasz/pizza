import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

class AboutShort extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill border-green-gray text-green-gray">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"align-items-center py-3 d-flex h-75vh maxh-600 bg-about "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 pt-5 opacity-9">
                    <Col xs={12} md={4} className="mx-auto text-dark p-0 d-flex align-items-center text-end order-2 order-md-1">
                        <img alt="about"
                            className="img-fluid w-75 mx-auto img-thumbnail rounded-circle border-dark-yellow bg-warning"
                            src="img/about/about.png"/>
                    </Col>
                    <Col xs={12} md={8} className="mx-auto text-dark p-0 d-flex align-items-center order-1 order-md-2">
                        <div className="p-5">
                            <h1 className="display-5 text-warning text-shadow text-caption fw-bold text-md-start text-center">
                                Our story
                            </h1>
                            <Card className="border border-dark-yellow bg-warning p-4 text-center text-md-start">
                                <p className="initialism text-dark text-shadow-light">
                                    Using the family recipe for hand-tossed dough, the sauce made from 
                                    fresh-crushed tomatoes, and imported Italian cheese blends, Anthony 
                                    became the sole owner and chef of his first restaurant in the early 80’s. 
                                    “It was 800 square feet. I had a pizza oven, a dough mixer and two tables. 
                                    That's it. I could only sit eight people.” A few years later, he created 
                                    Anthony’s Pizzeria, located in Small Town, and soon moved to City. 
                                </p>
                                {linking}
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutShort;