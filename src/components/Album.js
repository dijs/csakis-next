import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function getPhotos(albumId, limit = 20) {
  const [photos, setPhotos] = React.useState([]);
  if (!photos.length && window.FB) {
    window.FB.api(
      `/${albumId}/photos?fields=images&limit=${limit}`,
      {
        access_token:
          'EAAOHnuZCHKhgBABt4oLSrFUJ561dBqxUBAqdrlZC9MconbNsBzHqY51yYZBBqaJUoKOWhBUYZBkdyEFNMukmjse8WhwiVsauhdoELbDZAGjWDnowLJu6TXZCdXShpmt3I2B9GZByig8H2DYEwfI7gcWjEq8Yz02ZAB0NoKdv6UNZCIrVIg1VrP799keDhisVVbVwZD'
      },
      function(response) {
        if (response && !response.error) {
          setPhotos(
            response.data.map(e => {
              return {
                high: e.images.find(img => img.height === 720).source,
                low: e.images.find(img => img.height === 130).source,
                id: e.id
              };
            })
          );
        }
      }
    );
  }
  return photos;
}

function Photo({ high, low, id }) {
  return <img key={id} data-src={high} src={low} alt="Album" />;
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
