import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Rating from '../Rating/Rating';

import codemastersLogo from '../../assets/images/codemasters_logo_stk.svg';
import eaSportsLogo from '../../assets/images/ea-sports-logo.svg';

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <Container fluid={true}>
            <Row>
              <Col lg="3" sm="12" className="footer_logo">
                <img
                  className="codemasters-logo"
                  src={codemastersLogo}
                  alt="cdm-logo"
                />
                <img
                  className="ea-sports-logo"
                  src={eaSportsLogo}
                  alt="ea-sports-logo"
                />
              </Col>
              <Col lg="6" sm="12" className="footer_copyright">
                {this.props.copyright.map((item, index) => (
                  <div
                    key={`copyright_${index}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </Col>
              <Col lg="3" sm="12" className="footer_rating">
                <LanguageSelector
                  countries={this.props.supportedCountries}
                  country={this.props.country}
                  setCountry={this.props.setCountry}
                />
                <Rating
                  ratings={this.props.supportedRatings}
                  country={this.props.country}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
