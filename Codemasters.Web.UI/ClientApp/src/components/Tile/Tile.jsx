import React from 'react';
import MediaQuery from 'react-responsive';
import Button from '../Button/Button';
import data from './data';

import './Tile.scss';

const resolveContent = (content) => {
  return content.map((item, index) => {
    if (item.html !== undefined) {
      return (
        <div
          className="tile_description_text"
          key={`description_${index}`}
          dangerouslySetInnerHTML={{ __html: item.html }}
        />
      );
    } else if (Array.isArray(item)) {
      return item.map((b) => {
        return b.buttons.map((button, index) => {
          return (
            <Button key={`link_${index}`} link={button[0].link}>
              {button[0].text}
            </Button>
          );
        });
      });
    }
  });
};

export default function Tile(props) {
  // const images = props.tile.images;
  const images = data;
  // const images = data;
  console.log(props.tile);
  console.log(props.tile.data);
  console.log(data);

  return (
    <div className="tile">
      {/* <MediaQuery maxWidth={767}>
        <div className="image-wrapper">
          <img
            className="tile_image"
            src={images[2].url}
            alt={images[2].description}
          />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1199}>
        <div className="image-wrapper">
          <img
            className="tile_image"
            src={images[1].url}
            alt={images[2].description}
          />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <div className="image-wrapper">
          {props.feature && (
            <img
              className="tile_image"
              src={images[0].url}
              alt={images[0].description}
            />
          )}
          {!props.feature && (
            <img
              className="tile_image"
              src={images[1].url}
              alt={images[1].description}
            />
          )}
        </div>
      </MediaQuery> */}

      <MediaQuery maxWidth={767}>
        <div className="image-wrapper">
          <img
            className="tile_image"
            src={images[2].url}
            alt={images[2].description}
          />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768} maxWidth={1199}>
        <div className="image-wrapper">
          <img
            className="tile_image"
            src={images[1].url}
            alt={images[2].description}
          />
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1200}>
        <div className="image-wrapper">
          {props.feature && (
            <img
              className="tile_image"
              src={images[0].url}
              alt={images[0].description}
            />
          )}
          {!props.feature && (
            <img
              className="tile_image"
              src={images[1].url}
              alt={images[1].description}
            />
          )}
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div className="tile_description">
          {resolveContent(props.tile.description)}
        </div>
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <div className="tile_overlay">
          <div className="tile_texture" />
        </div>

        <div className="tile_description">
          {resolveContent(props.tile.description)}
        </div>
      </MediaQuery>
    </div>
  );
}
