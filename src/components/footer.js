import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        let menuContent = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            if(idx<4){
                return <li key={idx}>
                    <Link to={item.path} className="fw-bold text-white text-decoration-none">
                        {item.name}
                    </Link>
                </li>;
            }
        });
        let menuContentExt = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            if(idx>=4){
                return <li key={idx}>
                    <Link to={item.path} className="fw-bold text-white text-decoration-none">
                        {item.name}
                    </Link>
                </li>;
            }
        });
        return(      
            <footer>
                <Container fluid className="d-flex align-items-center z-index-0 px-3 pt-3 pb-1 bg-dark-yellow text-shadow border-top border-black p-0 m-0">
                    <Row className="mx-auto text-center d-flex w-100 small">
                        <Col xs={12} md={6} className="mx-auto text-shadow text-center text-md-start">
                            <h5 className="text-white fw-bold">
                                About
                            </h5>
                            <p className="small initialism">
                                After spending the last few years popping up at different locations 
                                around town, we have settled into a permanent space. We’re operating 
                                essentially as a takeout window, making the pick-up situation seamless 
                                and quick.
                            </p>
                        </Col>
                        <Col xs={12} md={3} className="mx-auto text-shadow text-center text-md-end">
                            <h5 className="text-white fw-bold">
                                Navigate
                            </h5>
                            <ul className="list-unstyled px-2">
                                {menuContent}
                            </ul>
                        </Col>
                        <Col xs={12} md={3} className="mx-auto text-shadow text-center text-md-end">
                            <h5 className="text-white fw-bold">
                                Orders
                            </h5>
                            <ul className="list-unstyled px-2">
                                {menuContentExt}
                            </ul>
                        </Col>
                        <Col xs={12} className="mx-auto text-shadow border-top border-dark mt-3">
                            <small className="my-0 text-white opacity-8">
                                Copyright &copy; 2021-2022 Tomasz Pankowski. All rights reserved. 
                                <Link to={this.props.privacyLink.href} className="text-white text-decoration-none ms-1">
                                     {this.props.privacyLink.name}
                                </Link>
                            </small>
                        </Col>
                    </Row>
                </Container> 
            </footer> 
        );
    }
}

export default Footer;