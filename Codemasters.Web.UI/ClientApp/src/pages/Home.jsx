import React, { Component } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import Tile from '../components/Tile/Tile';
import data from '../components/Tile/data';

import '../assets/sass/home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    axios.get(`/api/website/home_page/${this.props.country}`).then((response) =>
      this.setState({
        ready: true,
        data: response.data,
      })
    );
  }

  componentDidUpdate() {
    console.log(this.state.data.tiles.images);

    this.state.data.tiles.unshift(data);
    console.log(this.state.data.tiles);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>F1 Hub</title>
          {this.state.ready && (
            <meta name="keywords" content={this.state.data.metadataKeywords} />
          )}
          {this.state.ready && (
            <meta name="title" content={this.state.data.metadataTitle} />
          )}
          {this.state.ready && (
            <meta
              name="description"
              content={this.state.data.metadataDescription}
            />
          )}
        </Helmet>
        <div className="home">
          {this.state.ready &&
            this.state.data.tiles.map((t, index) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-delay={150 * (index + 1)}
                  data-aos-anchor-placement="top-bottom"
                  key={`tile_${index}`}
                  className={
                    index > 0
                      ? index % 2 === 0
                        ? 'home_tiles home_tiles--left'
                        : 'home_tiles home_tiles--right'
                      : 'home_feature'
                  }
                >
                  <Tile key={`tile_${index}`} tile={t} feature={index === 0} />
                </div>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}
