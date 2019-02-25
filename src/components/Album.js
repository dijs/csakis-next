import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// const getAccessToken = () => {
//   if (!window.FB) return;
//   return new Promise((resolve, reject) => {
//     window.FB.api(
//       '/csakiscsaladban',
//       'GET',
//       {
//         fields: 'access_token',
//         access_token:
//           'EAAOHnuZCHKhgBALY8oKxmZBB4mRsfNxKII9ZA5gecu6vGMSvL6PZC7ZCoRByZAXUw8OUCeIJuv2unLwI69xEFBvRZBfmQZANgQ2r6d9M04BkUC7Ld91hpuFa3hezu4cnrWB28Ot4hAiCrj6idZAK6aT1YwRMNJ9dmWF9w0MkmISxMx2ZAcUdlWflhMrB04VEUDwfPLuX5gxffUZBgZDZD'
//       },
//       function(response) {
//         if (response.error) {
//           return reject('GET_ACCESS_TOKEN ERROR: ' + response.error.message);
//         }
//         return resolve(response.data.access_token);
//       }
//     );
//   });
// };

const getAlbum = (albumId, limit = 20) => {
  if (!window.FB) return;
  return new Promise((resolve, reject) => {
    window.FB.api(
      `/${albumId}/photos?fields=images&limit=${limit}`,
      {
        access_token:
          'EAAOHnuZCHKhgBALY8oKxmZBB4mRsfNxKII9ZA5gecu6vGMSvL6PZC7ZCoRByZAXUw8OUCeIJuv2unLwI69xEFBvRZBfmQZANgQ2r6d9M04BkUC7Ld91hpuFa3hezu4cnrWB28Ot4hAiCrj6idZAK6aT1YwRMNJ9dmWF9w0MkmISxMx2ZAcUdlWflhMrB04VEUDwfPLuX5gxffUZBgZDZD'
      },
      function(response) {
        if (response.error) {
          return reject(response.error);
        }
        return resolve(
          response.data.map(e => {
            return {
              high: e.images.find(img => img.height === 720).source,
              low: e.images.find(img => img.height === 130).source,
              id: e.id
            };
          })
        );
      }
    );
  });
};

function getPhotos(albumId, limit) {
  const [photos, setPhotos] = React.useState([
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
  if (!photos.length && window.FB) {
    // getAccessToken()
    //   .then(accessToken => )
    getAlbum(albumId, limit)
      .then(data => setPhotos(data))
      .catch(err => console.log(err));
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
