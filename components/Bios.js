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

export default function Bios({ title, camps, camp1, camp2 , camp3, bios = [] }) {
  return (
    <div className="bios">
      <h2>{title}</h2>
      <p className="center bold" >{camps}</p>
      <p className="center " >{camp1}</p>
      <p className="center " >{camp2}</p>
      <p className="center " >{camp3}</p>
      {bios.map(Bio)}
    </div>
  );
}
