import React from 'react';

function Bio({ content, image, alt }) {
  return (
    <div key={alt} className="bio">
      <img src={image} alt={alt} />
      <p>{content}</p>
    </div>
  );
}

export default function Bios({ title, bios = [] }) {
  return (
    <div className="bios">
      <h2>{title}</h2>
      {bios.map(Bio)}
    </div>
  );
}
