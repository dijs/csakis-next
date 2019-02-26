import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function getPhotos(albumId, limit) {
  const [photos] = React.useState([
    {
      low: '//placehold.it/100x200'
    },
    {
      low: '//placehold.it/300x200'
    },
    {
      low: '//placehold.it/200'
    },
    {
      low: '//placehold.it/200'
    }
  ]);
  if (!photos.length) {
    // Do something...
  }
  return photos;
}

function Photo({ high, low, id }) {
  return <img key={id || low} data-src={high} src={low} alt="Album" />;
}

export default function Album({ albumId }) {
  const photos = getPhotos(albumId);
  return (
    <div className="album">
      <Carousel showIndicators={false} showThumbs={false}>
        {photos.map(Photo)}
      </Carousel>
    </div>
  );
}
