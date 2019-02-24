import React from 'react';

export default function Details({ title, content = [] }) {
  return (
    <div className="details">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="image-row">image image image</div>
    </div>
  );
}
