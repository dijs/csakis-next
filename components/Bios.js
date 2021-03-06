import React from 'react';

function Bio({ content, speakerName, image, alt }) {
  return (
    <div key={alt} className="bio">
      <img src={image} alt={alt} />
      <div>
        <p className="bold">{speakerName}</p>
        <p>{content}</p>
      </div>
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
