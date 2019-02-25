import React from 'react';
import { ReactComponent as Img } from '../icons/location.svg';

export default function Location({ title, content, images = [] }) {
  return (
    <div className="location">
      <div className="content-row">
        <Img />
        <div className="content">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
      <div className="image-row">
        {images.map(({ src, alt }) => (
          <img key={src} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}
