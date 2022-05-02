import React from 'react';

export default function Details({ title, content, images = [] }) {
  return (
    <div className="details ">
      <h2 className="hide">{title}</h2>
      <p
        className="content hide"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div className="image-row">
        {images.map(({ src, alt }, index) => (
          <img key={index} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
}
