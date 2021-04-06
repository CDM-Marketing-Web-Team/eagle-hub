import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Rating from '../Rating/Rating';

import codemastersLogo from '../../assets/images/codemasters_logo_stk.svg'
import eaSportsLogo from '../../assets/images/ea-sports-logo.svg'

import './Footer.scss';

export default class Footer extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="footer">
                    <Container fluid={true}>
                        <Row>
                            {/* <Col lg="3" sm="12" className="footer_logo">
                                {this.props.logo.map((item, index) => <img key={`logo_${index}`} src={item.logo} alt={item.description} />)}
                            </Col> */}
                            <Col lg="3" sm="12" className="footer_logo">
                                <img class="codemasters-logo" src={codemastersLogo} alt="cdm-logo" />
                                <img class="ea-sports-logo" src={eaSportsLogo} alt="ea-sports-logo" />
                            </Col>
                            <Col lg="6" sm="12" className="footer_copyright">
                                {this.props.copyright.map((item, index) => <div key={`copyright_${index}`} dangerouslySetInnerHTML={{ __html: item }} />)}
                            </Col>
                            <div lg="3"></div>
                            <Col lg="1" sm="12" className="footer_language">
                                <LanguageSelector countries={this.props.supportedCountries} country={this.props.country} setCountry={this.props.setCountry}/>
                            </Col>
                            <Col lg="1" sm="12" className="footer_rating">
                                <Rating ratings={this.props.supportedRatings} country={this.props.country} />
                            </Col>
                            
                        </Row>
                    </Container>           
                </div>
            </React.Fragment>

    )
        
    }
}

