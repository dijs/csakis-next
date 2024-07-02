import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function usePhotos(albumId, limit) {
  const [photos] = React.useState([
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1691785177/2024%20Eng%20Csakis%20Camp/2024.09_GroupPhoto.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1689595489/2023/Hungarian%20Camp%20Photos/IMG_9957.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1689594774/2023/Hungarian%20Camp%20Photos/IMG_9704.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1623146510/2020%20camp%20photos/IMG_9965.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1582722625/2019%20Camp%20Photos/Csakisgrouphoto.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1582722624/2019%20Camp%20Photos/Csakis2019-SQ-7.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1582722625/2019%20Camp%20Photos/Csakis2019-SQ-10.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1687361733/2022%20%20camp%20photos/2022-06.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1687360551/2021%20Photos/2021-001.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1623146618/2020%20camp%20photos/IMG_0186.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1551187811/Photos%20for%202019%20web%20promotion/Chakis%20Prev.%20Events/53215230_360031404841527_810346692510482432_n.jpg'
    },
    {
      low:
        'https://placeholder/csakis-fesztival/image/upload/c_fit,e_art:red_rock,h_500,w_500/v1551187808/Photos%20for%202019%20web%20promotion/Chakis%20Prev.%20Events/53043022_2496782990397011_6085219276833161216_n.jpg'
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
  const photos = usePhotos(albumId);
  return (
    <div className="album">
      <Carousel showIndicators={false} showThumbs={false}>
        {photos.map(Photo)}
      </Carousel>
    </div>
  );
}
