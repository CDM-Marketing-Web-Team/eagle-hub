import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Rating from '../Rating/Rating';

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <Container fluid={true}>
            <Row>
              <Col lg="3" sm="12" className="footer_logo">
                {this.props.logo.map((item, index) => (
                  <img
                    key={`logo_${index}`}
                    src={item.logo}
                    alt={item.description}
                  />
                ))}
              </Col>
              <Col lg="6" sm="12" className="footer_copyright">
                {this.props.copyright.map((item, index) => (
                  <div
                    key={`copyright_${index}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </Col>
              <Col lg="1" sm="12" className="footer_language">
                <LanguageSelector
                  countries={this.props.supportedCountries}
                  country={this.props.country}
                  setCountry={this.props.setCountry}
                />
              </Col>
              <Col lg="2" sm="12" className="footer_rating">
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
